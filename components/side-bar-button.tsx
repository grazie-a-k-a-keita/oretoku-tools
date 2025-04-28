'use client';

import { Button } from '@/components/ui/button';
import { useTagParams } from '@/hooks/use-tag-params';
import { cn } from '@/lib/utils';
import type { Tag } from '@/types/newt';
import Image from 'next/image';
import Link from 'next/link';

export default function SideBarButton({
  tagId,
  iconUrl,
  _tags,
  ...restProps
}: {
  tagId: string;
  iconUrl: string;
  _tags: Tag[];
}) {
  const { addTagToSearchParams, getTagLabel, tags } = useTagParams({ allTags: _tags });

  return (
    <Button
      variant='ghost'
      className={cn(
        'justify-start',
        tags[0] === tagId ? 'bg-accent opacity-100' : 'opacity-25 hover:opacity-100 transition duration-300',
      )}
      asChild
    >
      <Link href={`/?tags=${addTagToSearchParams(tagId)}`} className='gap-3' {...restProps}>
        <Image height={20} width={20} src={iconUrl} alt={tagId} />
        {getTagLabel(tagId)}
      </Link>
    </Button>
  );
}
