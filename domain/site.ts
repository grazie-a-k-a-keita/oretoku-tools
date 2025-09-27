import type { Tag } from './tag';

export type Site = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly imagePath: string;
  readonly releasedAt: Date;
  readonly tags: Tag[];
};
