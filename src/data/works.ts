// Works一覧データの管理
// 将来10〜100件のWorks掲載に耐える設計
export type Work = {
  id: string;
  title: string;
  description?: string;
  thumbnail?: string; // /images/... を想定、無ければプレースホルダ
  url?: string;       // 外部リンク or 詳細ページ
};

export const WORKS: Work[] = [
  { 
    id: "w1", 
    title: "Work One", 
    description: "説明テキスト", 
    thumbnail: "", 
    url: "" 
  },
  { 
    id: "w2", 
    title: "Work Two", 
    description: "説明テキスト", 
    thumbnail: "", 
    url: "" 
  },
];
