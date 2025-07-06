'use client';

import ItemCard from '@/components/item-card';
import { Input } from '@/components/ui/input';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { useTagParams } from '@/hooks/use-tag-params';
import type { ItemWithTags, Tag } from '@/types/api';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Client({ itemData, tagData }: { itemData: ItemWithTags[]; tagData: Tag[] }) {
  const { selectedTag, getTagLabel } = useTagParams({ allTags: tagData });
  const searchParams = useSearchParams();
  const { getAllItems } = useLocalStorage();

  const [currentItems, setCurrentItems] = useState<ItemWithTags[]>(itemData);
  const [filteredItems, setFilteredItems] = useState<ItemWithTags[]>(itemData);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    setInputValue('');

    if (searchParams.get('favorite') === 'true') {
      // お気に入りのアイテムを取得
      const items = getAllItems();
      const favoriteItems = itemData.filter((item) => items[item.id] === 'true');
      setCurrentItems(favoriteItems);
      setFilteredItems(favoriteItems);
    } else {
      // タグでフィルタリング
      const currentItems = itemData.filter((item) => {
        if (selectedTag === null) return true;
        return item.tags.some((tag) => tag.id === selectedTag);
      });
      setCurrentItems(currentItems);
      setFilteredItems(currentItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.toString()]);

  if (currentItems.length === 0) {
    return <p className='m-10 text-center text-base text-muted-foreground'>アイテムが見つかりませんでした🙅‍♂️</p>;
  }

  return (
    <ScrollArea className='h-[calc(100dvh-130px)]'>
      <div className='p-4'>
        <div className='mb-4 grid grid-cols-1'>
          <ScrollArea className='w-full whitespace-nowrap'>
            <div className='flex items-center space-x-4 py-1'>
              {/* 画面上部のラベル表示部分 */}
              {selectedTag === null ? (
                <div className='flex items-center justify-center rounded-lg bg-primary p-2 px-3'>
                  <p className='text-xs font-semibold text-primary-foreground'>
                    {searchParams.get('favorite') === 'true' ? 'お気に入り' : 'すべて'}
                  </p>
                </div>
              ) : (
                <div className='flex items-center justify-center rounded-lg bg-primary p-2 px-3'>
                  <p className='text-xs font-semibold text-primary-foreground'>{getTagLabel(selectedTag)}</p>
                </div>
              )}
              <Input
                autoComplete='off'
                className='w-64'
                placeholder='絞り込み'
                value={inputValue}
                onChange={(e) => {
                  const value = e.target.value;
                  setInputValue(value);
                  setFilteredItems(
                    currentItems.filter(
                      (item) =>
                        item.name.toLowerCase().indexOf(value) > -1 ||
                        item.description.toLowerCase().indexOf(value) > -1,
                    ),
                  );
                }}
              />
            </div>
            <ScrollBar orientation='horizontal' className='hidden' />
          </ScrollArea>
        </div>
        <div className='grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {filteredItems.map((item) => (
            <ItemCard key={item.id} tags={tagData} item={item} />
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
