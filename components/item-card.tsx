import type { Tag } from '@/types/tag';
import Image from 'next/image';
import Link from 'next/link';

export default function ItemCard({
  title,
  tags,
  href,
  imageUrl,
}: {
  title: string;
  tags: Tag[];
  href: string;
  imageUrl: string;
}) {
  return (
    <div className="relative aspect-video rounded-md border bg-card p-4 shadow-sm transition duration-500 hover:shadow-lg">
      <div className="relative mb-2 aspect-video overflow-hidden rounded border">
        <Image fill className="object-cover" src={imageUrl} alt="" priority />
      </div>
      <h2 className="text-sm font-semibold">
        <Link href={href} target="_blank">
          {title}
          <span className="absolute inset-0"></span>
        </Link>
      </h2>
      <div className="relative z-10 mt-2 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag.id}
            href={tag.id}
            className="whitespace-nowrap rounded border bg-muted px-1.5 py-1 text-xs text-muted-foreground"
          >
            {tag.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
