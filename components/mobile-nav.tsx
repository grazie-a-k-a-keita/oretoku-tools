import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { getTags } from '@/lib/api';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import SideBarButton from './side-bar-button';

export default async function MobileNav() {
  const tags = await getTags();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' variant='outline'>
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <div className='flex'>
          <Image
            src='/oretoku-tools.svg'
            alt='logo'
            className='my-6 ml-2 dark:invert'
            width={150}
            height={26}
            priority
          />
        </div>
        <div className='flex flex-col space-y-1'>
          {tags
            .filter((tag) => tag.isMain)
            .map((tag) => (
              <SheetClose asChild key={tag.id}>
                <SideBarButton tagId={tag.id} iconUrl={tag.imageUrl} _tags={tags} />
              </SheetClose>
            ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
