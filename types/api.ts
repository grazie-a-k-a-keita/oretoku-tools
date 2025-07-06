export type Item = {
  url: string;
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Tag = {
  id: number;
  name: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  isMain: boolean;
};

export type ItemWithTags = Item & { tags: Tag[] };
