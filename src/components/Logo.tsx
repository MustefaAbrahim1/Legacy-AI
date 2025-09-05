import { cn } from '@/lib/utils';
import type React from 'react';

const Logo = ({ className, ...props }: React.ComponentProps<'svg'>) => {
  return (
    <div className="flex items-center gap-2">
      <svg
        className={cn('h-8 w-8 text-primary', className)}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <path d="m16 16-4-4" />
        <path d="m18 14 1-1" />
      </svg>
      <span className="font-headline text-xl font-bold text-foreground">Legacy AI</span>
    </div>
  );
};

export default Logo;
