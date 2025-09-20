'use client';

import { motion } from 'framer-motion';
import WorkCard from './WorkCard';
import { worksData, getFeaturedWorks } from '@/data/worksData';

const Works = () => {
  const featuredWorks = getFeaturedWorks();

  return (
    <section id="works" className="py-32 px-6 relative">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1e40af]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-8"
          >
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#3b82f6] to-[#1e40af] rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-light text-[#f5f5f5] mb-6 tracking-tight">
            Works
          </h2>
          <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed font-light">
            技術と創造力を重ね、世界と静かにつながるプロジェクトを届けています
          </p>
        </motion.div>
        
        {worksData.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-800/50 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-[#a1a1aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <p className="text-lg text-[#a1a1aa]">まだ制作物はありません</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {worksData.map((work, index) => (
              <WorkCard key={work.id} work={work} index={index} />
            ))}
          </div>
        )}

        {/* 追加の作品を見るボタン（将来の拡張用） */}
        {worksData.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-[#a1a1aa] hover:text-[#3b82f6] hover:border-[#3b82f6]/50 transition-all duration-300 font-medium"
            >
              もっと見る
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Works;

