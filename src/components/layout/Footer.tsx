import Link from 'next/link';
import Logo from '@/components/Logo';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/">
            <Logo />
          </Link>
          <p className="text-center md:text-left text-sm leading-loose text-muted-foreground">
            &copy; {currentYear} Legacy AI. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 text-sm">
          <h4 className="font-semibold mb-2">Navigation</h4>
            <Link href="/guide" className='text-muted-foreground transition-colors hover:text-foreground'>Guide</Link>
            <Link href="/pricing" className='text-muted-foreground transition-colors hover:text-foreground'>Pricing</Link>
            <Link href="/#showcase" className='text-muted-foreground transition-colors hover:text-foreground'>Showcase</Link>
            <Link href="/#feedback" className='text-muted-foreground transition-colors hover:text-foreground'>Feedback</Link>
            <Link href="/contact" className='text-muted-foreground transition-colors hover:text-foreground'>Contact</Link>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
           <h4 className="font-semibold mb-2">Connect With Us</h4>
           <div className="flex items-center gap-4">
             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
               <Github className="h-6 w-6" />
               <span className="sr-only">GitHub</span>
             </a>
             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
               <Linkedin className="h-6 w-6" />
               <span className="sr-only">LinkedIn</span>
             </a>
             <a href="mailto:support@legacyai.com" className="text-muted-foreground hover:text-foreground transition-colors">
               <Mail className="h-6 w-6" />
               <span className="sr-only">Email</span>
             </a>
           </div>
        </div>
      </div>
    </footer>
  );
}
