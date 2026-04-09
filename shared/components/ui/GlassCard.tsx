'use client';

import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export const GlassCard = ({ children, className = '', ...props }: GlassCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className={`glass-panel p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden text-slate-300 [&_h3]:text-white [&_h3]:font-bold [&_h4]:text-white [&_h4]:font-bold [&_p]:text-slate-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
