'use client';

import type { Site } from '@/domain/site';
import { cn } from '@/lib/utils';
import { subMonths } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import FavoriteButton from './favorite-button';
import { Badge } from './ui/badge';

export default function ItemCard({ site }: { site: Site }) {
  return (
    <div className='relative flex flex-col rounded-lg border bg-card p-4 shadow-sm transition duration-500 hover:shadow-lg '>
      <div className=' rounded-lg border bg-muted/10 p-4'>
        <div className='flex justify-between'>
          <div className='relative mb-3 aspect-square w-1/4 overflow-hidden rounded-md'>
            <Image
              fill
              className='object-cover'
              src={site.imagePath}
              alt={site.name}
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
            />
          </div>
          <div className='flex h-fit items-center gap-3'>
            <div className={cn(new Date(site.releasedAt) < subMonths(new Date(), 1) && 'hidden')}>
              <Badge className='bg-sky-100 text-sky-900'>New</Badge>
            </div>
            <FavoriteButton id={site.id} />
          </div>
        </div>
        <h2 className='font-semibold'>
          <Link
            href={site.url}
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
          >
            {site.name}
            <span className='absolute inset-0'></span>
          </Link>
        </h2>
        <p className='line-clamp-2 h-12 pt-2 text-sm font-medium'>{site.description}</p>
      </div>
      <div className='mt-4 flex min-h-16 flex-wrap gap-2'>
        {site.tags.map((tag) => (
          <div
            key={tag.id}
            className='relative z-10 flex h-8 items-center whitespace-nowrap rounded-md border bg-muted p-2 text-xs text-muted-foreground'
          >
            <span className='mr-2 inline-block rounded-md bg-muted-foreground/10 p-0.5 px-1 leading-none'>#</span>
            {tag.name}
          </div>
        ))}
      </div>
    </div>
  );
}
