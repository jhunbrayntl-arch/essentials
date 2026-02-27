'use client';

interface HumanHeadProps {
  color: string;
  partId: string;
}

export default function HumanHead({ color, partId }: HumanHeadProps) {
  // Skin tone
  const skinColor = '#f5d0b0';
  
  return (
    <svg viewBox="0 0 100 120" className="w-full h-full">
      {/* Neck */}
      <rect x="35" y="90" width="30" height="30" fill={skinColor} />
      
      {/* Head base */}
      <ellipse cx="50" cy="55" rx="35" ry="45" fill={skinColor} />
      
      {/* Hair/Headwear based on partId */}
      {partId === 'head-1' && (
        /* Cap */
        <g>
          <path d="M 10 50 Q 50 20 90 50 L 90 55 Q 50 35 10 55 Z" fill={color} />
          <path d="M 85 50 L 95 55 L 85 60 Z" fill={color} />
          <rect x="70" y="48" width="25" height="8" fill={color} />
        </g>
      )}
      
      {partId === 'head-2' && (
        /* Beanie */
        <g>
          <ellipse cx="50" cy="45" rx="38" ry="40" fill={color} />
          <rect x="12" y="75" width="76" height="15" rx="7" fill={color} />
          <circle cx="50" cy="15" r="8" fill={color} />
        </g>
      )}
      
      {partId === 'head-3' && (
        /* Bucket Hat */
        <g>
          <ellipse cx="50" cy="85" rx="45" ry="12" fill={color} />
          <path d="M 20 80 Q 50 50 80 80 L 75 85 Q 50 60 25 85 Z" fill={color} />
        </g>
      )}
      
      {partId === 'head-4' && (
        /* Short Hair */
        <g>
          <path d="M 15 50 Q 15 20 50 15 Q 85 20 85 50 L 80 45 Q 80 25 50 22 Q 20 25 20 45 Z" fill="#4a3728" />
        </g>
      )}
      
      {/* Eyes */}
      <ellipse cx="38" cy="50" rx="5" ry="4" fill="white" />
      <ellipse cx="62" cy="50" rx="5" ry="4" fill="white" />
      <circle cx="38" cy="50" r="2.5" fill="#2c1810" />
      <circle cx="62" cy="50" r="2.5" fill="#2c1810" />
      
      {/* Eyebrows */}
      <path d="M 32 42 Q 38 38 44 42" stroke="#4a3728" strokeWidth="2" fill="none" />
      <path d="M 56 42 Q 62 38 68 42" stroke="#4a3728" strokeWidth="2" fill="none" />
      
      {/* Nose */}
      <path d="M 50 52 L 47 62 L 50 64 L 53 62 Z" fill={skinColor} stroke="#d4a574" strokeWidth="1" />
      
      {/* Mouth */}
      <path d="M 40 72 Q 50 78 60 72" stroke="#c4856a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      
      {/* Ears */}
      <ellipse cx="15" cy="58" rx="5" ry="10" fill={skinColor} />
      <ellipse cx="85" cy="58" rx="5" ry="10" fill={skinColor} />
    </svg>
  );
}
