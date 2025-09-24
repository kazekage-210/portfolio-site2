// 作品データの管理ファイル（ここを書き換えればOK）
// 将来的にSanity/Contentfulなどに差し替え可能な形で設計

export interface Work {
  id: number;
  title: string;
  description: string;
  longDescription?: string; // 詳細ページ用の長い説明
  images: string[];
  technologies: string[];
  url: string;
  demoUrl?: string;
  featured?: boolean;
  category?: string;
  year?: number;
  status?: 'completed' | 'in-progress' | 'planned';
}

// 作品データの配列（ここに新しい作品を追加すればOK）
export const portfolioData: Work[] = [
  {
    id: 1,
    title: "暗号資産ウォレットアプリ",
    description: "暗号資産を安全に管理するミニマル設計のウォレットアプリ。暗号化技術とNext.jsを活用し、ユーザーフレンドリーなインターフェースを実現。セキュリティと使いやすさの両立を追求したプロダクト。",
    longDescription: `
      この暗号資産ウォレットアプリは、初心者から上級者まで誰でも簡単に暗号資産を管理できることを目指して開発されました。

      ## 主な機能
      - マルチチェーン対応（Ethereum, Bitcoin, Polygon等）
      - ハードウェアウォレット連携
      - DeFiプロトコルとの統合
      - リアルタイム価格追跡
      - セキュアな秘密鍵管理

      ## 技術的挑戦
      セキュリティを最優先に設計し、オフライン署名機能やマルチシグ対応を実装。また、ユーザビリティを向上させるため、直感的なUI/UXを心がけました。

      ## 成果
      リリース後3ヶ月で10,000+のアクティブユーザーを獲得し、セキュリティインシデント0件を達成。
    `,
    images: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop&crop=center"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind", "Crypto", "Web3", "Ethers.js"],
    url: "#",
    demoUrl: "#",
    featured: true,
    category: "Web3",
    year: 2024,
    status: "completed"
  },
  {
    id: 2,
    title: "AI専用深夜フルリモート求人サイト",
    description: "深夜リモートワークに特化したAIエンジニア専用求人プラットフォーム。匿名ログインとAI推薦機能搭載。働き方の多様性を支援し、優秀な人材と企業をマッチングする革新的なサービス。",
    longDescription: `
      従来の求人サイトでは対応しきれない、深夜リモートワークという新しい働き方に特化したプラットフォームです。

      ## 主な機能
      - AI推薦エンジンによる最適なマッチング
      - 匿名ログイン機能
      - 時差を考慮したスケジューリング
      - リアルタイムチャット機能
      - スキルベースの自動フィルタリング

      ## 技術的挑戦
      自然言語処理を活用した求人内容の自動分類と、ユーザーのスキルセットとのマッチング精度向上に注力。また、グローバルな時差に対応するための複雑なスケジューリング機能を実装。

      ## 成果
      リリース後6ヶ月で500+の企業と2,000+のエンジニアが登録し、マッチング成功率85%を達成。
    `,
    images: [
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center"
    ],
    technologies: ["Next.js", "Tailwind", "AI", "JobPlatform", "OpenAI", "PostgreSQL"],
    url: "#",
    demoUrl: "#",
    featured: true,
    category: "AI/ML",
    year: 2024,
    status: "completed"
  }
];

// カテゴリー別の作品取得
export function getPortfolioByCategory(category: string): Work[] {
  return portfolioData.filter(work => work.category === category);
}

// 注目作品の取得
export function getFeaturedPortfolio(): Work[] {
  return portfolioData.filter(work => work.featured);
}

// 最新作品の取得
export function getLatestPortfolio(limit: number = 3): Work[] {
  return portfolioData
    .sort((a, b) => (b.year || 0) - (a.year || 0))
    .slice(0, limit);
}

// 作品IDによる取得
export function getPortfolioById(id: number): Work | undefined {
  return portfolioData.find(work => work.id === id);
}

// 技術スタック別の作品取得
export function getPortfolioByTechnology(technology: string): Work[] {
  return portfolioData.filter(work => 
    work.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
}

// 後方互換性のためのエイリアス（段階的移行用）
export const worksData = portfolioData;
export const getWorksByCategory = getPortfolioByCategory;
export const getFeaturedWorks = getFeaturedPortfolio;
export const getLatestWorks = getLatestPortfolio;
export const getWorkById = getPortfolioById;
export const getWorksByTechnology = getPortfolioByTechnology;
