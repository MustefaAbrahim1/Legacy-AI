'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';

import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { createBookAction, type CreateState } from './actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending}>
      {pending ? 'Generating Draft...' : 'Generate AI Draft'}
    </Button>
  );
}

export default function CreateForm() {
  const initialState: CreateState = { error: null, previewHtml: null };
  const [state, formAction] = useFormState(createBookAction, initialState);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.previewHtml && previewRef.current) {
      previewRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [state.previewHtml]);

  return (
    <div>
      <form action={formAction} className="space-y-6 max-w-4xl mx-auto">
        <Textarea
          name="content"
          placeholder="Paste the life story, obituary, memories, and tributes here..."
          rows={15}
          className="shadow-inner"
        />
        <div className="text-center">
          <SubmitButton />
        </div>
      </form>

      {state.error && (
        <Alert variant="destructive" className="mt-8 max-w-4xl mx-auto">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Generation Error</AlertTitle>
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {state.previewHtml && (
        <div ref={previewRef} className="mt-16">
          <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-8">
            Your Generated Draft
          </h2>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div
                className="prose dark:prose-invert max-w-none p-8"
                dangerouslySetInnerHTML={{ __html: state.previewHtml }}
              />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
