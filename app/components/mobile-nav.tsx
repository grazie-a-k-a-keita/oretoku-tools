'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { mainTags } from '@/data/tag';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import SideBarButton from './side-bar-button';

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' variant='outline'>
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <div className='flex'>
          <Image
            src='/oretoku-tools.svg'
            alt='logo'
            className='my-6 ml-2 dark:invert'
            width={150}
            height={26}
            priority
          />
        </div>
        <div className='flex flex-col space-y-1'>
          {mainTags.map((tagId) => (
            <SheetClose asChild key={tagId}>
              <SideBarButton tagId={tagId} />
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
