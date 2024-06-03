'use client';

import { Button } from '@/components/ui/button';
import { mainTags } from '@/data/tag';
import { useTagParams } from '@/hooks/use-tag-params';
import Link from 'next/link';

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
