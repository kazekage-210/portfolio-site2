'use client';

import { motion } from 'framer-motion';
import { PROFILE } from '@/config/profile';
import HeaderSocials from '@/app/components/HeaderSocials';
import NonCommercialNote from './NonCommercialNote';

const Hero = () => {

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative">
      {/* パーティクル背景効果 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#3b82f6]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#3b82f6]/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#3b82f6]/25 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-[#3b82f6]/20 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-28 md:pt-36 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-12 md:gap-16">
          {/* 左エリア: プロフィール画像 (30-35%) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 w-full md:w-[35%] flex justify-center md:justify-start pl-8 md:pl-16"
          >
            <div className="relative">
              {/* 外側のブルーグロー - 画像サイズに合わせて拡大 */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/25 to-[#1e40af]/15 blur-2xl opacity-50 animate-pulse"></div>
              {/* 画像コンテナ - 2倍サイズに拡大 */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-2 border-[#3b82f6]/40 shadow-2xl backdrop-blur-sm">
                <img 
                  src="/user-profile1.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* 仕切り線（デスクトップのみ） - 画像サイズに合わせて調整 */}
          <div className="hidden md:block w-px h-48 bg-gradient-to-b from-transparent via-[#3b82f6]/20 to-transparent"></div>

          {/* 右エリア: プロフィール情報 (65-70%) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 w-full md:w-[65%] flex flex-col justify-center text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-light text-[#f5f5f5] mb-6 tracking-wide leading-tight">
              Profile
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-light text-[#3b82f6] mb-6 tracking-wide leading-tight">
              {PROFILE.name}
            </h2>
            
            <div className="mb-8">
              <p className="text-sm text-[#a1a1aa] font-light tracking-wide leading-relaxed">
                {PROFILE.note}
              </p>
            </div>
            
            <div className="mb-10">
              <p className="text-lg md:text-xl text-[#a1a1aa] leading-loose font-light tracking-wide whitespace-pre-line">
                {PROFILE.bio}
              </p>
            </div>

            {/* SNSボタン（ヘッダーから移動） */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center md:justify-start"
            >
              <HeaderSocials />
            </motion.div>
            
            {/* 非商用デモ注意書き */}
            <NonCommercialNote />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

