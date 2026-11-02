import React, { useState } from 'react';

interface BrandLogoProps {
  src: string;
  alt: string;
  className?: string;
  variant?: 'light-tile' | 'translucent' | 'header';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  src,
  alt,
  className = '',
  variant = 'light-tile'
}) => {
  const [hasError, setHasError] = useState(false);

  // If broken, render stylish fallback badge
  if (hasError) {
    const initials = alt
      .split(' ')
      .slice(0, 2)
      .map((w) => w[0])
      .join('')
      .toUpperCase();
    return (
      <div
        className={`flex items-center justify-center font-bold tracking-wider text-xs rounded-lg border border-[#FAAE17]/30 bg-[#270B30] text-[#FAAE17] ${className}`}
      >
        {initials || 'WMM'}
      </div>
    );
  }

  if (variant === 'header') {
    return (
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`object-contain transition-transform duration-300 ${className}`}
      />
    );
  }

  // Light-tile variant is the ultra-clean, luxury gallery tile:
  // It gives a crisp, soft alabaster backdrop with subtle gold-plum border,
  // guaranteeing that black, coloured, and outline logos all look striking and clear!
  return (
    <div
      className={`relative flex items-center justify-center rounded-xl p-3 bg-white/95 backdrop-blur-sm border border-[#FAAE17]/25 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#FAAE17]/60 group ${className}`}
    >
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};
