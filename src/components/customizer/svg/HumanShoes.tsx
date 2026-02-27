'use client';

interface HumanShoesProps {
  color: string;
  partId: string;
}

export default function HumanShoes({ color, partId }: HumanShoesProps) {
  return (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      {partId === 'shoes-1' && (
        /* White Sneakers */
        <g>
          {/* Left shoe */}
          <g>
            <path d="M 5 35 L 5 50 Q 5 58 15 58 L 40 58 Q 48 58 48 50 L 48 40 Q 50 35 45 35 Z" fill={color} />
            <path d="M 15 35 L 20 25 Q 25 20 45 25 L 48 35 Z" fill={color} />
            {/* Sole */}
            <path d="M 5 50 L 48 50 L 48 58 Q 48 60 40 60 L 15 60 Q 5 60 5 50 Z" fill="white" />
            {/* Laces */}
            <line x1="25" y1="28" x2="40" y2="28" stroke="white" strokeWidth="2" />
            <line x1="25" y1="32" x2="40" y2="32" stroke="white" strokeWidth="2" />
            {/* Logo */}
            <circle cx="30" cy="45" r="3" fill="#333" />
          </g>
          {/* Right shoe */}
          <g>
            <path d="M 52 35 L 52 50 Q 52 58 62 58 L 87 58 Q 95 58 95 50 L 95 40 Q 97 35 92 35 Z" fill={color} />
            <path d="M 62 35 L 67 25 Q 72 20 92 25 L 95 35 Z" fill={color} />
            {/* Sole */}
            <path d="M 52 50 L 95 50 L 95 58 Q 95 60 87 60 L 62 60 Q 52 60 52 50 Z" fill="white" />
            {/* Laces */}
            <line x1="72" y1="28" x2="87" y2="28" stroke="white" strokeWidth="2" />
            <line x1="72" y1="32" x2="87" y2="32" stroke="white" strokeWidth="2" />
            {/* Logo */}
            <circle cx="77" cy="45" r="3" fill="#333" />
          </g>
        </g>
      )}
      
      {partId === 'shoes-2' && (
        /* Black Sneakers */
        <g>
          {/* Left shoe */}
          <g>
            <path d="M 5 35 L 5 50 Q 5 58 15 58 L 40 58 Q 48 58 48 50 L 48 40 Q 50 35 45 35 Z" fill={color} />
            <path d="M 15 35 L 20 25 Q 25 20 45 25 L 48 35 Z" fill={color} />
            {/* Sole */}
            <path d="M 5 50 L 48 50 L 48 58 Q 48 60 40 60 L 15 60 Q 5 60 5 50 Z" fill="white" />
            {/* Stripe */}
            <path d="M 20 35 L 35 35" stroke="white" strokeWidth="3" />
          </g>
          {/* Right shoe */}
          <g>
            <path d="M 52 35 L 52 50 Q 52 58 62 58 L 87 58 Q 95 58 95 50 L 95 40 Q 97 35 92 35 Z" fill={color} />
            <path d="M 62 35 L 67 25 Q 72 20 92 25 L 95 35 Z" fill={color} />
            {/* Sole */}
            <path d="M 52 50 L 95 50 L 95 58 Q 95 60 87 60 L 62 60 Q 52 60 52 50 Z" fill="white" />
            {/* Stripe */}
            <path d="M 67 35 L 82 35" stroke="white" strokeWidth="3" />
          </g>
        </g>
      )}
      
      {partId === 'shoes-3' && (
        /* Canvas High-Tops */
        <g>
          {/* Left shoe */}
          <g>
            <path d="M 5 30 L 5 50 Q 5 58 15 58 L 40 58 Q 48 58 48 50 L 48 35 L 45 20 Q 35 15 20 20 Q 10 25 5 30 Z" fill={color} />
            {/* Toe cap */}
            <ellipse cx="10" cy="45" rx="8" ry="12" fill="white" />
            {/* Sole */}
            <path d="M 5 50 L 48 50 L 48 58 Q 48 60 40 60 L 15 60 Q 5 60 5 50 Z" fill="white" />
            {/* Laces */}
            <line x1="25" y1="25" x2="40" y2="28" stroke="white" strokeWidth="2" />
            <line x1="22" y1="30" x2="38" y2="33" stroke="white" strokeWidth="2" />
            <line x1="20" y1="35" x2="35" y2="38" stroke="white" strokeWidth="2" />
          </g>
          {/* Right shoe */}
          <g>
            <path d="M 52 30 L 52 50 Q 52 58 62 58 L 87 58 Q 95 58 95 50 L 95 35 L 92 20 Q 82 15 67 20 Q 57 25 52 30 Z" fill={color} />
            {/* Toe cap */}
            <ellipse cx="90" cy="45" rx="8" ry="12" fill="white" />
            {/* Sole */}
            <path d="M 52 50 L 95 50 L 95 58 Q 95 60 87 60 L 62 60 Q 52 60 52 50 Z" fill="white" />
            {/* Laces */}
            <line x1="72" y1="25" x2="87" y2="28" stroke="white" strokeWidth="2" />
            <line x1="69" y1="30" x2="85" y2="33" stroke="white" strokeWidth="2" />
            <line x1="67" y1="35" x2="82" y2="38" stroke="white" strokeWidth="2" />
          </g>
        </g>
      )}
      
      {partId === 'shoes-4' && (
        /* Boots */
        <g>
          {/* Left boot */}
          <g>
            {/* Boot shaft */}
            <path d="M 10 10 L 15 10 L 18 35 L 8 35 Z" fill={color} />
            {/* Foot */}
            <path d="M 5 35 L 8 35 L 18 35 L 42 35 Q 50 35 50 45 L 50 55 Q 50 60 42 60 L 15 60 Q 5 60 5 50 Z" fill={color} />
            {/* Sole */}
            <path d="M 5 55 L 50 55 L 50 60 Q 50 60 42 60 L 15 60 Q 5 60 5 55 Z" fill="#2c1810" />
            {/* Heel */}
            <rect x="8" y="50" width="12" height="10" rx="2" fill="#2c1810" />
            {/* Stitching */}
            <line x1="12" y1="20" x2="12" y2="35" stroke={color} strokeWidth="1" filter="brightness(0.7)" />
          </g>
          {/* Right boot */}
          <g>
            {/* Boot shaft */}
            <path d="M 57 10 L 62 10 L 65 35 L 55 35 Z" fill={color} />
            {/* Foot */}
            <path d="M 52 35 L 55 35 L 65 35 L 89 35 Q 97 35 97 45 L 97 55 Q 97 60 89 60 L 62 60 Q 52 60 52 50 Z" fill={color} />
            {/* Sole */}
            <path d="M 52 55 L 97 55 L 97 60 Q 97 60 89 60 L 62 60 Q 52 60 52 55 Z" fill="#2c1810" />
            {/* Heel */}
            <rect x="55" y="50" width="12" height="10" rx="2" fill="#2c1810" />
            {/* Stitching */}
            <line x1="59" y1="20" x2="59" y2="35" stroke={color} strokeWidth="1" filter="brightness(0.7)" />
          </g>
        </g>
      )}
    </svg>
  );
}
