import type { TagId } from './tags';

export const sites: {
  name: string;
  description: string;
  url: string;
  imagePath: string;
  releasedAt: Date;
  tags: TagId[];
}[] = [
  {
    name: 'O-DAN',
    description: 'O-DANは高品質なフリーストックフォトサイトを横断検索できるサービスです。',
    url: 'https://o-dan.net/ja/',
    imagePath: '/images/o-dan.png',
    releasedAt: new Date('2025-07-05'),
    tags: ['image'],
  },
  {
    name: 'Lucide',
    description: 'コミュニティによって作成された、美しく一貫性のあるアイコン ツールキット。',
    url: 'https://lucide.dev/',
    imagePath: '/images/lucide.png',
    releasedAt: new Date('2025-07-05'),
    tags: ['icon'],
  },
  {
    name: 'Simple Icons',
    description: '人気ブランドの無料SVGアイコン3180個',
    url: 'https://simpleicons.org/',
    imagePath: '/images/simple-icons.png',
    releasedAt: new Date('2025-07-05'),
    tags: ['icon'],
  },
  {
    name: 'Feather',
    description:
      'Featherは、シンプルで美しいオープンソースアイコンのコレクションです。各アイコンは、シンプルさ、一貫性、読みやすさを重視し、24x24のグリッド上にデザインされています。',
    url: 'https://feathericons.com/',
    imagePath: '/images/feather.png',
    releasedAt: new Date('2025-07-05'),
    tags: ['icon'],
  },
  {
    name: 'Pinterest',
    description: 'レシピやインテリア、ファッションコーデなど試したくなるアイデアを発見しましょう。',
    url: 'https://www.pinterest.jp/',
    imagePath: '/images/pinterest.png',
    releasedAt: new Date('2025-07-05'),
    tags: ['image'],
  },
  {
    name: 'Css To Tailwind',
    description: 'Css To Tailwind',
    url: 'https://hymhub.github.io/css-to-tailwind/',
    imagePath: '/images/no-image.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['develop', 'css'],
  },
  {
    name: 'date-fns',
    description:
      'date-fns は、ブラウザーと Node.js で JavaScript の日付を操作するための、最も包括的でありながらシンプルで一貫性のあるツールセットを提供します。',
    url: 'https://date-fns.org/docs/Getting-Started',
    imagePath: '/images/date-fns.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['develop', 'react', 'nextjs', 'javascript'],
  },
  {
    name: 'DEVICON',
    description: 'Deviconは、開発言語とツールを表すすべてのロゴを1つのフォントにまとめることを目指しています。🚀',
    url: 'https://devicon.dev/',
    imagePath: '/images/devicon.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['icon'],
  },
  {
    name: 'DiceBear',
    description:
      'あなたがずっと探していたアバター ライブラリ。プロフィール、デザイン、Web サイト、アプリ用のアバターを作成します。ピースごとに、またはシードに基づいて作成します。',
    url: 'https://www.dicebear.com/',
    imagePath: '/images/dice-bear.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['avatar'],
  },
  {
    name: 'Docker Hub',
    description:
      'Docker Hub は、チームのコンテナ アプリケーションを作成、管理、配信するための世界で最も簡単な方法です。',
    url: 'https://hub.docker.com/',
    imagePath: '/images/docker-hub.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['develop', 'docker'],
  },
  {
    name: 'いらすとや',
    description:
      '無料で使えるかわいいイラストの素材集です。個人利用・商用利用ともに完全無料。季節のイベントのイラストや動物や子供のイラストなど、使いやすいイラストが盛りだくさん。透過PNG形式で、組み合わせも簡単です。',
    url: 'https://www.irasutoya.com/',
    imagePath: '/images/no-image.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['illust'],
  },
  {
    name: 'Loose Drawing',
    description:
      'シンプルなイラストが見つかるフリー素材サイト Loose Drawing。商用利用可能。広告、フライヤー、ポスター、企画書、スライド資料など様々なデザイン制作で使えるイラストを無料で更新しています。',
    url: 'https://loosedrawing.com/',
    imagePath: '/images/loose-drawing.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['illust'],
  },
  {
    name: 'MDN',
    description:
      'オープンなウェブは、開発者に素晴らしい機会をもたらします。これらの技術を最大限に活用するには、それらの使い方を知る必要があります。以下に、ウェブ技術のドキュメントへのリンクがあります。',
    url: 'https://developer.mozilla.org/ja/docs/Web',
    imagePath: '/images/mdn.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['develop', 'html', 'css', 'javascript'],
  },
  {
    name: 'MUI',
    description:
      'MUIは、シンプルでカスタマイズ可能、そしてアクセスしやすいReactコンポーネントのライブラリを提供します。独自のデザインシステムに従うことも、マテリアルデザインから始めることもできます。',
    url: 'https://mui.com/',
    imagePath: '/images/mui.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['develop', 'ui', 'react', 'css'],
  },
  {
    name: 'Notion Avatar Maker',
    description: 'Notionスタイルのアバターを作成するためのオンラインツール。',
    url: 'https://notion-avatar.vercel.app/',
    imagePath: '/images/notion-avatar-maker.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['generator', 'avatar'],
  },
  {
    name: 'OneDivLoaders',
    description: '純粋なCSSと1つのdiv要素で構築されたモノクロローダー(読み込みスピナー)のオープンソースコレクション。',
    url: 'https://onedivloaders.vercel.app/',
    imagePath: '/images/one-div-loaders.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['develop', 'ui', 'css', 'javascript'],
  },
  {
    name: 'OpenGraph',
    description:
      'OpenGraph は、あらゆる Web サイトのオープン グラフ メタ タグをプレビューおよび生成する最も簡単な方法です。',
    url: 'https://www.opengraph.xyz/',
    imagePath: '/images/open-graph.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['image', 'develop', 'html'],
  },
  {
    name: 'Pixabay',
    description:
      'ダウンロードして使用するのに最適なロイヤリティフリーの画像またはビデオを見つけてください。✓ ロイヤリティフリー ✓ 帰属表示は不要 ✓ 高品質の画像。',
    url: 'https://pixabay.com/',
    imagePath: '/images/pixabay.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['image', 'movie', 'music', 'illust'],
  },
  {
    name: 'Pixel Icon Library',
    description:
      'HackerNoon のピクセル アイコン ライブラリは、完璧な配置のために 24 ピクセルのグリッド上に設計された、ピクセル化されたアイコンのオープン ソース コレクションです。HackerNoon の美学に触発されています。',
    url: 'https://pixeliconlibrary.com/',
    imagePath: '/images/pixel-icon-library.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['icon'],
  },
  {
    name: 'pixels.market',
    description:
      'フラット、アイソメトリック、モノクロなど、12 種類のスタイルで利用可能な何千ものイラストをカスタマイズしてダウンロードできます。',
    url: 'https://pixels.market/illustrations/birdview?c=environment',
    imagePath: '/images/pixels-market.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['icon', 'illust'],
  },
  {
    name: 'shadcn/ui',
    description:
      '美しくデザインされたコンポーネントは、アプリにコピー＆ペーストできます。アクセスしやすく、カスタマイズ可能。オープンソースです。',
    url: 'https://ui.shadcn.com/',
    imagePath: '/images/shadcn-ui.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['develop', 'ui', 'react', 'nextjs'],
  },
  {
    name: 'Slidev',
    description: '開発者向けプレゼンテーションスライド',
    url: 'https://sli.dev/',
    imagePath: '/images/slidev.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['develop', 'presentation'],
  },
  {
    name: '食品画像のそざい屋さん',
    description:
      '実物大の食品の写真画像素材がすべて無料でダウンロードできます。WordやPowerPointで実物大の挿絵や媒体づくりに！食品、食材、食べ物写真のフリーダウンロードサイト。',
    url: 'https://sozaiya-san.jp/',
    imagePath: '/images/no-image.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['image'],
  },
  {
    name: 'svgl',
    description: 'SVGロゴの美しいライブラリ',
    url: 'https://svgl.app/',
    imagePath: '/images/svgl.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['icon'],
  },
  {
    name: 'Tailwind Play',
    description:
      'Tailwind CSS の高度なオンライン プレイグラウンド。Tailwind のビルド時機能すべてをブラウザーで直接使用できます。',
    url: 'https://play.tailwindcss.com/',
    imagePath: '/images/tailwind-play.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['develop', 'css'],
  },
  {
    name: 'Tailwind CSS',
    description:
      'Tailwind CSS は、HTML を離れることなく最新の Web サイトを迅速に構築するためのユーティリティ ファーストの CSS フレームワークです。',
    url: 'https://tailwindcss.com/',
    imagePath: '/images/tailwindcss.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['develop', 'ui', 'react', 'nextjs', 'css'],
  },
  {
    name: 'The best Favicon Generator',
    description: 'Favicon.io を使用すると、Web サイト用のファビコンを無料で簡単に生成できます。',
    url: 'https://favicon.io/',
    imagePath: '/images/the-best-favicon-generator.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['image', 'generator'],
  },
  {
    name: 'unDraw',
    description:
      'オープンソースのイラストを使ったデザインプロジェクト。想像し、創造するあらゆるアイデアを形にできます。あなたの色を使って、美しいウェブサイト、製品、アプリケーションを無料で作成できます。',
    url: 'https://undraw.co/illustrations',
    imagePath: '/images/un-draw.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['illust'],
  },
  {
    name: 'Unsplash',
    description:
      'あらゆるプロジェクトにダウンロードして利用可能な、美しい無料画像と写真の数々。どのロイヤリティフリーまたはストックフォトよりもお勧めです。',
    url: 'https://unsplash.com/ja',
    imagePath: '/images/unsplash.png',
    releasedAt: new Date('2025-07-06'),
    tags: ['image'],
  },
  {
    name: 'TypeScript入門『サバイバルTypeScript』',
    description: 'TypeScript入門『サバイバルTypeScript』〜実務で使うなら最低限ここだけはおさえておきたいこと〜',
    url: 'https://typescriptbook.jp/',
    imagePath: '/images/typescriptbook.png',
    releasedAt: new Date('2025-07-07'),
    tags: ['develop', 'typescript'],
  },
];
