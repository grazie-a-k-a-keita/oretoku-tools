export const allTags = [
  { id: 'illustration', label: 'illustration' },
  { id: 'image', label: 'image' },
  { id: 'icon', label: 'icon' },
] as const;

export type TagId = (typeof allTags)[number]['id'];

export const mainTags: TagId[] = ['illustration', 'image', 'icon'];
