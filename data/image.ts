import type { Tag } from '@/types/tag';

export const image: {
  title: string;
  tags: Tag[];
  href: string;
  imageUrl: string;
}[] = [
  {
    title: '写真',
    tags: [{ id: 'XXX', label: 'ライセンス表記不要' }],
    href: 'https://www.irasutoya.com/',
    imageUrl:
      'https://warnerbros.co.jp/franchise/wizardingworld/assets/img/special/characters/cedric-diggory/img_top.jpg',
  },
];
