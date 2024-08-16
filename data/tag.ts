export const allTags = [
  { id: 'illustration', label: 'Illustration' },
  { id: 'image', label: 'Image' },
  { id: 'icon', label: 'Icon' },
  { id: 'movie', label: 'Movie' },
  { id: 'music', label: 'Music' },
  { id: 'develop', label: 'Develop' },
  { id: 'ui', label: 'UI' },
  { id: 'react', label: 'React' },
  { id: 'next', label: 'Next.js' },
  { id: 'html', label: 'HTML' },
  { id: 'css', label: 'CSS' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'illust', label: 'Illust' },
  { id: 'docker', label: 'Docker' },
  { id: 'generator', label: 'Generator' },
] as const;

export type TagId = (typeof allTags)[number]['id'];

export const mainTags: TagId[] = ['icon', 'image', 'develop', 'illust', 'generator'];
