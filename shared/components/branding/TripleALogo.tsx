import React from 'react';

interface TripleALogoProps {
  className?: string;
  showName?: boolean;
}

export const TripleALogo: React.FC<TripleALogoProps> = ({ className, showName = true }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={showName ? '0 0 250 70' : '0 0 120 120'}
    className={className}
    aria-label={showName ? 'TripleA Estudio' : 'TripleA'}
    role="img"
  >
    <rect
      x={showName ? 0 : 2}
      y={showName ? 0 : 2}
      width={showName ? 250 : 116}
      height={showName ? 70 : 116}
      rx={showName ? 0 : 24}
      fill={showName ? 'transparent' : '#020617'}
    />
    <text
      x={showName ? 4 : 60}
      y={showName ? 48 : 72}
      textAnchor={showName ? undefined : 'middle'}
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="900"
      fontSize={showName ? 52 : 48}
      letterSpacing={showName ? '-2' : '-6'}
      fill="#0ea5e9"
    >
      A
    </text>
    <text
      x={showName ? 46 : 60}
      y={showName ? 48 : 72}
      textAnchor={showName ? undefined : 'middle'}
      dx={showName ? undefined : 16}
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="900"
      fontSize={showName ? 52 : 48}
      letterSpacing={showName ? '-2' : '-6'}
      fill="#8b5cf6"
    >
      A
    </text>
    <text
      x={showName ? 88 : 60}
      y={showName ? 48 : 72}
      textAnchor={showName ? undefined : 'middle'}
      dx={showName ? undefined : 32}
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="900"
      fontSize={showName ? 52 : 48}
      letterSpacing={showName ? '-2' : '-6'}
      fill="#f97316"
    >
      A
    </text>
    {showName && (
      <>
        <line x1="130" y1="14" x2="130" y2="48" stroke="#64748b" strokeWidth="1.5" />
        <text
          x="138"
          y="46"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="600"
          fontSize="16"
          letterSpacing="0.5"
          fill="#ffffff"
        >
          Estudio
        </text>
      </>
    )}
  </svg>
);
