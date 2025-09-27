import type { Tag } from '@/domain/tag';
import SideBarButton from './side-bar-button';

export default async function SideBar({ tags }: { tags: Tag[] }) {
  return (
    <div className='hidden w-64 border-r lg:block'>
      <div className='sticky top-16 flex flex-col space-y-1 p-4'>
        {tags
          .filter((tag) => tag.isMain)
          .map((tag) => (
            <SideBarButton key={tag.id} tag={tag} />
          ))}
      </div>
    </div>
  );
}
