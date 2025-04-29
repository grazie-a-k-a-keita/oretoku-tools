import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import FavoriteSelect from './favorite-select';
import MobileNav from './mobile-nav';

export default function Header() {
  return (
    <header className='fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='flex h-16 items-center justify-between px-4'>
        <div className='flex gap-4'>
          <Button asChild variant='ghost' className='text-lg font-black hover:opacity-90'>
            <Link href='/'>
              <Image src='/oretoku-tools.svg' alt='logo' className='dark:invert' width={150} height={26} priority />
            </Link>
          </Button>
          <Suspense>
            <FavoriteSelect />
          </Suspense>
        </div>
        <div className='lg:hidden'>
          <Suspense>
            <MobileNav />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
