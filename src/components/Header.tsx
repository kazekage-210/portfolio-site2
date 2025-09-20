'use client';

import { motion } from 'framer-motion';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 text-[#f5f5f5] hover:text-[#3b82f6] transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-[#3b82f6] rounded-full"></div>
            </div>
            <span className="text-lg font-medium">Profile</span>
          </motion.button>
          
          <nav className="flex items-center space-x-8">
            <motion.button
              onClick={() => scrollToSection('works')}
              className="text-[#f5f5f5] hover:text-[#3b82f6] transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Works
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="text-[#f5f5f5] hover:text-[#3b82f6] transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact
            </motion.button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

