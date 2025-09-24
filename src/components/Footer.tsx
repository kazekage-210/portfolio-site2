'use client';

import { motion } from 'framer-motion';
import FooterSocials from '@/app/components/FooterSocials';

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 左側: ブランド情報 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#f5f5f5] mb-4">
                <span className="bg-gradient-to-r from-[#3b82f6] to-[#1e40af] bg-clip-text text-transparent">
                  Team Next
                </span>
              </h3>
              <p className="text-[#a1a1aa] leading-relaxed max-w-md">
                技術と創造力を重ね、世界と静かにつながるプロジェクトを届けています。
                モダンなWeb技術で、ユーザー体験を向上させるソリューションを提供します。
              </p>
            </div>
            
            <div className="text-sm text-[#a1a1aa]">
              <p>&copy; 2024 Team Next. All rights reserved.</p>
            </div>
          </motion.div>

          {/* 右側: SNS一覧 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FooterSocials />
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
