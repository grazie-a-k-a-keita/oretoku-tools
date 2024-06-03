'use client';

import { mainTags } from '@/data/tag';
import { useTagParams } from '@/hooks/use-tag-params';
import Link from 'next/link';
import { Button } from './ui/button';

export default function SideBar() {
  const { addTagToSearchParams, getTagLabel } = useTagParams();

  return (
    <div className="hidden w-64 border-r lg:block">
      <div className="flex flex-col p-4">
        {mainTags.map((tagId) => (
          <Button key={tagId} variant="ghost" className="justify-start" asChild>
            <Link href={`/?tags=${addTagToSearchParams(tagId)}`}>{getTagLabel(tagId)}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
