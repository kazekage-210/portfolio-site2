'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Work } from '@/data/worksData';

interface WorkCardProps {
  work: Work;
  index: number;
}

const WorkCard = ({ work, index }: WorkCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % work.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + work.images.length) % work.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group perspective-1000"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        whileHover={{ rotateY: 5, rotateX: 5 }}
        transition={{ duration: 0.3 }}
        className="relative bg-gradient-to-br from-gray-900/40 to-gray-800/20 rounded-3xl overflow-hidden border border-gray-800/30 hover:border-gray-700/50 transition-all duration-700 hover:shadow-2xl hover:shadow-[#3b82f6]/10 transform-gpu"
      >
        {/* Featured Badge */}
        {work.featured && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute top-6 right-6 z-10"
          >
            <span className="px-3 py-1 bg-gradient-to-r from-[#3b82f6] to-[#1e40af] text-white text-xs font-medium rounded-full shadow-lg backdrop-blur-sm">
              Featured
            </span>
          </motion.div>
        )}

        {/* カテゴリーと年表示 */}
        <div className="absolute top-6 left-6 z-10">
          <div className="flex items-center space-x-2">
            {work.category && (
              <span className="px-2 py-1 bg-gray-800/60 text-[#a1a1aa] text-xs rounded-full border border-gray-700/50">
                {work.category}
              </span>
            )}
            {work.year && (
              <span className="px-2 py-1 bg-gray-800/60 text-[#a1a1aa] text-xs rounded-full border border-gray-700/50">
                {work.year}
              </span>
            )}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[16/10] bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center overflow-hidden">
            {work.images.length > 0 ? (
              <div className="relative w-full h-full">
                <img
                  src={work.images[currentImageIndex]}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/800x500/374151/9CA3AF?text=${encodeURIComponent(work.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* 画像カウンター */}
                {work.images.length > 1 && (
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    {currentImageIndex + 1} / {work.images.length}
                  </div>
                )}
                
                {work.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {work.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="text-[#a1a1aa] text-sm">No Image</div>
            )}
          </div>
        </div>
        
        <div className="p-8">
          <h3 className="text-2xl font-semibold text-[#f5f5f5] mb-4 group-hover:text-[#3b82f6] transition-colors duration-300">
            {work.title}
          </h3>
          <p className="text-[#a1a1aa] mb-6 leading-relaxed text-base font-light">
            {work.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {work.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800/60 text-[#a1a1aa] text-sm rounded-full border border-gray-700/50 hover:border-[#3b82f6]/50 transition-colors duration-300 font-medium"
              >
                #{tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            {work.demoUrl && (
              <motion.a
                href={work.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#1e40af] text-white font-medium rounded-xl hover:from-[#2563eb] hover:to-[#1d4ed8] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Demoを見る
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            )}
            <motion.a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center text-[#3b82f6] hover:text-[#2563eb] transition-colors duration-300 font-medium"
            >
              詳細を見る
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorkCard;

