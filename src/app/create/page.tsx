import Link from 'next/link';
import Logo from '@/components/Logo';
import CreateForm from './CreateForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Create a Memorial Book | Legacy AI',
};

export default function CreatePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 border-b">
        <div className="container flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">Create a Memorial Book</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Paste an obituary, stories, or any collection of text below. Upload photos to be included (available on Advance and Expert plans). Our AI will craft a beautiful draft for your memorial book.
            </p>
          </div>
          <CreateForm />
        </div>
      </main>
    </div>
  );
}
