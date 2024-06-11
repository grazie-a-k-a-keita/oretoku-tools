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
    id: 'feather',
    title: 'Feather',
    description:
      'Feather is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability.',
    href: 'https://feathericons.com/',
    badge: 'New',
    tags: ['icon'],
  },
] as const;
