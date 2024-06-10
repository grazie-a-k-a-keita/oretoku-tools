import { useTagParams } from '@/hooks/use-tag-params';
import type { Item } from '@/types/item';
import Image from 'next/image';
import Link from 'next/link';

export default function ItemCard({ title, tags, href, imageUrl }: Item) {
  const { getTagLabel, addTagToSearchParams } = useTagParams();

  return (
    <div className='relative rounded-lg border bg-card p-4 shadow-sm transition duration-500 hover:shadow-lg'>
      <div className='relative mb-2 aspect-video overflow-hidden rounded-md border'>
        <Image fill className='object-cover' src={imageUrl} alt='' priority />
      </div>
      <h2 className='text-sm font-semibold'>
        <Link href={href} target='_blank'>
          {title}
          <span className='absolute inset-0'></span>
        </Link>
      </h2>
      <div className='mt-2 flex flex-wrap gap-2'>
        {tags.map((tagId) => (
          <Link
            key={tagId}
            href={`/?tags=${addTagToSearchParams(tagId, true)}`}
            className='relative z-10 whitespace-nowrap rounded border bg-muted px-1.5 py-1 text-xs text-muted-foreground'
          >
            <span className='mr-1 inline-block rounded bg-muted-foreground/10 p-0.5 px-1 leading-none'>#</span>
            {getTagLabel(tagId)}
          </Link>
        ))}
      </div>
    </div>
  );
}
