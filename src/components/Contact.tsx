'use client';

import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-light text-[#f5f5f5] mb-6 tracking-tight">
            Contact
          </h2>
          <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed font-light">
            お気軽にお声がけください。新しいプロジェクトのご相談も歓迎します
          </p>
        </motion.div>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact Under Preparation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gray-900/30 rounded-2xl border border-gray-800/50 p-12">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#3b82f6] to-[#1e40af] rounded-2xl flex items-center justify-center shadow-lg mb-8">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-[#f5f5f5] mb-4">Contact 準備中</h3>
              <p className="text-[#a1a1aa] leading-relaxed">
                現在、お問い合わせフォームを準備中です。<br />
                上記のSNSからお気軽にご連絡ください。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;