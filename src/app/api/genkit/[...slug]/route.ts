import { createGenkitNextHandler } from '@genkit-ai/next/server';
import '@/ai/dev';

export const { GET, POST } = createGenkitNextHandler();
