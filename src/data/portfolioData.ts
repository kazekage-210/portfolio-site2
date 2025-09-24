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

// 作品データの配列（11件のプロジェクトを順序固定で定義）
export const portfolioData: Work[] = [
  {
    id: 1,
    title: "AI案件の深夜フルリモート求人サイト",
    description: "AI関連の案件に特化した、深夜フルリモート対応の求人プラットフォーム。自由な働き方と専門性のマッチングを支援。",
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
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Vercel"],
    url: "#",
    demoUrl: "#",
    featured: true,
    category: "AI/ML",
    year: 2024,
    status: "completed"
  },
  {
    id: 2,
    title: "AIライティング補助ツール",
    description: "記事・ブログ・SNS投稿を素早く下書き生成。人の表現力を底上げする、シンプルで直感的なAIライティング支援。",
    longDescription: `
      AI技術を活用したライティング支援ツールです。ユーザーの意図を理解し、自然で魅力的な文章を生成します。

      ## 主な機能
      - 複数のトーン・スタイル選択
      - リアルタイム文章生成
      - 文法・表現の改善提案
      - 複数言語対応
      - カスタムプロンプト機能

      ## 技術的挑戦
      自然言語処理と機械学習を組み合わせ、ユーザーの意図を正確に理解し、高品質な文章を生成するアルゴリズムの開発に注力。

      ## 成果
      リリース後3ヶ月で1,000+のユーザーが利用し、平均ライティング時間を60%短縮。
    `,
    images: [
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI API", "Vercel"],
    url: "#",
    demoUrl: "#",
    featured: true,
    category: "AI/ML",
    year: 2024,
    status: "completed"
  },
  {
    id: 3,
    title: "ブロックチェーン投票アプリ",
    description: "改ざん困難な投票を実現するWeb3アプリ。コミュニティやDAOの意思決定を透明化。",
    longDescription: `
      ブロックチェーン技術を活用した透明性の高い投票システムです。改ざんが困難で、誰でも検証可能な投票を実現します。

      ## 主な機能
      - スマートコントラクトによる投票管理
      - リアルタイム結果表示
      - 投票履歴の透明性確保
      - 複数の投票方式対応
      - ガス代最適化

      ## 技術的挑戦
      スケーラビリティとセキュリティの両立、ユーザーフレンドリーなUI/UXの実現、ガス代の最適化に注力。

      ## 成果
      複数のDAOで採用され、総投票数10,000+を安全に処理。
    `,
    images: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop&crop=center"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Solidity", "Hardhat", "Ethers.js", "MetaMask"],
    url: "#",
    demoUrl: "#",
    featured: true,
    category: "Web3",
    year: 2024,
    status: "completed"
  },
  {
    id: 4,
    title: "AIカスタマーサポートチャットボット",
    description: "24時間応答のAIチャットボット。よくある質問に自然文で即時回答し、運用コストを最適化。",
    longDescription: `
      企業のカスタマーサポートを効率化するAIチャットボットです。自然な会話で顧客の質問に即座に回答します。

      ## 主な機能
      - 自然言語理解による質問解析
      - 知識ベースからの自動回答
      - 人間への適切なエスカレーション
      - 多言語対応
      - 学習機能による回答精度向上

      ## 技術的挑戦
      自然言語処理の精度向上、コンテキスト理解の実現、人間らしい応答の生成に注力。

      ## 成果
      導入企業のサポートコストを40%削減、顧客満足度を15%向上。
    `,
    images: [
      "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop&crop=center"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI API", "LangChain"],
    url: "#",
    demoUrl: "#",
    featured: false,
    category: "AI/ML",
    year: 2024,
    status: "completed"
  },
  {
    id: 5,
    title: "NFTアート展示サイト",
    description: "NFT作品を美しく並べるギャラリー。コレクションの価値を引き立てる余白設計。",
    longDescription: `
      NFTアート作品を美しく展示するギャラリーサイトです。作品の価値を最大限に引き出すデザインを心がけました。

      ## 主な機能
      - 高解像度画像表示
      - メタデータ表示
      - オーナー情報表示
      - 取引履歴表示
      - お気に入り機能

      ## 技術的挑戦
      IPFSとの連携、大量画像の最適化、Web3ウォレット連携の実装に注力。

      ## 成果
      1,000+のNFT作品を展示し、月間アクティブユーザー5,000+を獲得。
    `,
    images: [
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=800&h=600&fit=crop&crop=center"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web3.js", "IPFS"],
    url: "#",
    demoUrl: "#",
    featured: false,
    category: "Web3",
    year: 2024,
    status: "completed"
  },
  {
    id: 6,
    title: "AI音声読み上げアプリ",
    description: "テキストから高品質な音声を生成。学習・動画制作・アクセシビリティに活用可能。",
    longDescription: `
      テキストを自然な音声に変換するAIアプリケーションです。学習やコンテンツ制作に活用できます。

      ## 主な機能
      - 複数の音声エンジン対応
      - 感情表現の調整
      - 複数言語対応
      - 音声のダウンロード機能
      - バッチ処理機能

      ## 技術的挑戦
      音声品質の向上、リアルタイム処理の実現、自然なイントネーションの生成に注力。

      ## 成果
      月間10,000+の音声生成を処理し、ユーザー満足度95%を達成。
    `,
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Whisper/gTTS", "Vercel"],
    url: "#",
    demoUrl: "#",
    featured: false,
    category: "AI/ML",
    year: 2024,
    status: "completed"
  },
  {
    id: 7,
    title: "マイクロSaaSダッシュボード",
    description: "小規模事業向けのKPI可視化。売上・ユーザー動向をリアルタイムに把握。",
    longDescription: `
      小規模事業者向けのKPIダッシュボードです。重要な指標をリアルタイムで可視化し、意思決定を支援します。

      ## 主な機能
      - リアルタイムデータ表示
      - カスタマイズ可能なウィジェット
      - アラート機能
      - データエクスポート
      - チーム共有機能

      ## 技術的挑戦
      リアルタイムデータ処理、スケーラブルなアーキテクチャ、直感的なUI/UXの実現に注力。

      ## 成果
      100+の小規模事業者に導入され、意思決定速度を30%向上。
    `,
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Recharts"],
    url: "#",
    demoUrl: "#",
    featured: false,
    category: "SaaS",
    year: 2024,
    status: "completed"
  },
  {
    id: 8,
    title: "AI学習教材サイト",
    description: "AI教材・チュートリアルを集約した学習ポータル。自分のペースで理解を深める設計。",
    longDescription: `
      AI技術の学習を支援するポータルサイトです。初心者から上級者まで、段階的に学習できるカリキュラムを提供します。

      ## 主な機能
      - 段階別カリキュラム
      - インタラクティブな演習
      - 進捗管理機能
      - コミュニティ機能
      - 認定システム

      ## 技術的挑戦
      学習効果の最大化、ユーザーエンゲージメントの向上、スケーラブルなコンテンツ管理に注力。

      ## 成果
      5,000+の学習者が登録し、完了率80%を達成。
    `,
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop&crop=center"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MDX", "Contentlayer"],
    url: "#",
    demoUrl: "#",
    featured: false,
    category: "Education",
    year: 2024,
    status: "completed"
  },
  {
    id: 9,
    title: "分散型SNSミニアプリ",
    description: "Web3基盤の小規模SNS。中心を持たない繋がりを体験する実験的UI。",
    longDescription: `
      Web3技術を活用した分散型SNSアプリケーションです。中央集権的なプラットフォームに依存しない、新しいコミュニケーションを提供します。

      ## 主な機能
      - 分散型データストレージ
      - 暗号化されたメッセージング
      - NFTアバター機能
      - トークンエコノミー
      - プライバシー保護

      ## 技術的挑戦
      分散型アーキテクチャの実現、ユーザビリティの向上、スケーラビリティの確保に注力。

      ## 成果
      実験的なプロジェクトとして1,000+のユーザーが参加。
    `,
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Solidity", "Ethers.js"],
    url: "#",
    demoUrl: "#",
    featured: false,
    category: "Web3",
    year: 2024,
    status: "completed"
  },
  {
    id: 10,
    title: "Web制作テンプレート集サイト",
    description: "LP/会社サイトの汎用テンプレを展示。ニーズ別に素早く選べるショーケース。",
    longDescription: `
      様々なWebサイトテンプレートを提供するショーケースサイトです。クライアントのニーズに応じて最適なテンプレートを選択できます。

      ## 主な機能
      - カテゴリ別テンプレート表示
      - プレビュー機能
      - カスタマイズオプション
      - ダウンロード機能
      - サポートシステム

      ## 技術的挑戦
      高品質なテンプレートの制作、使いやすいUI/UXの実現、効率的な配信システムの構築に注力。

      ## 成果
      50+のテンプレートを提供し、月間ダウンロード数1,000+を達成。
    `,
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    url: "#",
    demoUrl: "#",
    featured: false,
    category: "Web Design",
    year: 2024,
    status: "completed"
  },
  {
    id: 11,
    title: "AIプロジェクトマネジメント支援ツール",
    description: "タスクの重要度をAIが提案。小さなチームの意思決定をスムーズに。",
    longDescription: `
      AI技術を活用したプロジェクトマネジメント支援ツールです。タスクの優先度を自動で提案し、チームの生産性を向上させます。

      ## 主な機能
      - AI優先度提案
      - タスク管理機能
      - チーム協働機能
      - 進捗可視化
      - レポート生成

      ## 技術的挑戦
      AIアルゴリズムの精度向上、直感的なUI/UXの実現、チームワークの促進に注力。

      ## 成果
      20+のチームに導入され、プロジェクト完了率を25%向上。
    `,
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI API", "Vercel"],
    url: "#",
    demoUrl: "#",
    featured: false,
    category: "Productivity",
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
