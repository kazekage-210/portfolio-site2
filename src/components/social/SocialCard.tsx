"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SocialItem } from "@/config/socialLinks.config";
import { SocialIcon } from "./SocialIcon";
import clsx from "clsx";

interface SocialCardProps {
  item: SocialItem;
}

export function SocialCard({ item }: SocialCardProps) {
  const isActive = item.status === "active";
  const isComingSoon = item.id === "youtube" || item.id === "tiktok";

  const handleClick = () => {
    if (isActive && item.href) {
      // アナリティクス送信（将来の拡張用）
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (...args: unknown[]) => void }).gtag;
        gtag('event', 'sns_click', {
          id: item.id,
          area: 'footer',
          analytics_key: item.analyticsKey
        });
      }
    }
  };

  const cardContent = (
    <motion.div
      whileHover={isActive ? { y: -2 } : {}}
      whileTap={isActive ? { scale: 0.98 } : {}}
      className={clsx(
        "relative rounded-2xl border p-4 md:p-6 shadow-sm transition-all duration-200",
        "focus-within:ring-2 focus-within:ring-[#3b82f6] focus-within:ring-offset-2 focus-within:ring-offset-[#0d0d0d]",
        isActive
          ? isComingSoon 
            ? "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] hover:shadow-lg"
            : "border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02] hover:shadow-lg"
          : "border-white/5 bg-white/[0.01] opacity-60"
      )}
      data-sns={item.id}
      onClick={handleClick}
    >
      <div
        className={clsx(
          "flex items-start gap-4",
          isActive ? "cursor-pointer" : "cursor-not-allowed select-none"
        )}
      >
        <div className={clsx(
          "grid place-items-center rounded-xl h-12 w-12 flex-shrink-0 transition-all duration-200",
          isActive 
            ? isComingSoon 
              ? "bg-white/[0.02]" 
              : "bg-white/[0.01]"
            : "bg-white/[0.01] grayscale"
        )}>
          <SocialIcon iconId={item.iconId} className="h-6 w-6" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className={`text-base font-semibold ${
              isActive && !isComingSoon 
                ? "text-[#6b7280]" 
                : "text-[#d1d5db]"
            }`}>
              {item.label}
            </h3>
          </div>
          
          {item.description && (
            <p className="text-sm text-[#6b7280] opacity-70 leading-relaxed whitespace-pre-line">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );

  if (isActive && item.href) {
    return (
      <Link
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.ariaLabel}
        className="focus-visible:outline-none"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div
      role="button"
      aria-label={item.ariaLabel}
      aria-disabled="true"
      tabIndex={-1}
      className="focus-visible:outline-none"
    >
      {cardContent}
    </div>
  );
}
