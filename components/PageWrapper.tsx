// components/PageWrapper.tsx
'use client';
import { motion } from 'framer-motion';
import React from 'react';

const variants = {
  hidden: { opacity: 0, x: -50 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
    >
      {children}
    </motion.div>
  );
}
