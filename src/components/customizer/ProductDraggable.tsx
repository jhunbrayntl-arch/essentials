'use client';

import { ModelPart } from '@/data/modelParts';
import Image from 'next/image';

interface ProductDraggableProps {
  part: ModelPart;
  onDragStart?: (e: React.DragEvent, part: ModelPart) => void;
  size?: 'sm' | 'md' | 'lg';
}

export default function ProductDraggable({ part, onDragStart, size = 'md' }: ProductDraggableProps) {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('partId', part.id);
    e.dataTransfer.setData('category', part.category);
    e.dataTransfer.effectAllowed = 'copy';
    
    onDragStart?.(e, part);
  };

  const sizeClasses = {
    sm: 'w-16 h-20',
    md: 'w-20 h-28',
    lg: 'w-24 h-32',
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className={`${sizeClasses[size]} relative bg-white rounded-xl shadow-lg hover:shadow-2xl border-2 border-neutral-200 hover:border-neutral-400 cursor-grab active:cursor-grabbing overflow-hidden transition-all duration-200 hover:scale-105 group`}
      title={`${part.name} - $${part.price}`}
    >
      {/* Product Image */}
      <div className="absolute inset-0">
        <Image
          src={part.image}
          alt={part.name}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
      
      {/* Price badge */}
      <div className="absolute bottom-2 left-2 right-2 bg-black/80 text-white text-xs font-bold px-2 py-1.5 rounded-lg backdrop-blur-sm">
        ${part.price}
      </div>
      
      {/* Drag handle indicator */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-white/90 text-neutral-600 text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity font-medium">
        Drag
      </div>
    </div>
  );
}
