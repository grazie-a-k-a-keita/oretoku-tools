import type { Item } from '@/types/item';

export const allItems: Item[] = [
  {
    id: 'lucide',
    title: 'Lucide',
    description: 'Beautiful & consistent icon toolkit made by the community.',
    href: 'https://lucide.dev/',
    badge: 'New',
    tags: ['icon'],
  },
  {
    id: 'simple-icons',
    title: 'Simple Icons',
    description: '3180 Free SVG icons for popular brands',
    href: 'https://simpleicons.org/',
    badge: 'New',
    tags: ['icon'],
  },
  {
    id: 'lucide',
    title: 'Illustration3',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
    href: 'https://www.irasutoya.com/',
    badge: 'New',
    tags: ['icon'],
  },
] as const;
