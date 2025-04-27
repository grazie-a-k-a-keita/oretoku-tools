'use client';

import { useLocalStorage } from '@/hooks/use-local-storage';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FavoriteButton({ slug }: { slug: string }) {
  const [clicked, setClicked] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const { getAllItems, getItem, setItem, removeItem } = useLocalStorage();

  useEffect(() => {
    const items = getAllItems();
    if (items[slug]) setFavorite(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      onClick={() => {
        setClicked(true);
        setTimeout(() => setClicked(false), 300);
        if (getItem({ key: slug }) === 'true') {
          removeItem({ key: slug });
          setFavorite(false);
        } else {
          setItem({ key: slug, value: 'true' });
          setFavorite(true);
        }
      }}
      className='relative z-10'
    >
      <Star
        className={cn(
          'size-5 transition-transform duration-300',
          favorite ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground',
          clicked ? 'scale-125' : 'scale-100',
        )}
      />
    </button>
  );
}
