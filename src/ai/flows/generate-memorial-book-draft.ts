'use server';

/**
 * @fileOverview Generates a memorial book draft from uploaded content using AI.
 *
 * - generateMemorialBookDraft - A function that handles the memorial book draft generation process.
 * - GenerateMemorialBookDraftInput - The input type for the generateMemorialBookDraft function.
 * - GenerateMemorialBookDraftOutput - The return type for the generateMemorialBookDraft function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMemorialBookDraftInputSchema = z.object({
  content: z
    .string()
    .describe("The content to be used for generating the memorial book draft."),
});
export type GenerateMemorialBookDraftInput = z.infer<typeof GenerateMemorialBookDraftInputSchema>;

const GenerateMemorialBookDraftOutputSchema = z.object({
  draft: z.string().describe('The generated memorial book draft.'),
});
export type GenerateMemorialBookDraftOutput = z.infer<typeof GenerateMemorialBookDraftOutputSchema>;

export async function generateMemorialBookDraft(
  input: GenerateMemorialBookDraftInput
): Promise<GenerateMemorialBookDraftOutput> {
  return generateMemorialBookDraftFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMemorialBookDraftPrompt',
  input: {schema: GenerateMemorialBookDraftInputSchema},
  output: {schema: GenerateMemorialBookDraftOutputSchema},
  prompt: `You are an AI assistant that generates memorial book drafts from uploaded content.
\nGenerate a draft of the memorial book using the following content:\n\nContent: {{{content}}}`,
});

const generateMemorialBookDraftFlow = ai.defineFlow(
  {
    name: 'generateMemorialBookDraftFlow',
    inputSchema: GenerateMemorialBookDraftInputSchema,
    outputSchema: GenerateMemorialBookDraftOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
