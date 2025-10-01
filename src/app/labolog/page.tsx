'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface LabItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
}

const labData: LabItem[] = [
  {
    id: 'blockchain-voting',
    title: 'ブロックチェーン投票アプリ',
    description: '改ざん困難な投票を実現するWeb3アプリ。コミュニティやDAOの意思決定を透明化。',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Solidity', 'Ethers.js', 'MetaMask']
  },
  {
    id: 'ai-chatbot',
    title: 'AIカスタマーサポートチャットボット',
    description: '24時間応答のAIチャットボット。よくある質問に自然文で即時回答し、運用コストを最適化。',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'LangChain']
  },
  {
    id: 'nft-learning',
    title: 'NFT技術学習サイト',
    description: 'NFTの基礎から実装までを体系化。サンプルと演習で理解を定着。',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'IPFS', 'Web3.js']
  },
  {
    id: 'crypto-learning',
    title: '暗号資産技術学習サイト',
    description: '暗号学・ブロックチェーン・コンセンサスを要点整理。手を動かして学べるラボ形式。',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SHA-256', 'Schnorr', 'PoS']
  }
];

const LabCard = ({ item, index }: { item: LabItem; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-gray-900/40 to-gray-800/20 rounded-2xl overflow-hidden border border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3b82f6]/10"
      >
        <div className="aspect-video bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center">
          <div className="text-[#a1a1aa] text-sm">No Image</div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-[#f5f5f5] mb-3 group-hover:text-[#3b82f6] transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-[#a1a1aa] mb-4 leading-relaxed text-sm font-light">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-800/60 text-[#a1a1aa] text-xs rounded-full border border-gray-700/50 hover:border-[#3b82f6]/50 transition-colors duration-300 font-medium"
              >
                #{tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#3b82f6] to-[#1e40af] text-white text-sm font-medium rounded-lg hover:from-[#2563eb] hover:to-[#1d4ed8] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Demoを見る
              <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center text-[#3b82f6] hover:text-[#2563eb] text-sm font-medium transition-colors duration-300"
            >
              詳細を見る
              <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function LabologPage() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-light text-[#f5f5f5] mb-6 tracking-tight">
            Labolog
          </h1>
          <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed font-light">
            研究ログ（実験・検証のスナップショット）
          </p>
        </motion.div>

        {/* Labグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {labData.map((item, index) => (
            <LabCard key={item.id} item={item} index={index} />
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
