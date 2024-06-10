'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { mainTags } from '@/data/tag';
import { useTagParams } from '@/hooks/use-tag-params';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
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
      <SheetContent side='left'>
        <div className='flex flex-col'>
          {mainTags.map((tagId) => (
            <Button
              key={tagId}
              variant='ghost'
              className={cn('justify-start', tags[0] === tagId && 'bg-accent')}
              asChild
            >
              <Link href={`/?tags=${addTagToSearchParams(tagId)}`}>{getTagLabel(tagId)}</Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
