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
        <Button asChild variant='ghost' className='text-lg font-black hover:opacity-90'>
          <Link href='/'>
            <Image src='/oretoku-tools.svg' alt='logo' className=' dark:invert' width={150} height={26} priority />
          </Link>
        </Button>
      </div>
    </header>
  );
}
