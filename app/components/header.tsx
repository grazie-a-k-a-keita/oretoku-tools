import { AppConfig } from '@/app.config';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileNav from './mobile-nav';

export default function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center gap-4">
        <div className="lg:hidden">
          <Suspense>
            <MobileNav />
          </Suspense>
        </div>
        <Button asChild variant="ghost" className="gap-2 text-lg font-black">
          <Link href="/">{AppConfig.title}</Link>
        </Button>
      </div>
    </header>
  );
}
