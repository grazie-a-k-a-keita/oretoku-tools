'use client';

import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export default function FavoriteSelect() {
  const searchParams = useSearchParams();

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (searchParams.get('favorite') === 'true') {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [searchParams]);

  return (
    <Button size='icon' asChild variant='ghost'>
      <Link href={favorite ? '/?favorite=false' : '/?favorite=true'} className='flex items-center justify-center'>
        <Star className={cn('size-5', favorite && 'fill-yellow-500 text-yellow-500')} />
      </Link>
    </Button>
  );
}
