'use client';

import { useTagParams } from '@/hooks/use-tag-params';
import { cn } from '@/lib/utils';
import type { ItemWithTags, Tag } from '@/types/api';
import { subMonths } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import FavoriteButton from './favorite-button';
import { Badge } from './ui/badge';

export default function ItemCard({ item, tags }: { item: ItemWithTags; tags: Tag[] }) {
  const { getTagLabel } = useTagParams({ allTags: tags });

  return (
    <div className='relative flex flex-col rounded-lg border bg-card p-4 shadow-sm transition duration-500 hover:shadow-lg'>
      <div className=' rounded-lg border bg-muted/10 p-4'>
        <div className='flex justify-between'>
          <div className='relative mb-3 aspect-square w-1/4 overflow-hidden rounded-md'>
            <Image
              fill
              className='object-cover'
              src={item.imageUrl}
              alt={item.name}
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
            />
          </div>
          <div className='flex h-fit items-center gap-3'>
            <div className={cn(new Date(item.updatedAt) < subMonths(new Date(), 1) && 'hidden')}>
              <Badge className='bg-sky-100 text-sky-900'>New</Badge>
            </div>
            <FavoriteButton id={item.id.toString()} />
          </div>
        </div>
        <h2 className='font-semibold'>
          <Link href={item.url} target='_blank'>
            {item.name}
            <span className='absolute inset-0'></span>
          </Link>
        </h2>
        <p className='line-clamp-2 h-12 pt-2 text-sm font-medium'>{item.description}</p>
      </div>
      <div className='mt-4 flex min-h-16 flex-wrap gap-2'>
        {item.tags.map((t) => (
          <div
            key={t.id}
            className='relative z-10 flex h-8 items-center whitespace-nowrap rounded-md border bg-muted p-2 text-xs text-muted-foreground'
          >
            <span className='mr-2 inline-block rounded-md bg-muted-foreground/10 p-0.5 px-1 leading-none'>#</span>
            {getTagLabel(t.id)}
          </div>
        ))}
      </div>
    </div>
  );
}
