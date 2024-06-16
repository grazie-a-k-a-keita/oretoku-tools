'use client';

import { mainTags } from '@/data/tag';
import SideBarButton from './side-bar-button';

export default function SideBar() {
  return (
    <div className='hidden w-64 border-r lg:block'>
      <div className='flex flex-col space-y-1 p-4'>
        {mainTags.map((tagId) => (
          <SideBarButton key={tagId} tagId={tagId} />
        ))}
      </div>
    </div>
  );
}
