import type { Badge } from '@/data/badge';
import type { TagId } from '@/data/tag';

export type Item = {
  id: string;
  title: string;
  description: string;
  href: string;
  badge: Badge | '';
  tags: TagId[];
};
