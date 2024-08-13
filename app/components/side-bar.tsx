'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { mainTags } from '@/data/tag';
import SideBarButton from './side-bar-button';

export default function SideBar() {
  return (
    <ScrollArea className='h-[calc(100dvh-130px)]'>
      <div className='hidden w-64 border-r lg:block'>
        <div className='flex flex-col space-y-1 p-4'>
          {mainTags.map((tagId) => (
            <SideBarButton key={tagId} tagId={tagId} />
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
