import { Button } from '@/components/ui/button';
import Link from 'next/link';
import MobileNav from './mobile-nav';

export default function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center gap-4">
        <div className="lg:hidden">
          <MobileNav />
        </div>
        <Button asChild variant="ghost" className="gap-2 text-lg font-black">
          <Link href="/">OretokuTools</Link>
        </Button>
      </div>
    </header>
  );
}
