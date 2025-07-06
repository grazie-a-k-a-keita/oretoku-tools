'server-only';

import type { ItemWithTags, Tag } from '@/types/api';
import { cache } from 'react';

export const getItems = cache(async (): Promise<ItemWithTags[]> => {
  const response = await fetch(`${process.env.PERSONAL_CMS_API || ''}/oretoku-sites`, { method: 'GET' });

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  return response.json();
});

export const getTags = cache(async (): Promise<Tag[]> => {
  const response = await fetch(`${process.env.PERSONAL_CMS_API || ''}/oretoku-tags`, { method: 'GET' });

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  return response.json();
});
