// Works一覧ページ
// 将来10〜100件のWorks掲載に耐える設計
import { WORKS, Work } from '@/data/works';
import Link from 'next/link';

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-[#f5f5f5] mb-4">
            Works
          </h1>
          <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
            これまでに手がけたプロジェクトや作品を紹介しています。
          </p>
        </div>

        {/* フィルタ・並び替えのプレースホルダ */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="flex gap-4">
            <select className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]">
              <option value="all">すべて</option>
              <option value="web">Web</option>
              <option value="mobile">Mobile</option>
              <option value="ai">AI</option>
            </select>
            <select className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]">
              <option value="newest">新しい順</option>
              <option value="oldest">古い順</option>
              <option value="name">名前順</option>
            </select>
          </div>
          <div className="text-sm text-[#a1a1aa]">
            {WORKS.length}件の作品
          </div>
        </div>

        {/* Worksグリッド */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKS.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>

        {/* 戻るリンク */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#60a5fa] transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}

// WorkCardコンポーネント
function WorkCard({ work }: { work: Work }) {
  const content = (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-[#3b82f6]/50 transition-all duration-300 group">
      {/* サムネイル */}
      <div className="aspect-video bg-gradient-to-br from-[#3b82f6]/20 to-[#1e40af]/20 rounded-lg mb-4 flex items-center justify-center">
        {work.thumbnail ? (
          <img
            src={work.thumbnail}
            alt={work.title}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="text-[#a1a1aa] text-sm">画像なし</div>
        )}
      </div>
      
      {/* タイトルと説明 */}
      <h3 className="text-xl font-semibold text-[#f5f5f5] mb-2 group-hover:text-[#3b82f6] transition-colors duration-300">
        {work.title}
      </h3>
      {work.description && (
        <p className="text-[#a1a1aa] text-sm leading-relaxed">
          {work.description}
        </p>
      )}
    </div>
  );

  // URLがある場合は外部リンク、ない場合は通常のdiv
  if (work.url) {
    return (
      <a
        href={work.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}
