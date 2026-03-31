export default function NdujaHero() {
  return (
    <svg
      viewBox="0 0 800 600"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ndujaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#ea580c', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#b91c1c', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3"/>
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="600" fill="#f9fafb"/>

      {/* Wooden board */}
      <rect x="100" y="150" width="600" height="400" rx="20" fill="#92400e" opacity="0.3"/>
      <rect x="120" y="170" width="560" height="360" rx="15" fill="#b45309" opacity="0.2"/>

      {/* 'Nduja spread */}
      <ellipse cx="400" cy="350" rx="200" ry="150" fill="url(#ndujaGradient)" filter="url(#shadow)"/>

      {/* Texture dots */}
      <circle cx="350" cy="320" r="3" fill="#991b1b" opacity="0.6"/>
      <circle cx="420" cy="340" r="2" fill="#991b1b" opacity="0.5"/>
      <circle cx="380" cy="370" r="2.5" fill="#991b1b" opacity="0.7"/>
      <circle cx="450" cy="360" r="2" fill="#991b1b" opacity="0.6"/>
      <circle cx="340" cy="380" r="3" fill="#991b1b" opacity="0.5"/>
      <circle cx="460" cy="330" r="2" fill="#991b1b" opacity="0.6"/>

      {/* Shiny highlights */}
      <ellipse cx="350" cy="320" rx="40" ry="25" fill="white" opacity="0.2"/>
      <ellipse cx="430" cy="350" rx="50" ry="30" fill="white" opacity="0.15"/>

      {/* Pepper slices */}
      <circle cx="300" cy="280" r="15" fill="#7c2d12" opacity="0.8"/>
      <circle cx="305" cy="280" r="8" fill="#dc2626" opacity="0.6"/>

      <circle cx="520" cy="400" r="18" fill="#7c2d12" opacity="0.8"/>
      <circle cx="525" cy="400" r="10" fill="#dc2626" opacity="0.6"/>

      {/* Knife */}
      <rect x="550" y="200" width="150" height="15" rx="3" fill="#78716c" transform="rotate(25 550 200)"/>
      <polygon points="690,195 720,207 700,220" fill="#d1d5db"/>

      {/* Text decoration */}
      <text x="400" y="120" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="bold" fill="#dc2626" textAnchor="middle">
        'NDUJA
      </text>
      <text x="400" y="160" fontFamily="Arial, sans-serif" fontSize="20" fill="#7c2d12" textAnchor="middle" fontStyle="italic">
        Calabrian Tradition
      </text>
    </svg>
  );
}
