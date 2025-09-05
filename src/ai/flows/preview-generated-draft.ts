'use server';

/**
 * @fileOverview AI flow for generating a preview of a memorial book draft.
 *
 * - generatePreviewDraft - A function that generates the draft preview.
 * - GeneratePreviewDraftInput - The input type for the generatePreviewDraft function.
 * - GeneratePreviewDraftOutput - The return type for the generatePreviewDraft function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePreviewDraftInputSchema = z.object({
  content: z.string().describe('The content to use in the memorial book draft.'),
  theme: z.string().optional().describe('The theme of the memorial book.'),
});
export type GeneratePreviewDraftInput = z.infer<typeof GeneratePreviewDraftInputSchema>;

const GeneratePreviewDraftOutputSchema = z.object({
  previewHtml: z.string().describe('The HTML content of the memorial book draft preview.'),
});
export type GeneratePreviewDraftOutput = z.infer<typeof GeneratePreviewDraftOutputSchema>;

export async function generatePreviewDraft(input: GeneratePreviewDraftInput): Promise<GeneratePreviewDraftOutput> {
  return generatePreviewDraftFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePreviewDraftPrompt',
  input: {schema: GeneratePreviewDraftInputSchema},
  output: {schema: GeneratePreviewDraftOutputSchema},
  prompt: `You are an AI assistant specialized in generating memorial book drafts.

  Generate an HTML preview of a memorial book draft based on the following content and theme.

  Content: {{{content}}}
  Theme: {{{theme}}}

  Return only the HTML content.
  `,
});

const generatePreviewDraftFlow = ai.defineFlow(
  {
    name: 'generatePreviewDraftFlow',
    inputSchema: GeneratePreviewDraftInputSchema,
    outputSchema: GeneratePreviewDraftOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
