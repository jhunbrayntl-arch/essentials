'use client';

interface HumanLegsProps {
  color: string;
  partId: string;
}

export default function HumanLegs({ color, partId }: HumanLegsProps) {
  return (
    <svg viewBox="0 0 100 140" className="w-full h-full">
      {/* Legs base */}
      {partId === 'legs-1' && (
        /* Slim Chino */
        <g>
          {/* Waist */}
          <rect x="20" y="0" width="60" height="15" rx="5" fill={color} />
          {/* Left leg */}
          <path d="M 20 15 L 35 15 L 38 130 L 32 135 L 26 130 Z" fill={color} />
          {/* Right leg */}
          <path d="M 65 15 L 80 15 L 74 130 L 68 135 L 62 130 Z" fill={color} />
          {/* Crotch area */}
          <path d="M 35 15 Q 50 25 65 15" fill={color} />
          {/* Pockets */}
          <path d="M 22 20 Q 28 25 22 35" stroke={color} strokeWidth="2" fill="none" filter="brightness(0.9)" />
          <path d="M 78 20 Q 72 25 78 35" stroke={color} strokeWidth="2" fill="none" filter="brightness(0.9)" />
          {/* Belt loops */}
          <rect x="38" y="2" width="3" height="12" rx="1" fill={color} filter="brightness(0.85)" />
          <rect x="59" y="2" width="3" height="12" rx="1" fill={color} filter="brightness(0.85)" />
          {/* Crease lines */}
          <line x1="30" y1="30" x2="30" y2="125" stroke={color} strokeWidth="1" filter="brightness(0.8)" />
          <line x1="70" y1="30" x2="70" y2="125" stroke={color} strokeWidth="1" filter="brightness(0.8)" />
        </g>
      )}
      
      {partId === 'legs-2' && (
        /* Slim Jeans */
        <g>
          {/* Waist */}
          <rect x="18" y="0" width="64" height="18" rx="5" fill={color} />
          {/* Left leg */}
          <path d="M 18 18 L 36 18 L 40 135 L 33 140 L 28 135 Z" fill={color} />
          {/* Right leg */}
          <path d="M 64 18 L 82 18 L 77 135 L 70 140 L 65 135 Z" fill={color} />
          {/* Crotch */}
          <path d="M 36 18 Q 50 30 64 18" fill={color} />
          {/* Fly */}
          <rect x="47" y="15" width="6" height="25" rx="2" fill={color} filter="brightness(0.9)" />
          {/* Front pockets */}
          <path d="M 20 20 Q 30 25 25 40" stroke={color} strokeWidth="2" fill="none" filter="brightness(0.85)" />
          <path d="M 80 20 Q 70 25 75 40" stroke={color} strokeWidth="2" fill="none" filter="brightness(0.85)" />
          {/* Back pockets */}
          <rect x="25" y="50" width="15" height="20" rx="3" fill={color} filter="brightness(0.85)" />
          <rect x="60" y="50" width="15" height="20" rx="3" fill={color} filter="brightness(0.85)" />
          {/* Stitching */}
          <line x1="28" y1="30" x2="28" y2="130" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="72" y1="30" x2="72" y2="130" stroke="white" strokeWidth="1" opacity="0.3" />
        </g>
      )}
      
      {partId === 'legs-3' && (
        /* Cargo Pants */
        <g>
          {/* Waist */}
          <rect x="16" y="0" width="68" height="20" rx="5" fill={color} />
          {/* Left leg */}
          <path d="M 16 20 L 38 20 L 42 135 L 34 140 L 28 135 Z" fill={color} />
          {/* Right leg */}
          <path d="M 62 20 L 84 20 L 78 135 L 70 140 L 66 135 Z" fill={color} />
          {/* Crotch */}
          <path d="M 38 20 Q 50 35 62 20" fill={color} />
          {/* Cargo pockets */}
          <rect x="20" y="55" width="20" height="30" rx="3" fill={color} filter="brightness(0.9)" />
          <rect x="60" y="55" width="20" height="30" rx="3" fill={color} filter="brightness(0.9)" />
          {/* Pocket flaps */}
          <rect x="20" y="55" width="20" height="8" rx="2" fill={color} filter="brightness(0.85)" />
          <rect x="60" y="55" width="20" height="8" rx="2" fill={color} filter="brightness(0.85)" />
          {/* Side pockets */}
          <path d="M 18 25 Q 25 30 20 45" stroke={color} strokeWidth="2" fill="none" />
          <path d="M 82 25 Q 75 30 80 45" stroke={color} strokeWidth="2" fill="none" />
          {/* Belt loops */}
          <rect x="35" y="2" width="4" height="16" rx="1" fill={color} filter="brightness(0.85)" />
          <rect x="61" y="2" width="4" height="16" rx="1" fill={color} filter="brightness(0.85)" />
        </g>
      )}
      
      {partId === 'legs-4' && (
        /* Jogger Sweatpants */
        <g>
          {/* Waist */}
          <rect x="18" y="0" width="64" height="20" rx="10" fill={color} />
          {/* Waistband */}
          <rect x="18" y="0" width="64" height="8" rx="3" fill={color} filter="brightness(0.85)" />
          {/* Left leg */}
          <path d="M 18 20 Q 15 70 20 115 L 36 115 L 38 130 L 30 135 L 25 125 Z" fill={color} />
          {/* Right leg */}
          <path d="M 82 20 Q 85 70 80 115 L 64 115 L 62 130 L 70 135 L 75 125 Z" fill={color} />
          {/* Crotch */}
          <path d="M 36 20 Q 50 35 64 20" fill={color} />
          {/* Pocket seams */}
          <path d="M 20 25 Q 28 30 25 45" stroke={color} strokeWidth="2" fill="none" filter="brightness(0.9)" />
          <path d="M 80 25 Q 72 30 75 45" stroke={color} strokeWidth="2" fill="none" filter="brightness(0.9)" />
          {/* Cuffed ankles */}
          <rect x="22" y="115" width="16" height="15" rx="3" fill={color} filter="brightness(0.9)" />
          <rect x="62" y="115" width="16" height="15" rx="3" fill={color} filter="brightness(0.9)" />
        </g>
      )}
    </svg>
  );
}
