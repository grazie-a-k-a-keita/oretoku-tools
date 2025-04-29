'use client';

import type { Tag } from '@/types/newt';
import { useSearchParams } from 'next/navigation';

export const useTagParams = ({ allTags }: { allTags: Tag[] }) => {
  const tags = (useSearchParams().get('tags')?.split(',').filter(Boolean) ?? []) as string[];

  const getTagLabel = (tagId: string) => {
    return allTags.find((t) => t.slug === tagId)?.label ?? tagId;
  };

  const addTagToSearchParams = (tag: string, keepMainTag?: boolean) => {
    const src = keepMainTag ? tags : [];

    if (src.includes(tag)) {
      return src.join(',');
    } else {
      return [...src, tag].join(',');
    }
  };

  const removeTagFromSearchParams = (tag: string) => {
    return tags.filter((t) => t !== tag).join(',');
  };

  return { tags, addTagToSearchParams, getTagLabel, removeTagFromSearchParams };
};
