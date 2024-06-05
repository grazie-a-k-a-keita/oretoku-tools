import { AppConfig } from '@/app.config';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { SiGithub } from '@icons-pack/react-simple-icons';

export default function Footer() {
  return (
    <footer className='sticky top-full border'>
      <div className='flex h-16 items-center justify-between px-4'>
        <p className='text-muted-foreground'>&copy; Grazie</p>
        <div className='grid grid-cols-2 gap-4'>
          <ModeToggle />
          <Button size='icon' asChild variant='ghost'>
            <a href={AppConfig.gitHubUrl} target='_blank'>
              <SiGithub size={20} />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
