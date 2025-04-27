'server-only';

import type { Item, Tag } from '@/types/newt';
import { createClient } from 'newt-client-js';
import { cache } from 'react';

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID || '',
  token: process.env.NEWT_CDN_API_TOKEN || '',
  apiType: 'cdn',
});

export const getItems = cache(async () => {
  const { items } = await client.getContents<Item>({
    appUid: process.env.NEWT_APP_UID || '',
    modelUid: 'item',
    query: {
      select: ['_sys', 'slug', 'title', 'description', 'url', 'tag'],
      order: ['slug'],
    },
  });

  return items;
});

export const getTags = cache(async () => {
  const { items } = await client.getContents<Tag>({
    appUid: process.env.NEWT_APP_UID || '',
    modelUid: 'tag',
    query: {
      select: ['slug', 'label', 'image', 'ismain'],
      order: ['slug'],
    },
  });

  return items;
});
