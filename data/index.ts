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
    id: 'no-image',
    title: 'いらすとや',
    description:
      '無料で使えるかわいいイラストの素材集です。個人利用・商用利用ともに完全無料。季節のイベントのイラストや動物や子供のイラストなど、使いやすいイラストが盛りだくさん。透過PNG形式で、組み合わせも簡単です。',
    href: 'https://www.irasutoya.com/',
    badge: 'New',
    tags: ['illust'],
  },
  {
    id: 'tailwind-play',
    title: 'Tailwind Play',
    description:
      "An advanced online playground for Tailwind CSS that lets you use all of Tailwind's build-time features directly in the browser.",
    href: 'https://play.tailwindcss.com/',
    badge: 'New',
    tags: ['develop', 'css'],
  },
  {
    id: 'no-image',
    title: 'Css To Tailwind',
    description: 'Css To Tailwind',
    href: 'https://hymhub.github.io/css-to-tailwind/',
    badge: 'New',
    tags: ['develop', 'css'],
  },
  {
    id: 'loose-drawing',
    title: 'Loose Drawing',
    description:
      'シンプルなイラストが見つかるフリー素材サイト Loose Drawing。商用利用可能。広告、フライヤー、ポスター、企画書、スライド資料など様々なデザイン制作で使えるイラストを無料で更新しています。',
    href: 'https://loosedrawing.com/',
    badge: 'New',
    tags: ['illust'],
  },
  {
    id: 'pixels-market',
    title: 'pixels.market',
    description:
      'Customize and download thousands of illustrations available in a dozen styles: Flat, Isometric, Monochromatic, and more.',
    href: 'https://pixels.market/illustrations/birdview?c=environment',
    badge: 'New',
    tags: ['illust', 'icon'],
  },
  {
    id: 'un-draw',
    title: 'unDraw',
    description:
      'The design project with open-source illustrations for any idea you can imagine and create. Create beautiful websites, products and applications with your color, for free.',
    href: 'https://undraw.co/illustrations',
    badge: 'New',
    tags: ['illust'],
  },
  {
    id: 'docker-hub',
    title: 'Docker Hub',
    description:
      "Docker Hub is the world's easiest way to create, manage, and deliver your team's container applications.",
    href: 'https://hub.docker.com/',
    badge: 'New',
    tags: ['develop', 'docker'],
  },
] as const;
