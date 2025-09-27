'server-only';

import { sites } from '@/contents/sites';
import { tags } from '@/contents/tags';
import type { Site } from '@/domain/site';
import type { Tag } from '@/domain/tag';

export const getSites = async (): Promise<Site[]> => {
  const tags = await getTags();

  return sites.map((site) => {
    const url = new URL(site.url);
    return {
      id: url.hostname,
      name: site.name,
      description: site.description,
      url: site.url,
      imagePath: site.imagePath,
      releasedAt: site.releasedAt,
      tags: tags.filter((tag) => site.tags.some((tagId) => tag.id === tagId)),
    };
  });
};

export const getTags = async (): Promise<Tag[]> => {
  return tags.map((tag) => ({
    id: tag.id,
    name: tag.name,
    imagePath: tag.imagePath,
    isMain: tag.isMain,
  }));
};
