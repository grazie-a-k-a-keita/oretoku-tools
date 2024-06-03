import { ModeToggle } from '@/components/mode-toggle';

export default function Footer() {
  return (
    <footer className="sticky top-full border">
      <div className="container flex h-16 items-center justify-between">
        <p className="text-muted-foreground">&copy; Grazie</p>
        <ModeToggle />
      </div>
    </footer>
  );
}
