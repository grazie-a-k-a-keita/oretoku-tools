import ItemCard from '@/components/item-card';
import type { ItemType } from '@/data';
import { allItems, itemTypes } from '@/data';

export async function generateStaticParams() {
  return itemTypes.map((id) => ({
    id,
  }));
}

export default function Page({ params: { id } }: { params: { id: ItemType } }) {
  const currentItems = allItems[id] || [];

  if (currentItems.length === 0) {
    return <p className="m-10 text-sm text-muted-foreground">Not found</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {currentItems.map((item) => (
        <ItemCard key={item.title} {...item} />
      ))}
    </div>
  );
}
