'use client';

import type { TagId } from '@/data/tag';
import { allTags, mainTags } from '@/data/tag';
import { useSearchParams } from 'next/navigation';

export const useTagParams = () => {
  const tags = (useSearchParams().get('tags')?.split(',').filter(Boolean) ?? []) as TagId[];

  const getTagLabel = (tagId: TagId) => {
    return allTags.find((t) => t.id === tagId)?.label ?? tagId;
  };

  const addTagToSearchParams = (tag: TagId, keepMainTag?: boolean) => {
    const src = keepMainTag ? tags : tags.filter((t: TagId) => !mainTags.includes(t));

    if (src.includes(tag)) {
      return src.join(',');
    } else {
      return [...src, tag].join(',');
    }
  };

  const removeTagToSearchParams = (tag: TagId) => {
    return tags.filter((t: TagId) => t !== tag).join(',');
  };

  return { tags, addTagToSearchParams, removeTagToSearchParams, getTagLabel };
};
