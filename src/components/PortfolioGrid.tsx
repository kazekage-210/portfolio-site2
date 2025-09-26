'use client';

import { motion } from 'framer-motion';
import WorkCard from '@/components/WorkCard';
import { portfolioData } from '@/data/portfolioData';

export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {portfolioData.map((work, index) => (
        <WorkCard key={work.id} work={work} index={index} />
      ))}
    </div>
  );
}
