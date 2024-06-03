import type { Item } from '@/types/item';

export const allItems: Item[] = [
  {
    title: 'Illustration1',
    href: 'https://www.irasutoya.com/',
    imageUrl:
      'https://warnerbros.co.jp/franchise/wizardingworld/assets/img/special/characters/cedric-diggory/img_top.jpg',
    tags: ['illustration', 'icon', 'image'],
  },
  {
    title: 'Illustration2',
    href: 'https://www.irasutoya.com/',
    imageUrl:
      'https://warnerbros.co.jp/franchise/wizardingworld/assets/img/special/characters/cedric-diggory/img_top.jpg',
    tags: ['image'],
  },
  {
    title: 'Illustration3',
    href: 'https://www.irasutoya.com/',
    imageUrl:
      'https://warnerbros.co.jp/franchise/wizardingworld/assets/img/special/characters/cedric-diggory/img_top.jpg',
    tags: ['icon'],
  },
] as const;
