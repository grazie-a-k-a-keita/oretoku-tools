'use client';

import { Button } from '@/components/ui/button';
import { useTagParams } from '@/hooks/use-tag-params';
import { cn } from '@/lib/utils';
import type { Tag } from '@/types/api';
import Image from 'next/image';
import Link from 'next/link';

export default function SideBarButton({
  tagId,
  iconUrl,
  _tags,
  ...restProps
}: {
  tagId: number;
  iconUrl: string;
  _tags: Tag[];
}) {
  const { selectedTag, getTagLabel } = useTagParams({ allTags: _tags });
  const buttonLabel = getTagLabel(tagId);

  return (
    <Button
      variant='ghost'
      className={cn(
        'justify-start',
        selectedTag === tagId ? 'bg-accent opacity-100' : 'opacity-25 hover:opacity-100 transition duration-300',
      )}
      asChild
    >
      <Link href={`/?tag=${tagId}`} className='gap-3' {...restProps}>
        <Image height={20} width={20} src={iconUrl} alt={buttonLabel} className='text-white' />
        {buttonLabel}
      </Link>
    </Button>
  );
}
