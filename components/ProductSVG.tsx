interface ProductSVGProps {
  variant: 'classic' | 'mild' | 'hot';
}

export default function ProductSVG({ variant }: ProductSVGProps) {
  const colors = {
    classic: { primary: '#dc2626', secondary: '#b91c1c', accent: '#991b1b' },
    mild: { primary: '#f97316', secondary: '#ea580c', accent: '#c2410c' },
    hot: { primary: '#991b1b', secondary: '#7f1d1d', accent: '#450a0a' },
  };

  const color = colors[variant];
  const spiceCount = variant === 'hot' ? 5 : variant === 'classic' ? 3 : 2;

  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`gradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: color.primary, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: color.secondary, stopOpacity: 1 }} />
        </linearGradient>
        <radialGradient id={`jar-gradient-${variant}`}>
          <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#e5e5e5', stopOpacity: 0.3 }} />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="400" fill="#f9fafb"/>

      {/* Glass jar body */}
      <rect x="100" y="150" width="200" height="180" rx="10" fill="url(#jar-gradient-${variant})" stroke="#94a3b8" strokeWidth="2"/>

      {/* 'Nduja inside jar */}
      <rect x="110" y="200" width="180" height="120" rx="8" fill={`url(#gradient-${variant})`} opacity="0.9"/>

      {/* Texture dots */}
      {Array.from({ length: 15 }).map((_, i) => (
        <circle
          key={i}
          cx={120 + Math.random() * 160}
          cy={210 + Math.random() * 100}
          r={1.5 + Math.random() * 2}
          fill={color.accent}
          opacity={0.6}
        />
      ))}

      {/* Jar lid */}
      <rect x="85" y="130" width="230" height="25" rx="5" fill="#92400e"/>
      <rect x="90" y="135" width="220" height="15" rx="3" fill="#b45309"/>

      {/* Label */}
      <rect x="120" y="240" width="160" height="60" rx="5" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
      <text x="200" y="265" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#92400e" textAnchor="middle">
        'NDUJA
      </text>
      <text x="200" y="285" fontFamily="Arial, sans-serif" fontSize="12" fill="#78350f" textAnchor="middle">
        {variant === 'classic' ? 'CLASSIC' : variant === 'mild' ? 'MILD' : 'EXTRA HOT'}
      </text>

      {/* Chili peppers indicator */}
      <g transform="translate(130, 340)">
        {Array.from({ length: spiceCount }).map((_, i) => (
          <text key={i} x={i * 25} y="0" fontSize="24">
            🌶️
          </text>
        ))}
      </g>

      {/* Made in Italy badge */}
      <circle cx="340" cy="180" r="30" fill="#009246" opacity="0.9"/>
      <circle cx="340" cy="180" r="20" fill="#ffffff"/>
      <circle cx="340" cy="180" r="10" fill="#ce2b37"/>
      <text x="340" y="225" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#92400e" textAnchor="middle">
        ITALY
      </text>
    </svg>
  );
}
