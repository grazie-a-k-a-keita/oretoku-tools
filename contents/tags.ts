export const tags = [
  {
    id: 'image',
    name: 'Image',
    imagePath: '/images/tags/image.svg',
    isMain: true,
  },
  {
    id: 'icon',
    name: 'Icon',
    imagePath: '/images/tags/rabbit.svg',
    isMain: true,
  },
  {
    id: 'develop',
    name: 'Develop',
    imagePath: '/images/tags/folder-code.svg',
    isMain: true,
  },
  {
    id: 'illust',
    name: 'Illust',
    imagePath: '/images/tags/palette.svg',
    isMain: true,
  },
  {
    id: 'generator',
    name: 'Generator',
    imagePath: '/images/tags/dna.svg',
    isMain: true,
  },
  {
    id: 'avatar',
    name: 'Avatar',
    imagePath: '/images/tags/laugh.svg',
    isMain: true,
  },
  {
    id: 'presentation',
    name: 'Presentation',
    imagePath: '/images/tags/presentation.svg',
    isMain: true,
  },
  {
    id: 'movie',
    name: 'Movie',
    imagePath: '/images/tags/clapperboard.svg',
    isMain: false,
  },
  {
    id: 'music',
    name: 'Music',
    imagePath: '/images/tags/music.svg',
    isMain: false,
  },
  {
    id: 'ui',
    name: 'UI',
    imagePath: '/images/tags/smartphone.svg',
    isMain: false,
  },
  {
    id: 'react',
    name: 'React',
    imagePath: '/images/tags/file-json-2.svg',
    isMain: false,
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    imagePath: '/images/tags/file-json-2.svg',
    isMain: false,
  },
  {
    id: 'html',
    name: 'HTML',
    imagePath: '/images/tags/file-json-2.svg',
    isMain: false,
  },
  {
    id: 'css',
    name: 'CSS',
    imagePath: '/images/tags/file-json-2.svg',
    isMain: false,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    imagePath: '/images/tags/file-json-2.svg',
    isMain: false,
  },
  {
    id: 'docker',
    name: 'Docker',
    imagePath: '/images/tags/container.svg',
    isMain: false,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    imagePath: '/images/tags/file-json-2.svg',
    isMain: false,
  },
] as const;

export type TagId = (typeof tags)[number]['id'];
