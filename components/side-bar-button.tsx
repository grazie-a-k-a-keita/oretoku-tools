'use client';

import { Button } from '@/components/ui/button';
import type { Tag } from '@/domain/tag';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function SideBarButton({ tag, ...restProps }: { tag: Tag }) {
  const searchParams = useSearchParams();

  return (
    <Button
      variant='ghost'
      className={cn(
        'justify-start',
        searchParams.get('tag') === tag.id
          ? 'bg-accent opacity-100'
          : 'opacity-25 hover:opacity-100 transition duration-300',
      )}
      asChild
    >
      <Link href={`/?tag=${tag.id}`} className='gap-3' {...restProps}>
        <Image height={20} width={20} src={tag.imagePath} alt={tag.name} className='dark:invert' />
        {tag.name}
      </Link>
    </Button>
  );
}
