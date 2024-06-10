'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { mainTags } from '@/data/tag';
import { useTagParams } from '@/hooks/use-tag-params';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MobileNav() {
  const { getTagLabel, addTagToSearchParams, tags } = useTagParams();

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
              <Button variant='ghost' className={cn('justify-start', tags[0] === tagId && 'bg-accent')} asChild>
                <Link href={`/?tags=${addTagToSearchParams(tagId)}`}>{getTagLabel(tagId)}</Link>
              </Button>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
