'use client';

interface BackgroundGlowProps {
  color: 'turquoise' | 'mustard' | 'magenta';
  className?: string;
}

export const BackgroundGlow = ({ color, className = '' }: BackgroundGlowProps) => {
  const colorMap = {
    turquoise: 'bg-brand-turquoise',
    mustard: 'bg-brand-mustard',
    magenta: 'bg-brand-magenta',
  };

  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${colorMap[color]} ${className}`}
      aria-hidden="true"
    />
  );
};
