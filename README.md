## OretokuTools

主にデザイン、開発に役立つサイト、ツールの寄せ集めサイト

### Develop

- 開発の始め方

```bash
# Server Start
npm run dev
```

- デプロイ方法

`develop` ブランチで開発を行い、`main` ブランチにマージすることで、[Vercel](https://vercel.com/) 上に自動デプロイされる

### Add Data

```ts
/**
 * バッジの追加 (./data/badge.ts)
 * typeを追加する
 */
export type Badge = ... | 'Badge';

/**
 * タグの追加 (./data/tag.ts)
 * id, label を追加する
 */
export const allTags = [{ id: 'tag', label: 'Tag' }] as const;

/**
 * メインタグの追加 (./data/tag.ts)
 * タグを追加した後に、mainTagsに対象のタグを追加する
 *
 * ※メインタグに追加するとサイドバーに追加される
 */
export const mainTags: TagId[] = ['tag'];

/**
 * サイトのの追加 (./data/index.ts)
 * 下記フォーマットで配列に追加する
 */
{
  id: 'sample', // site id
  title: 'Sample', // site name
  description: 'xxxxx', // site description
  href: 'https://sample.com/', // site URL
  badge: 'Badge', // badge - 1つのみ
  tags: ['tag'], // tag id - 複数選択可能
}
```

フォーマット

```ts
{
  id: 'xxxxx',
  title: 'xxxxx',
  description: 'xxxxx',
  href: 'https://xxxxx/',
  badge: 'xxxxx',
  tags: ['xxxxx'],
}
```
