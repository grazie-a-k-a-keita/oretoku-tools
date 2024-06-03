import type { TagId } from '@/data/tag';

export type Item = {
  title: string;
  href: string;
  imageUrl: string;
  tags: TagId[];
};
