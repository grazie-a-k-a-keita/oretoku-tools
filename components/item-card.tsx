import { useTagParams } from '@/hooks/use-tag-params';
import type { Item } from '@/types/item';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './ui/badge';

export default function ItemCard({ id, title, description, href, badge, tags }: Item) {
  const { getTagLabel, addTagToSearchParams } = useTagParams();

  return (
    <div className='relative rounded-lg border bg-card p-4 shadow-sm transition duration-500 hover:shadow-lg'>
      <div className='min-h-60 rounded-lg border bg-muted/10 p-4'>
        <div className='flex justify-between'>
          <div className='relative mb-3 aspect-square w-1/4 overflow-hidden rounded-md'>
            <Image fill className='object-cover' src={`/images/${id}.png`} alt='' priority />
          </div>
          <div>
            <Badge variant='secondary'>{badge}</Badge>
          </div>
        </div>
        <h2 className='font-semibold'>
          <Link href={href} target='_blank'>
            {title}
            <span className='absolute inset-0'></span>
          </Link>
        </h2>
        <p className='line-clamp-2 pt-2 text-sm font-medium'>{description}</p>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
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
