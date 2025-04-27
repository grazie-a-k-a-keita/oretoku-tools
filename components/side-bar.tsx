import { ScrollArea } from '@/components/ui/scroll-area';
import { getTags } from '@/lib/newt';
import SideBarButton from './side-bar-button';

export default async function SideBar() {
  const tags = await getTags();

  return (
    <ScrollArea className='h-[calc(100dvh-130px)]'>
      <div className='hidden h-[calc(100dvh-130px)] w-64 border-r lg:block'>
        <div className='flex flex-col space-y-1 p-4'>
          {tags
            .filter((tag) => tag.ismain)
            .map((tag) => (
              <SideBarButton key={tag.slug} tagId={tag.slug} iconUrl={tag.image.src} _tags={tags} />
            ))}
        </div>
      </div>
    </ScrollArea>
  );
}
