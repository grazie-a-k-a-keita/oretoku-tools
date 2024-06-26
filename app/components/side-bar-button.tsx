'use client';

import { Button } from '@/components/ui/button';
import type { TagId } from '@/data/tag';
import { useTagParams } from '@/hooks/use-tag-params';
import { cn } from '@/lib/utils';
import { Palette, SquareCode, Squirrel, Image as _Image } from 'lucide-react';
import Link from 'next/link';

export default function SideBarButton({ tagId, ...restProps }: { tagId: TagId }) {
  const { addTagToSearchParams, getTagLabel, tags } = useTagParams();

  return (
    <Button
      variant='ghost'
      className={cn(
        'justify-start',
        tags[0] === tagId ? 'bg-accent opacity-100' : 'opacity-70 hover:opacity-100 transition duration-300',
      )}
      asChild
    >
      <Link href={`/?tags=${addTagToSearchParams(tagId)}`} className='gap-3' {...restProps}>
        {tagId === 'icon' && <Squirrel size={20} />}
        {tagId === 'image' && <_Image size={20} />}
        {tagId === 'develop' && <SquareCode size={20} />}
        {tagId === 'illust' && <Palette size={20} />}
        {getTagLabel(tagId)}
      </Link>
    </Button>
  );
}
