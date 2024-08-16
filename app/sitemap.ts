import { getURL } from '@/lib/utils';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getURL(),
      lastModified: new Date(),
    },
  ];
}
