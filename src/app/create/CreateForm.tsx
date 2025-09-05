'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, UploadCloud, Trash2 } from 'lucide-react';
import { createBookAction, type CreateState } from './actions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    if (state.previewHtml && previewRef.current) {
      previewRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [state.previewHtml]);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const photoUrls = files.map(file => URL.createObjectURL(file));
      setPhotos(prev => [...prev, ...photoUrls]);
    }
  };
  
  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };


  return (
    <div>
      <form action={formAction} className="space-y-6 max-w-4xl mx-auto">
        <Textarea
          name="content"
          placeholder="Paste the life story, obituary, memories, and tributes here..."
          rows={15}
          className="shadow-inner"
        />

        <div className="space-y-4">
          <Label htmlFor="photos">Upload Photos (Premium Feature)</Label>
          <Input id="photos" name="photos" type="file" multiple onChange={handlePhotoUpload} accept="image/*" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="relative group">
                <Image src={photo} alt={`upload preview ${index}`} width={200} height={200} className="rounded-md object-cover aspect-square" />
                <Button variant="destructive" size="icon" className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => removePhoto(index)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

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
                className="prose dark:prose-invert max-w-none p-8 relative prevent-copy"
                onContextMenu={(e) => e.preventDefault()}
                dangerouslySetInnerHTML={{ __html: state.previewHtml }}
              />
            </CardContent>
          </Card>
          <div className="text-center mt-8 space-x-4">
              <Button size="lg" asChild>
                  <Link href="/pricing">Choose a Plan & Finalize</Link>
              </Button>
          </div>
          <Alert className="mt-4 max-w-4xl mx-auto">
            <AlertTitle>This is a Protected Preview</AlertTitle>
            <AlertDescription>
                To protect the author's work, copying and screenshots are disabled for this preview. Please select a plan to receive the final, editable version of your book. Taking photos of the screen is not preventable by the application.
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}
