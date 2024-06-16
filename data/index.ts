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
  {
    id: 'o-dan',
    title: 'O-DAN',
    description: 'O-DAN is a cross-search service for high-quality free stock photo sites.',
    href: 'https://o-dan.net/ja/',
    badge: 'New',
    tags: ['image'],
  },
  {
    id: 'pinterest',
    title: 'Pinterest',
    description: 'レシピやインテリア、ファッションコーデなど試したくなるアイデアを発見しましょう。',
    href: 'https://www.pinterest.jp/',
    badge: 'New',
    tags: ['image'],
  },
  {
    id: 'pixabay',
    title: 'Pixabay',
    description:
      'Find your perfect royalty-free image or video to download and use. ✓ Royalty-free ✓ No attribution required ✓ High quality images.',
    href: 'https://pixabay.com/',
    badge: 'New',
    tags: ['image', 'movie', 'music'],
  },
  {
    id: 'unsplash',
    title: 'Unsplash',
    description:
      'あらゆるプロジェクトにダウンロードして利用可能な、美しい無料画像と写真の数々。どのロイヤリティフリーまたはストックフォトよりもお勧めです。',
    href: 'https://unsplash.com/ja',
    badge: 'New',
    tags: ['image'],
  },
] as const;
