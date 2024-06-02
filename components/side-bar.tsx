import { TAGS } from '@/lib/tag';
import Link from 'next/link';
import { Button } from './ui/button';

export default function SideBar() {
  return (
    <div className="hidden w-64 border-r lg:block">
      <div className="flex flex-col p-4">
        {TAGS.map((tag) => (
          <Button key={tag.id} variant="ghost" className="justify-start" asChild>
            <Link href={`/${tag.id}`}>{tag.label}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
