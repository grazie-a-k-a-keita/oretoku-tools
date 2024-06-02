import { illustration } from './illustration';
import { image } from './image';

export const allItems = {
  illustration,
  image,
} as const;

export type ItemType = keyof typeof allItems;

export const itemTypes = Object.keys(allItems) as ItemType[];
