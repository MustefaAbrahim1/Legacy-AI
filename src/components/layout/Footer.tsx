import Link from 'next/link';
import Logo from '@/components/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/">
            <Logo />
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {currentYear} Legacy AI. All rights reserved.
          </p>
        </div>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/how-it-works" className='transition-colors hover:text-foreground'>How It Works</Link>
            <Link href="/pricing" className='transition-colors hover:text-foreground'>Pricing</Link>
            <Link href="/#showcase" className='transition-colors hover:text-foreground'>Showcase</Link>
            <Link href="/contact" className='transition-colors hover:text-foreground'>Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
