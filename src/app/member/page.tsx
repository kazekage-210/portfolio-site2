'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MemberPage() {
  const handleGoBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] pt-24 md:pt-32">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#3b82f6] to-[#1e40af] rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-4xl">🚧</span>
            </div>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-light text-[#f5f5f5] mb-6 tracking-tight">
            Member
          </h1>
          <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed font-light">
            このページは現在準備中です
          </p>
        </motion.div>

        {/* 工事中コンテンツ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center py-20"
        >
          <div className="w-32 h-32 mx-auto mb-8 bg-gray-800/50 rounded-full flex items-center justify-center">
            <span className="text-6xl">🚧</span>
          </div>
          <h2 className="text-2xl font-semibold text-[#f5f5f5] mb-4">
            工事中
          </h2>
          <p className="text-lg text-[#a1a1aa] max-w-xl mx-auto leading-relaxed">
            チームメンバーの紹介ページを準備中です。<br />
            もうしばらくお待ちください。
          </p>
        </motion.div>

        {/* ナビゲーションボタン */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={handleGoBack}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#1e40af] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              戻る
            </motion.button>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-[#a1a1aa] hover:text-[#3b82f6] hover:border-[#3b82f6]/50 transition-all duration-300 font-medium"
              >
                トップページへ
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
