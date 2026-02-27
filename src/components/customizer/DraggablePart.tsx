'use client';

import { ModelPart } from '@/data/modelParts';

interface DraggablePartProps {
  part: ModelPart;
  onDragStart?: (e: React.DragEvent, part: ModelPart) => void;
  size?: 'sm' | 'md' | 'lg';
}

export default function DraggablePart({ part, onDragStart, size = 'md' }: DraggablePartProps) {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('partId', part.id);
    e.dataTransfer.setData('category', part.category);
    e.dataTransfer.effectAllowed = 'copy';
    
    // Custom drag image
    const dragImage = document.createElement('div');
    dragImage.className = 'fixed -top-full left-0 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-3xl border-2 border-neutral-900';
    dragImage.textContent = part.image;
    document.body.appendChild(dragImage);
    e.dataTransfer.setDragImage(dragImage, 32, 32);
    
    setTimeout(() => {
      document.body.removeChild(dragImage);
    }, 0);
    
    onDragStart?.(e, part);
  };

  const sizeClasses = {
    sm: 'w-12 h-12 text-2xl',
    md: 'w-16 h-16 text-3xl',
    lg: 'w-20 h-20 text-4xl',
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className={`${sizeClasses[size]} bg-white rounded-2xl shadow-md hover:shadow-xl border-2 border-neutral-200 hover:border-neutral-400 cursor-grab active:cursor-grabbing flex items-center justify-center transition-all duration-200 hover:scale-110`}
      title={`${part.name} - $${part.price}`}
    >
      <span className="select-none">{part.image}</span>
    </div>
  );
}
