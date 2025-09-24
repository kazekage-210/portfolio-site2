// Portfolio一覧データの管理
// 将来10〜100件のPortfolio掲載に耐える設計
export type Work = {
  id: string;
  title: string;
  description?: string;
  thumbnail?: string; // /images/... を想定、無ければプレースホルダ
  url?: string;       // 外部リンク or 詳細ページ
};

export const PORTFOLIO: Work[] = [
  { 
    id: "p1", 
    title: "Portfolio One", 
    description: "説明テキスト", 
    thumbnail: "", 
    url: "" 
  },
  { 
    id: "p2", 
    title: "Portfolio Two", 
    description: "説明テキスト", 
    thumbnail: "", 
    url: "" 
  },
];

// 後方互換性のためのエイリアス（段階的移行用）
export const WORKS = PORTFOLIO;
