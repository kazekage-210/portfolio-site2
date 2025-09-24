"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SocialItem } from "@/config/socialLinks.config";
import { SocialIcon } from "./SocialIcon";
import clsx from "clsx";

interface SocialPillProps {
  item: SocialItem;
}

export function SocialPill({ item }: SocialPillProps) {
  const isActive = item.status === "active";

  const handleClick = () => {
    if (isActive && item.href) {
      // アナリティクス送信（将来の拡張用）
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (...args: unknown[]) => void }).gtag;
        gtag('event', 'sns_click', {
          id: item.id,
          area: 'header',
          analytics_key: item.analyticsKey
        });
      }
    }
  };

  const pillContent = (
    <motion.span
      whileHover={isActive ? { y: -1 } : {}}
      whileTap={isActive ? { scale: 0.98 } : {}}
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]",
        isActive
          ? "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] text-[#d1d5db] cursor-pointer"
          : "opacity-50 border-white/5 bg-white/[0.01] text-[#6b7280] cursor-not-allowed"
      )}
      data-sns={item.id}
      onClick={handleClick}
    >
      <SocialIcon iconId={item.iconId} className="h-5 w-5" />
      <span className="whitespace-nowrap">{item.label}</span>
    </motion.span>
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
        {pillContent}
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
      {pillContent}
    </div>
  );
}
