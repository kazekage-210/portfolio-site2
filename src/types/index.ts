// 作品データの型定義
export interface Work {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  url: string;
  demoUrl?: string;
  featured?: boolean;
  createdAt?: string;
  updatedAt?: string;
  published?: boolean;
}

// CMS用の拡張型定義
export interface CMSWork extends Work {
  slug: string;
  category?: string;
  tags?: string[];
  content?: string;
  seoTitle?: string;
  seoDescription?: string;
  author?: string;
  status: 'draft' | 'published' | 'archived';
}

// プロフィール情報の型定義
export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
  socialLinks: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    note?: string;
  };
  skills: string[];
  experience: string[];
}

// CMS設定の型定義
export interface CMSConfig {
  provider: 'sanity' | 'contentful' | 'strapi' | 'firebase' | 'supabase';
  apiUrl?: string;
  apiKey?: string;
  projectId?: string;
  spaceId?: string;
  environment?: string;
}

// 管理画面用の型定義
export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'editor';
  createdAt: string;
  lastLogin?: string;
}

// API レスポンスの型定義
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// ページネーション用の型定義
export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}
