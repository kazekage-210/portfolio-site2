'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  // SNSリンクの設定（ここを書き換えればOK）
  const socialLinks = [
    {
      name: 'X (Twitter)',
      url: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'note',
      url: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative">
      {/* パーティクル背景効果 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#3b82f6]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#3b82f6]/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#3b82f6]/25 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-[#3b82f6]/20 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative w-48 h-48 mx-auto mb-12">
            {/* 外側の光るリング */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6] to-[#1e40af] rounded-full blur-2xl opacity-20 animate-pulse"></div>
            {/* メインのプロフィール画像 */}
            <div className="relative w-48 h-48 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-full flex items-center justify-center border border-gray-700/30 shadow-2xl backdrop-blur-sm">
              <div className="w-40 h-40 bg-gradient-to-br from-[#3b82f6] to-[#1e40af] rounded-full flex items-center justify-center shadow-inner">
                <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-6xl font-light text-[#f5f5f5] mb-8 tracking-tight"
        >
          no name
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-xl md:text-2xl text-[#a1a1aa] leading-relaxed mb-8 font-light">
            匿名のエンジニアとして、デジタルの余白に新しい価値を描いています。
          </p>
          <p className="text-lg md:text-xl text-[#a1a1aa] leading-relaxed font-light">
            暗号資産からAI、フルリモートの未来まで──技術と創造力を重ね、<br />
            世界と静かにつながるプロジェクトを届けています。
          </p>
        </motion.div>

        {/* SNSボタン */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full hover:border-[#3b82f6]/50 transition-all duration-300"
            >
              <div className="text-[#a1a1aa] group-hover:text-[#3b82f6] transition-colors duration-300">
                {social.icon}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

