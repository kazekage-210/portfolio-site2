// SNSリンクの設定ファイル
export type SocialStatus = "active" | "coming-soon";

export type SocialItem = {
  id: "x" | "note" | "github" | "huggingface" | "youtube" | "tiktok";
  label: string;
  href?: string;              // coming-soon時は省略
  status: SocialStatus;
  description?: string;       // フッターカード用の短文
  ariaLabel: string;
  analyticsKey: string;       // 計測用
  iconId: string;             // Simple Iconsの識別子
};

export const headerSocials: SocialItem[] = [
  { 
    id: "x", 
    label: "X", 
    href: "https://x.com/your_handle", 
    status: "active",
    ariaLabel: "X（最新情報）", 
    analyticsKey: "sns_x_header", 
    iconId: "SiX" 
  },
  { 
    id: "note", 
    label: "note", 
    href: "https://note.com/your_handle", 
    status: "active",
    ariaLabel: "note（記事）", 
    analyticsKey: "sns_note_header", 
    iconId: "SiNote" 
  },
  { 
    id: "github", 
    label: "GitHub", 
    href: "https://github.com/your_handle", 
    status: "active",
    ariaLabel: "GitHub（コード）", 
    analyticsKey: "sns_github_header", 
    iconId: "SiGithub" 
  },
  { 
    id: "huggingface", 
    label: "Hugging Face", 
    href: "https://huggingface.co/your_handle", 
    status: "active",
    ariaLabel: "Hugging Face（AIモデル）", 
    analyticsKey: "sns_hf_header", 
    iconId: "SiHuggingface" 
  },
];

export const footerSocials: SocialItem[] = [
  { ...headerSocials[0], analyticsKey: "sns_x_footer" },
  { ...headerSocials[1], analyticsKey: "sns_note_footer" },
  { ...headerSocials[2], analyticsKey: "sns_github_footer" },
  { ...headerSocials[3], analyticsKey: "sns_hf_footer" },
  {
    id: "youtube", 
    label: "YouTube", 
    status: "coming-soon",
    description: "デモ動画\n検討中", 
    ariaLabel: "YouTube（準備中）",
    analyticsKey: "sns_youtube_footer", 
    iconId: "SiYoutube"
  },
  {
    id: "tiktok", 
    label: "TikTok", 
    status: "coming-soon",
    description: "短尺デモ\n検討中", 
    ariaLabel: "TikTok（検討中）",
    analyticsKey: "sns_tiktok_footer", 
    iconId: "SiTiktok"
  }
];
