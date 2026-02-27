'use client';

interface ModelBaseProps {
  skinTone?: string;
}

export default function ModelBase({ skinTone = '#e8c4a0' }: ModelBaseProps) {
  return (
    <svg viewBox="0 0 400 800" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        {/* Gradients for realistic shading */}
        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={skinTone} stopOpacity="0.9" />
          <stop offset="50%" stopColor={skinTone} />
          <stop offset="100%" stopColor={skinTone} stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="faceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={skinTone} stopOpacity="1" />
          <stop offset="100%" stopColor={skinTone} stopOpacity="0.95" />
        </linearGradient>
      </defs>
      
      {/* Backdrop shadow */}
      <ellipse cx="200" cy="780" rx="120" ry="20" fill="black" opacity="0.3" />
      
      {/* Legs */}
      <g id="legs">
        {/* Left leg */}
        <path
          d="M 165 420 L 165 720 Q 165 740 175 750 L 185 760 L 195 750 Q 205 740 205 720 L 205 420 Z"
          fill="url(#bodyGradient)"
        />
        {/* Right leg */}
        <path
          d="M 195 420 L 195 720 Q 195 740 205 750 L 215 760 L 225 750 Q 235 740 235 720 L 235 420 Z"
          fill="url(#bodyGradient)"
        />
      </g>
      
      {/* Torso */}
      <g id="torso">
        {/* Waist/Hips */}
        <path
          d="M 155 280 L 155 420 L 245 420 L 245 280 Q 200 260 155 280"
          fill="url(#bodyGradient)"
        />
        {/* Chest */}
        <path
          d="M 150 180 L 150 280 Q 150 300 160 310 L 240 310 Q 250 300 250 280 L 250 180 Q 200 160 150 180"
          fill="url(#bodyGradient)"
        />
        {/* Chest definition */}
        <ellipse cx="180" cy="220" rx="25" ry="30" fill={skinTone} opacity="0.5" />
        <ellipse cx="220" cy="220" rx="25" ry="30" fill={skinTone} opacity="0.5" />
      </g>
      
      {/* Arms */}
      <g id="arms">
        {/* Left arm */}
        <path
          d="M 150 190 Q 130 250 135 350 L 145 350 Q 140 250 160 190 Z"
          fill="url(#bodyGradient)"
        />
        {/* Right arm */}
        <path
          d="M 250 190 Q 270 250 265 350 L 255 350 Q 260 250 240 190 Z"
          fill="url(#bodyGradient)"
        />
        {/* Hands */}
        <ellipse cx="140" cy="365" rx="12" ry="18" fill="url(#bodyGradient)" />
        <ellipse cx="260" cy="365" rx="12" ry="18" fill="url(#bodyGradient)" />
      </g>
      
      {/* Neck */}
      <g id="neck">
        <rect x="185" y="140" width="30" height="45" fill="url(#bodyGradient)" />
      </g>
      
      {/* Head - Jordan Barrett inspired features */}
      <g id="head">
        {/* Head shape */}
        <ellipse cx="200" cy="100" rx="55" ry="65" fill="url(#faceGradient)" />
        
        {/* Jawline definition */}
        <path
          d="M 150 100 Q 145 140 160 160 Q 180 175 200 175 Q 220 175 240 160 Q 255 140 250 100"
          fill="none"
          stroke={skinTone}
          strokeWidth="1"
          opacity="0.5"
        />
        
        {/* Hair - styled blonde/light brown */}
        <path
          d="M 145 80 Q 150 40 200 35 Q 250 40 255 80 Q 260 60 250 50 Q 200 30 150 50 Q 140 60 145 80"
          fill="#c4a777"
        />
        <path
          d="M 155 60 Q 170 45 200 45 Q 230 45 245 60 L 240 70 Q 200 55 160 70 Z"
          fill="#d4b787"
        />
        
        {/* Eyes - blue/green */}
        <ellipse cx="180" cy="95" rx="12" ry="8" fill="white" />
        <ellipse cx="220" cy="95" rx="12" ry="8" fill="white" />
        <circle cx="180" cy="95" r="5" fill="#5b9bd5" />
        <circle cx="220" cy="95" r="5" fill="#5b9bd5" />
        <circle cx="180" cy="95" r="2.5" fill="#1a1a1a" />
        <circle cx="220" cy="95" r="2.5" fill="#1a1a1a" />
        
        {/* Eyebrows - defined */}
        <path d="M 168 82 Q 180 76 192 82" stroke="#8b7355" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 208 82 Q 220 76 232 82" stroke="#8b7355" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        
        {/* Nose - defined bridge */}
        <path d="M 200 95 L 195 120 L 200 125 L 205 120 Z" fill={skinTone} opacity="0.8" />
        <line x1="200" y1="95" x2="200" y2="120" stroke={skinTone} strokeWidth="1" opacity="0.5" />
        
        {/* Cheekbones */}
        <ellipse cx="165" cy="115" rx="15" ry="8" fill={skinTone} opacity="0.4" />
        <ellipse cx="235" cy="115" rx="15" ry="8" fill={skinTone} opacity="0.4" />
        
        {/* Lips */}
        <path d="M 185 140 Q 200 135 215 140" stroke="#c4856a" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 185 145 Q 200 150 215 145" stroke="#c4856a" strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Ears */}
        <ellipse cx="145" cy="100" rx="8" ry="14" fill="url(#bodyGradient)" />
        <ellipse cx="255" cy="100" rx="8" ry="14" fill="url(#bodyGradient)" />
      </g>
    </svg>
  );
}
