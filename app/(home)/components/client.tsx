'use client';

import ItemCard from '@/components/item-card';
import { Input } from '@/components/ui/input';
import type { Site } from '@/domain/site';
import type { Tag } from '@/domain/tag';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function Client({ sites, tags }: { sites: Site[]; tags: Tag[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { getAllItems } = useLocalStorage();

  const [search, setSearch] = useState<string>(searchParams.get('query')?.toString() || '');

  useEffect(() => {
    const query = searchParams.get('query') || '';
    setSearch(query);
  }, [searchParams]);

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className='p-4'>
      <div className='mb-4 grid grid-cols-1'>
        <div className='flex items-center space-x-4 py-1'>
          {/* 画面上部のラベル表示部分 */}
          {searchParams.get('tag') ? (
            <div className='flex items-center justify-center rounded-lg bg-primary p-2 px-3'>
              <p className='text-xs font-semibold text-primary-foreground'>
                {tags.find((tag) => tag.id === searchParams.get('tag'))?.name || ''}
              </p>
            </div>
          ) : (
            <div className='flex items-center justify-center rounded-lg bg-primary p-2 px-3'>
              <p className='text-xs font-semibold text-primary-foreground'>
                {searchParams.get('favorite') === 'true' ? 'お気に入り' : 'すべて'}
              </p>
            </div>
          )}
          {searchParams.get('favorite') !== 'true' && (
            <Input
              autoComplete='off'
              className='max-w-64'
              placeholder='絞り込み'
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                handleSearch(e.target.value);
              }}
            />
          )}
        </div>
      </div>
      {sites.length === 0 ? (
        <p className='m-10 text-center text-base text-muted-foreground'>サイトが見つかりませんでした🙅‍♂️</p>
      ) : (
        <div className='grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {sites
            .filter((item) => {
              if (searchParams.get('favorite') !== 'true') return true;
              return getAllItems()[item.id] === 'true';
            })
            .map((site) => (
              <ItemCard key={site.name} site={site} />
            ))}
        </div>
      )}
    </div>
  );
}
