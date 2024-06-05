import { AppConfig } from '@/app.config';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileNav from './mobile-nav';

export default function Header() {
  return (
    <header className='border-b'>
      <div className=' flex h-16 items-center gap-4 px-4'>
        <div className='lg:hidden'>
          <Suspense>
            <MobileNav />
          </Suspense>
        </div>
        <Button asChild variant='ghost' className='gap-2 text-lg font-black'>
          <Link href='/'>
            <Image src='/oretoku-tools.svg' alt='logo' className='dark:invert' width={20} height={20} priority />
            {AppConfig.title}
          </Link>
        </Button>
      </div>
    </header>
  );
}
