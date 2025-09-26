# Portfolio CMS Integration Guide

このポートフォリオサイトは、将来的なCMS統合と管理画面拡張に対応した設計になっています。

## 管理性のレベル

### 短期対応（現在）
- `data/works.json` を編集するだけでサイト更新可能
- JSONファイルに新しい作品を追加すれば自動的に表示される

### 中期対応（CMS統合）
- Headless CMS（Sanity, Contentful, Strapi）との接続が可能
- 型定義とユーティリティ関数が準備済み
- 環境変数でCMS設定を切り替え可能

### 長期対応（管理画面）
- Firebase/Supabaseで `/admin` ページを用意
- ログイン機能付きの管理画面
- 作品の追加・編集・削除が可能

## CMS統合の手順

### 1. 環境変数の設定
`env.example` を `.env.local` にコピーし、必要な値を設定してください。

### 2. CMS選択
以下のCMSから選択可能：
- **Firebase**: リアルタイムデータベース、認証機能
- **Supabase**: PostgreSQL、認証機能
- **Sanity**: コンテンツ管理に特化
- **Contentful**: エンタープライズ向け

### 3. 型定義の活用
`src/types/index.ts` で定義された型を使用して、型安全な開発が可能です。

### 4. 管理画面の実装
`src/lib/admin.ts` のユーティリティ関数を使用して管理画面を構築できます。

## ファイル構成

```
src/
├── types/
│   └── index.ts          # 型定義
├── lib/
│   ├── cms.ts           # CMS統合用ユーティリティ
│   └── admin.ts         # 管理画面用ユーティリティ
├── data/
│   └── works.json       # 現在の作品データ
└── components/
    ├── Hero.tsx
    ├── Works.tsx
    ├── WorkCard.tsx
    └── Contact.tsx
```

## 拡張例

### Sanity CMS統合
```typescript
import { sanityQueries } from '@/lib/cms';

// Sanityから作品データを取得
const works = await sanityClient.fetch(sanityQueries.getWorks);
```

### Firebase管理画面
```typescript
import { WorkManager } from '@/lib/admin';

const workManager = WorkManager.getInstance();
const works = await workManager.getWorks({ page: 1, limit: 10 });
```

## 注意事項

- 個人名や固有名詞は一切使用していません
- 匿名性を保ちながら、プロフェッショナルな印象を与える設計
- セキュリティを考慮した認証・認可機能
- 型安全性を重視したTypeScript実装
