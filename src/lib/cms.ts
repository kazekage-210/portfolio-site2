// CMS統合用のユーティリティ関数
import { CMSConfig, Work, CMSWork } from '@/types';

// CMS設定のデフォルト値
export const defaultCMSConfig: CMSConfig = {
  provider: 'firebase', // デフォルトはFirebase
  apiUrl: process.env.NEXT_PUBLIC_CMS_API_URL,
  apiKey: process.env.NEXT_PUBLIC_CMS_API_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  spaceId: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || 'master',
};

// 作品データをCMS形式に変換
export function transformToCMSWork(work: Work): CMSWork {
  return {
    ...work,
    slug: work.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    category: 'portfolio',
    tags: work.technologies,
    content: work.description,
    seoTitle: work.title,
    seoDescription: work.description,
    author: 'anonymous',
    status: 'published',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

// CMS形式から作品データに変換
export function transformFromCMSWork(cmsWork: CMSWork): Work {
  return {
    id: cmsWork.id,
    title: cmsWork.title,
    description: cmsWork.description,
    images: cmsWork.images,
    technologies: cmsWork.technologies,
    url: cmsWork.url,
    demoUrl: cmsWork.demoUrl,
    featured: cmsWork.featured,
  };
}

// Sanity CMS用のクエリ
export const sanityQueries = {
  getWorks: `*[_type == "work" && status == "published"] | order(createdAt desc) {
    _id,
    title,
    description,
    images,
    technologies,
    url,
    demoUrl,
    featured,
    createdAt,
    updatedAt
  }`,
  
  getFeaturedWorks: `*[_type == "work" && status == "published" && featured == true] | order(createdAt desc) {
    _id,
    title,
    description,
    images,
    technologies,
    url,
    demoUrl,
    featured,
    createdAt,
    updatedAt
  }`,
};

// Contentful CMS用のクエリ
export const contentfulQueries = {
  getWorks: {
    content_type: 'work',
    'fields.status': 'published',
    order: '-fields.createdAt',
  },
  
  getFeaturedWorks: {
    content_type: 'work',
    'fields.status': 'published',
    'fields.featured': true,
    order: '-fields.createdAt',
  },
};

// Firebase用のコレクション名
export const firebaseCollections = {
  works: 'works',
  users: 'users',
  settings: 'settings',
};

// Supabase用のテーブル名
export const supabaseTables = {
  works: 'works',
  users: 'users',
  settings: 'settings',
};

// CMS接続テスト用の関数
export async function testCMSConnection(config: CMSConfig): Promise<boolean> {
  try {
    switch (config.provider) {
      case 'sanity':
        // Sanity接続テスト
        return await testSanityConnection(config);
      case 'contentful':
        // Contentful接続テスト
        return await testContentfulConnection(config);
      case 'firebase':
        // Firebase接続テスト
        return await testFirebaseConnection(config);
      case 'supabase':
        // Supabase接続テスト
        return await testSupabaseConnection(config);
      default:
        return false;
    }
  } catch (error) {
    console.error('CMS connection test failed:', error);
    return false;
  }
}

// 各CMS接続テスト関数（実装は後で追加）
async function testSanityConnection(config: CMSConfig): Promise<boolean> {
  // Sanity接続テストの実装
  return true;
}

async function testContentfulConnection(config: CMSConfig): Promise<boolean> {
  // Contentful接続テストの実装
  return true;
}

async function testFirebaseConnection(config: CMSConfig): Promise<boolean> {
  // Firebase接続テストの実装
  return true;
}

async function testSupabaseConnection(config: CMSConfig): Promise<boolean> {
  // Supabase接続テストの実装
  return true;
}
