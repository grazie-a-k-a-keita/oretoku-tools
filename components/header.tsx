import MobileNav from './mobile-nav';

export default function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center gap-4">
        <div className="lg:hidden">
          <MobileNav />
        </div>
        <p className="text-lg font-black">OretokuTools</p>
      </div>
    </header>
  );
}
