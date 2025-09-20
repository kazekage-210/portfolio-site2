// 管理画面用のユーティリティ関数
import { AdminUser, Work, PaginationParams, PaginatedResponse } from '@/types';

// 管理画面の認証状態を管理
export class AdminAuth {
  private static instance: AdminAuth;
  private isAuthenticated: boolean = false;
  private user: AdminUser | null = null;

  private constructor() {}

  public static getInstance(): AdminAuth {
    if (!AdminAuth.instance) {
      AdminAuth.instance = new AdminAuth();
    }
    return AdminAuth.instance;
  }

  public async login(email: string, password: string): Promise<boolean> {
    try {
      // 実際の認証ロジックをここに実装
      // Firebase Auth, Supabase Auth, またはカスタム認証
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        this.user = data.user;
        this.isAuthenticated = true;
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  }

  public logout(): void {
    this.user = null;
    this.isAuthenticated = false;
  }

  public isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  public getCurrentUser(): AdminUser | null {
    return this.user;
  }
}

// 作品管理用のクラス
export class WorkManager {
  private static instance: WorkManager;

  private constructor() {}

  public static getInstance(): WorkManager {
    if (!WorkManager.instance) {
      WorkManager.instance = new WorkManager();
    }
    return WorkManager.instance;
  }

  // 作品一覧を取得（ページネーション対応）
  public async getWorks(params: PaginationParams): Promise<PaginatedResponse<Work>> {
    try {
      const response = await fetch(`/api/admin/works?${new URLSearchParams({
        page: params.page.toString(),
        limit: params.limit.toString(),
        sortBy: params.sortBy || 'createdAt',
        sortOrder: params.sortOrder || 'desc',
      })}`);

      if (response.ok) {
        return await response.json();
      }
      throw new Error('Failed to fetch works');
    } catch (error) {
      console.error('Error fetching works:', error);
      throw error;
    }
  }

  // 作品を作成
  public async createWork(work: Omit<Work, 'id'>): Promise<Work> {
    try {
      const response = await fetch('/api/admin/works', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(work),
      });

      if (response.ok) {
        return await response.json();
      }
      throw new Error('Failed to create work');
    } catch (error) {
      console.error('Error creating work:', error);
      throw error;
    }
  }

  // 作品を更新
  public async updateWork(id: number, work: Partial<Work>): Promise<Work> {
    try {
      const response = await fetch(`/api/admin/works/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(work),
      });

      if (response.ok) {
        return await response.json();
      }
      throw new Error('Failed to update work');
    } catch (error) {
      console.error('Error updating work:', error);
      throw error;
    }
  }

  // 作品を削除
  public async deleteWork(id: number): Promise<boolean> {
    try {
      const response = await fetch(`/api/admin/works/${id}`, {
        method: 'DELETE',
      });

      return response.ok;
    } catch (error) {
      console.error('Error deleting work:', error);
      return false;
    }
  }

  // 作品の画像をアップロード
  public async uploadImage(file: File): Promise<string> {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        return data.url;
      }
      throw new Error('Failed to upload image');
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  }
}

// 管理画面の権限チェック
export function hasPermission(user: AdminUser, action: string): boolean {
  switch (action) {
    case 'create':
    case 'update':
    case 'delete':
      return user.role === 'admin' || user.role === 'editor';
    case 'view':
      return true;
    default:
      return false;
  }
}

// 管理画面のルート保護
export function requireAuth(Component: React.ComponentType) {
  return function AuthenticatedComponent(props: any) {
    const auth = AdminAuth.getInstance();
    
    if (!auth.isLoggedIn()) {
      // ログインページにリダイレクト
      if (typeof window !== 'undefined') {
        window.location.href = '/admin/login';
      }
      return null;
    }

    return <Component {...props} />;
  };
}

// 管理画面のメタデータ
export const adminMetadata = {
  title: 'Portfolio Admin',
  description: 'Portfolio management dashboard',
  keywords: ['admin', 'portfolio', 'management', 'dashboard'],
};
