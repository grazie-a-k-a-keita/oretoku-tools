'use client';

import ItemCard from '@/components/item-card';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useTagParams } from '@/hooks/use-tag-params';
import type { Item, Tag } from '@/types/newt';
import Link from 'next/link';

export default function Client({ itemData, tagData }: { itemData: Item[]; tagData: Tag[] }) {
  const { tags, removeTagFromSearchParams, getTagLabel } = useTagParams({ allTags: tagData });

  const currentItems = itemData.filter((item) => {
    if (tags.length === 0) {
      return true;
    }

    return tags.every((tag) => item.tag.some((t) => t.slug === tag));
  });

  if (currentItems.length === 0) {
    return <p className='m-10 text-center text-base text-muted-foreground'>Not found</p>;
  }

  return (
    <ScrollArea className='h-[calc(100dvh-130px)]'>
      <div className='p-4'>
        <div className='mb-4 grid grid-cols-1'>
          <ScrollArea className='w-full whitespace-nowrap'>
            <div className='flex w-max space-x-4'>
              {tags.length === 0 && <Button size='sm'>All</Button>}
              {tags.map((tag, index) => (
                <div key={tag} className='shrink-0'>
                  {index === 0 ? (
                    <Button size='sm'>{getTagLabel(tag)}</Button>
                  ) : (
                    <Button size='sm' variant='secondary' asChild>
                      <Link href={`/?tags=${removeTagFromSearchParams(tag)}`}>{getTagLabel(tag)}</Link>
                    </Button>
                  )}
                </div>
              ))}
            </div>
            <ScrollBar orientation='horizontal' className='hidden' />
          </ScrollArea>
        </div>
        <div className='grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {currentItems.map((item) => (
            <ItemCard key={item.title} tags={tagData} item={item} />
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
