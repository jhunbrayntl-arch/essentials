'use client';

interface HumanBodyProps {
  color: string;
  partId: string;
}

export default function HumanBody({ color, partId }: HumanBodyProps) {
  return (
    <svg viewBox="0 0 120 160" className="w-full h-full">
      {/* Torso base */}
      <defs>
        <clipPath id="bodyClip">
          <path d="M 25 10 L 95 10 L 100 40 L 100 140 L 85 150 L 85 160 L 95 160 L 95 155 L 105 155 L 105 160 L 115 160 L 115 145 L 105 140 L 105 40 L 110 20 L 95 5 L 25 5 L 10 20 L 15 40 L 15 140 L 5 145 L 5 160 L 15 160 L 15 155 L 25 155 L 25 160 L 35 160 L 35 150 L 20 140 Z" />
        </clipPath>
      </defs>
      
      {/* Arms */}
      <rect x="5" y="40" width="18" height="100" rx="9" fill="#f5d0b0" />
      <rect x="97" y="40" width="18" height="100" rx="9" fill="#f5d0b0" />
      
      {/* Clothing based on partId */}
      {partId === 'body-1' && (
        /* Essential Tee */
        <g>
          {/* T-shirt */}
          <path d="M 20 25 L 100 25 L 105 45 L 95 50 L 90 35 L 85 40 L 90 145 L 30 145 L 35 40 L 30 35 L 25 50 L 15 45 Z" fill={color} />
          {/* Neckline */}
          <ellipse cx="60" cy="28" rx="12" ry="8" fill={color} />
          <ellipse cx="60" cy="28" rx="8" ry="5" fill="#f5d0b0" />
          {/* Sleeve details */}
          <path d="M 20 30 L 35 45" stroke={color} strokeWidth="8" strokeLinecap="round" />
          <path d="M 100 30 L 85 45" stroke={color} strokeWidth="8" strokeLinecap="round" />
        </g>
      )}
      
      {partId === 'body-2' && (
        /* Classic Hoodie */
        <g>
          {/* Hoodie body */}
          <path d="M 18 22 L 102 22 L 108 48 L 98 55 L 92 38 L 87 45 L 92 150 L 28 150 L 33 45 L 28 38 L 22 55 L 12 48 Z" fill={color} />
          {/* Hood */}
          <path d="M 35 25 Q 60 5 85 25 L 82 30 Q 60 15 38 30 Z" fill={color} />
          {/* Pocket */}
          <rect x="40" y="90" width="40" height="35" rx="5" fill={color} stroke={color} strokeWidth="0.5" filter="brightness(0.9)" />
          {/* Drawstrings */}
          <line x1="55" y1="35" x2="55" y2="70" stroke={color} strokeWidth="2" />
          <line x1="65" y1="35" x2="65" y2="70" stroke={color} strokeWidth="2" />
        </g>
      )}
      
      {partId === 'body-3' && (
        /* Denim Jacket */
        <g>
          {/* Jacket */}
          <path d="M 20 25 L 100 25 L 105 50 L 95 55 L 90 40 L 85 48 L 88 120 L 32 120 L 35 48 L 30 40 L 25 55 L 15 50 Z" fill={color} />
          {/* Collar */}
          <path d="M 40 25 L 60 35 L 80 25 L 85 30 L 60 45 L 35 30 Z" fill={color} />
          {/* Buttons */}
          <circle cx="60" cy="50" r="3" fill="#c0a080" />
          <circle cx="60" cy="70" r="3" fill="#c0a080" />
          <circle cx="60" cy="90" r="3" fill="#c0a080" />
          {/* Pockets */}
          <rect x="35" y="75" width="20" height="25" rx="3" fill={color} filter="brightness(0.85)" />
          <rect x="65" y="75" width="20" height="25" rx="3" fill={color} filter="brightness(0.85)" />
          {/* Stitching */}
          <line x1="25" y1="30" x2="25" y2="115" stroke="white" strokeWidth="1" opacity="0.5" />
          <line x1="95" y1="30" x2="95" y2="115" stroke="white" strokeWidth="1" opacity="0.5" />
        </g>
      )}
      
      {partId === 'body-4' && (
        /* Linen Shirt */
        <g>
          {/* Shirt */}
          <path d="M 22 28 L 98 28 L 103 50 L 93 55 L 88 42 L 83 48 L 86 135 L 34 135 L 37 48 L 32 42 L 27 55 L 17 50 Z" fill={color} />
          {/* Collar */}
          <path d="M 42 28 L 60 40 L 78 28 L 82 33 L 60 48 L 38 33 Z" fill={color} />
          {/* Buttons */}
          <circle cx="60" cy="45" r="2" fill="white" />
          <circle cx="60" cy="60" r="2" fill="white" />
          <circle cx="60" cy="75" r="2" fill="white" />
          <circle cx="60" cy="90" r="2" fill="white" />
          {/* Pocket */}
          <rect x="70" y="60" width="18" height="22" rx="2" fill={color} filter="brightness(0.95)" />
        </g>
      )}
      
      {partId === 'body-5' && (
        /* Bomber Jacket */
        <g>
          {/* Jacket */}
          <path d="M 18 25 L 102 25 L 107 48 L 97 53 L 92 40 L 87 46 L 90 125 L 30 125 L 33 46 L 28 40 L 23 53 L 13 48 Z" fill={color} />
          {/* Ribbed collar */}
          <path d="M 38 28 Q 60 38 82 28 L 85 35 Q 60 48 35 35 Z" fill={color} filter="brightness(0.8)" />
          {/* Ribbed hem */}
          <rect x="30" y="115" width="60" height="10" rx="2" fill={color} filter="brightness(0.8)" />
          {/* Zipper */}
          <rect x="58" y="35" width="4" height="85" rx="2" fill="#4a4a4a" />
          <circle cx="60" cy="50" r="4" fill="#6a6a6a" />
          {/* Pocket */}
          <path d="M 35 70 L 45 75 L 45 95 L 35 90 Z" fill={color} filter="brightness(0.85)" />
          <path d="M 85 70 L 75 75 L 75 95 L 85 90 Z" fill={color} filter="brightness(0.85)" />
        </g>
      )}
      
      {/* Hands */}
      <ellipse cx="14" cy="145" rx="8" ry="12" fill="#f5d0b0" />
      <ellipse cx="106" cy="145" rx="8" ry="12" fill="#f5d0b0" />
    </svg>
  );
}
