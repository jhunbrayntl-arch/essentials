'use client';

import { ModelPart } from '@/data/modelParts';

interface DraggablePartProps {
  part: ModelPart;
  onDragStart?: (e: React.DragEvent, part: ModelPart) => void;
  size?: 'sm' | 'md' | 'lg';
}

// Clothing icons as SVG components
function ClothingIcon({ category, color }: { category: string; color: string }) {
  switch (category) {
    case 'head':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <path d="M12 4a4 4 0 0 1 4 4v2h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h1V8a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2h4V8a2 2 0 0 0-2-2z" />
        </svg>
      );
    case 'body':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <path d="M12 2c2 0 4 1 5 3l3 1v4l-2 1v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9L4 10V6l3-1c1-2 3-3 5-3zm0 2c-1 0-2 .5-2.5 1.5L9 6h6l-.5-.5C14 4.5 13 4 12 4z" />
        </svg>
      );
    case 'legs':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <path d="M8 2h8v4l-1 14H9L8 6V2zm2 2v16h4V4h-4z" />
        </svg>
      );
    case 'shoes':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <path d="M4 14c0-2 2-4 6-4h8c2 0 4 2 4 4v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4zm2 0v4h14v-4c0-1-1-2-2-2h-8c-2 0-4 1-4 2z" />
        </svg>
      );
    case 'accessories':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
          <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="2" fill="none" />
          <path d="M12 4v8l6 3" stroke={color} strokeWidth="2" fill="none" />
        </svg>
      );
    default:
      return null;
  }
}

export default function DraggablePart({ part, onDragStart, size = 'md' }: DraggablePartProps) {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('partId', part.id);
    e.dataTransfer.setData('category', part.category);
    e.dataTransfer.effectAllowed = 'copy';
    
    onDragStart?.(e, part);
  };

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className={`${sizeClasses[size]} bg-white rounded-xl shadow-md hover:shadow-xl border-2 border-neutral-200 hover:border-neutral-400 cursor-grab active:cursor-grabbing flex items-center justify-center transition-all duration-200 hover:scale-110 p-2`}
      title={`${part.name} - $${part.price}`}
    >
      <ClothingIcon category={part.category} color={part.defaultColor} />
    </div>
  );
}
