import type { Content, Image } from 'newt-client-js';

export type Item = {
  slug: string;
  image: Image;
  title: string;
  description: string;
  url: string;
  tag: Tag[];
} & Content;

export type Tag = {
  slug: string;
  label: string;
  image: Image;
  ismain: boolean;
} & Content;
