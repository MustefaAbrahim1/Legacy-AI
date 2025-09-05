'use server';

import { generateMemorialBookDraft } from '@/ai/flows/generate-memorial-book-draft';
import { generatePreviewDraft } from '@/ai/flows/preview-generated-draft';
import { z } from 'zod';

const createSchema = z.object({
  content: z.string().min(100, 'Please provide at least 100 characters to generate a meaningful draft.'),
  photos: z.array(z.string()).optional(),
});

export type CreateState = {
  error: string | null;
  previewHtml: string | null;
  photos: string[];
};

function fileToDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

export async function createBookAction(prevState: CreateState, formData: FormData): Promise<CreateState> {
  const content = formData.get('content') as string;
  const photoFiles = formData.getAll('photos') as File[];

  const photoDataUris = await Promise.all(photoFiles.filter(p => p.size > 0).map(fileToDataUrl));

  const validatedFields = createSchema.safeParse({ content, photos: photoDataUris });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.content?.join(', ') ?? 'Invalid content.',
      previewHtml: null,
      photos: [],
    };
  }

  try {
    const draftResult = await generateMemorialBookDraft({ 
        content: validatedFields.data.content,
        photos: validatedFields.data.photos,
    });
    if (!draftResult.draft) {
      throw new Error('Failed to generate draft.');
    }

    const previewResult = await generatePreviewDraft({ content: draftResult.draft, theme: 'classic' });
    if (!previewResult.previewHtml) {
      throw new Error('Failed to generate preview.');
    }

    return {
      error: null,
      previewHtml: previewResult.previewHtml,
      photos: photoDataUris,
    };
  } catch (error) {
    console.error('Error in createBookAction:', error);
    return {
      error: 'An unexpected error occurred while generating the draft. Please try again.',
      previewHtml: null,
      photos: [],
    };
  }
}
