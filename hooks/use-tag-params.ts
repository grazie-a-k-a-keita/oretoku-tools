'use client';

import type { TagId } from '@/data/tag';
import { allTags } from '@/data/tag';
import { useSearchParams } from 'next/navigation';

export const useTagParams = () => {
  const tags = (useSearchParams().get('tags')?.split(',').filter(Boolean) ?? []) as TagId[];

  const getTagLabel = (tagId: TagId) => {
    return allTags.find((t) => t.id === tagId)?.label ?? tagId;
  };

  const addTagToSearchParams = (tag: TagId, keepMainTag?: boolean) => {
    const src = keepMainTag ? tags : [];

    if (src.includes(tag)) {
      return src.join(',');
    } else {
      return [...src, tag].join(',');
    }
  };

  return { tags, addTagToSearchParams, getTagLabel };
};
