'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isContactMode, setIsContactMode] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Formspree endpoint - replace with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setMessage('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'X (Twitter)',
      url: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'note',
      url: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-medium text-[#f5f5f5] mb-6">Connect</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-3 p-4 bg-gray-900/30 rounded-2xl border border-gray-800/50 hover:border-[#3b82f6]/50 transition-all duration-300 group"
                  >
                    <div className="text-[#3b82f6] group-hover:text-[#2563eb] transition-colors duration-300">
                      {social.icon}
                    </div>
                    <span className="text-[#f5f5f5] font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form or Coming Soon */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-medium text-[#f5f5f5]">Message</h3>
              <button
                onClick={() => setIsContactMode(!isContactMode)}
                className="px-4 py-2 text-sm bg-gray-800/50 text-[#a1a1aa] rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
              >
                {isContactMode ? '準備中モード' : 'フォームモード'}
              </button>
            </div>

            {isContactMode ? (
              <div className="bg-gray-900/30 rounded-2xl p-8 border border-gray-800/50 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-800/50 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-xl font-medium text-[#f5f5f5] mb-2">Contact 準備中</h4>
                <p className="text-[#a1a1aa]">
                  現在、お問い合わせフォームを準備中です。<br />
                  上記のSNSからお気軽にご連絡ください。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#f5f5f5] mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-[#f5f5f5] placeholder-[#a1a1aa] focus:outline-none focus:border-[#3b82f6] transition-colors duration-300 resize-none"
                    placeholder="お気軽にメッセージをお送りください..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#3b82f6] to-[#1e40af] text-white font-medium py-4 px-8 rounded-xl hover:from-[#2563eb] hover:to-[#1d4ed8] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? '送信中...' : 'Send Message'}
                </motion.button>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-400 text-sm"
                  >
                    メッセージを送信しました。ありがとうございます。
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-red-400 text-sm"
                  >
                    送信に失敗しました。もう一度お試しください。
                  </motion.div>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

