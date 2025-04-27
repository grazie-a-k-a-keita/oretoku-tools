import { getItems, getTags } from '@/lib/newt';
import Client from './components/client';

export default async function Page() {
  const items = await getItems();
  const tags = await getTags();

  return <Client itemData={items} tagData={tags} />;
}
