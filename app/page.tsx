'use client';

import ItemCard from '@/components/item-card';
import { allItems } from '@/data';
import { useTagParams } from '@/hooks/use-tag-params';

export default function Page() {
  const { tags } = useTagParams();

  const currentItems = allItems.filter((item) => {
    if (tags.length === 0) {
      return true;
    }
    return tags.every((tag) => item.tags.includes(tag));
  });

  if (currentItems.length === 0) {
    return <p className='m-10 text-center text-base text-muted-foreground'>Not found</p>;
  }

  return (
    <div className='grid flex-1 grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3'>
      {currentItems.map((item) => (
        <ItemCard key={item.title} {...item} />
      ))}
    </div>
  );
}
