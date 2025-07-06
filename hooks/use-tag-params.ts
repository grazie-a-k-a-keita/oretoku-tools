'use client';

import type { Tag } from '@/types/api';
import { useSearchParams } from 'next/navigation';

export const useTagParams = ({ allTags }: { allTags: Tag[] }) => {
  const tag = useSearchParams().get('tag');

  /**
   * URLパラメータのタグ
   */
  const selectedTag = tag ? Number(tag) : null;

  /**
   * idからタグの名称を取得する
   */
  const getTagLabel = (tagId: number) => {
    return allTags.find((t) => t.id === tagId)?.name ?? '';
  };

  return { selectedTag, getTagLabel };
};
