import { getItems, getTags } from '@/lib/api';
import { Suspense } from 'react';
import Client from './components/client';

export default async function Page() {
  const items = await getItems();
  const tags = await getTags();

  return (
    <Suspense>
      <Client itemData={items} tagData={tags} />
    </Suspense>
  );
}
