interface SectionBadgeProps {
  text: string;
  colorTheme?: 'turquoise' | 'mustard' | 'magenta';
  className?: string;
}

export const SectionBadge = ({ text, colorTheme = 'turquoise', className = '' }: SectionBadgeProps) => {
  const bgMap = {
    turquoise: 'bg-brand-turquoise/10',
    mustard: 'bg-brand-mustard/10',
    magenta: 'bg-brand-magenta/10',
  };

  const textMap = {
    turquoise: 'text-brand-turquoise',
    mustard: 'text-brand-mustard',
    magenta: 'text-brand-magenta',
  };

  return (
    <span
      className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${bgMap[colorTheme]} ${textMap[colorTheme]} ${className}`}
    >
      {text}
    </span>
  );
};
