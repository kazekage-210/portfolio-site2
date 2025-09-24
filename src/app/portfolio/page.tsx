'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import WorkCard from '@/components/WorkCard';
import { portfolioData } from '@/data/portfolioData';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-6 py-12">
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
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#3b82f6] to-[#1e40af] rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-light text-[#f5f5f5] mb-6 tracking-tight">
            Portfolio
          </h1>
          <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed font-light">
            これまでに手がけたプロジェクトや作品を紹介しています
          </p>
        </motion.div>

        {/* Portfolioグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioData.map((work, index) => (
            <WorkCard key={work.id} work={work} index={index} />
          ))}
        </div>

        {/* 戻るリンク */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-[#a1a1aa] hover:text-[#3b82f6] hover:border-[#3b82f6]/50 transition-all duration-300 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              トップページに戻る
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}