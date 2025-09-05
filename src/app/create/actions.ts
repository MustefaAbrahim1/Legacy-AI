'use server';

import { generateMemorialBookDraft } from '@/ai/flows/generate-memorial-book-draft';
import { generatePreviewDraft } from '@/ai/flows/preview-generated-draft';
import { z } from 'zod';

const createSchema = z.object({
  content: z.string().min(100, 'Please provide at least 100 characters to generate a meaningful draft.'),
});

export type CreateState = {
  error: string | null;
  previewHtml: string | null;
};

export async function createBookAction(prevState: CreateState, formData: FormData): Promise<CreateState> {
  const content = formData.get('content') as string;
  const validatedFields = createSchema.safeParse({ content });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.content?.join(', ') ?? 'Invalid content.',
      previewHtml: null,
    };
  }

  try {
    const draftResult = await generateMemorialBookDraft({ content: validatedFields.data.content });
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
    };
  } catch (error) {
    console.error('Error in createBookAction:', error);
    return {
      error: 'An unexpected error occurred while generating the draft. Please try again.',
      previewHtml: null,
    };
  }
}
