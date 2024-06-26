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
    tags: ['image', 'movie', 'music', 'illust'],
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
  {
    id: 'shadcn-ui',
    title: 'shadcn/ui',
    description:
      'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
    href: 'https://ui.shadcn.com/',
    badge: 'New',
    tags: ['develop', 'ui', 'react', 'next'],
  },
  {
    id: 'tailwindcss',
    title: 'Tailwind CSS',
    description:
      'Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.',
    href: 'https://tailwindcss.com/',
    badge: 'New',
    tags: ['develop', 'ui', 'react', 'next'],
  },
  {
    id: 'mui',
    title: 'MUI',
    description:
      'MUI provides a simple, customizable, and accessible library of React components. Follow your own design system, or start with Material Design.',
    href: 'https://mui.com/',
    badge: 'New',
    tags: ['develop', 'ui', 'react', 'next'],
  },
  {
    id: 'mdn',
    title: 'MDN',
    description:
      'オープンなウェブは、開発者に素晴らしい機会をもたらします。これらの技術を最大限に活用するには、それらの使い方を知る必要があります。以下に、ウェブ技術のドキュメントへのリンクがあります。',
    href: 'https://developer.mozilla.org/ja/docs/Web',
    badge: 'New',
    tags: ['develop', 'html', 'css', 'javascript'],
  },
  {
    id: 'irasutoya',
    title: 'いらすとや',
    description:
      '無料で使えるかわいいイラストの素材集です。個人利用・商用利用ともに完全無料。季節のイベントのイラストや動物や子供のイラストなど、使いやすいイラストが盛りだくさん。透過PNG形式で、組み合わせも簡単です。',
    href: 'https://www.irasutoya.com/',
    badge: 'New',
    tags: ['illust'],
  },
] as const;
