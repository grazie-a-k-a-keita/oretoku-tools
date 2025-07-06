import { ScrollArea } from '@/components/ui/scroll-area';
import { getTags } from '@/lib/api';
import SideBarButton from './side-bar-button';

export default async function SideBar() {
  const tags = await getTags();

  return (
    <ScrollArea className='h-[calc(100dvh-130px)]'>
      <div className='hidden h-[calc(100dvh-130px)] w-64 border-r lg:block'>
        <div className='flex flex-col space-y-1 p-4'>
          {tags
            .filter((tag) => tag.isMain)
            .map((tag) => (
              <SideBarButton key={tag.id} tagId={tag.id} iconUrl={tag.imageUrl} _tags={tags} />
            ))}
        </div>
      </div>
    </ScrollArea>
  );
}
