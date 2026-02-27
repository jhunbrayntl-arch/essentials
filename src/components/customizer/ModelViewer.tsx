'use client';

import { useModel } from '@/contexts/ModelContext';
import { getPartById, categories } from '@/data/modelParts';
import { useState } from 'react';

interface DropZoneProps {
  category: string;
  isOver: boolean;
  onDragOver: (e: React.DragEvent<Element>) => void;
  onDragLeave: () => void;
  onDrop: (e: React.DragEvent<Element>) => void;
  children: React.ReactNode;
  currentPart: any;
  label: string;
}

function DropZone({ category, isOver, onDragOver, onDragLeave, onDrop, children, currentPart, label }: DropZoneProps) {
  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`absolute transition-all duration-200 ${
        isOver 
          ? 'ring-4 ring-green-500 ring-offset-2 scale-110 z-50' 
          : 'hover:ring-2 hover:ring-neutral-400 hover:ring-offset-1'
      }`}
    >
      {children}
      {isOver && (
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-green-500 text-white text-xs px-2 py-1 rounded font-medium animate-bounce">
          Drop to equip {label}
        </div>
      )}
    </div>
  );
}

export default function ModelViewer({ compact = false }: { compact?: boolean }) {
  const { getSelectedPart, getSelectedColor, selectPart } = useModel();
  const [dragOverCategory, setDragOverCategory] = useState<string | null>(null);

  const headPart = getSelectedPart('head');
  const bodyPart = getSelectedPart('body');
  const legsPart = getSelectedPart('legs');
  const shoesPart = getSelectedPart('shoes');
  const accPart = getSelectedPart('accessories');

  const headColor = getSelectedColor('head');
  const bodyColor = getSelectedColor('body');
  const legsColor = getSelectedColor('legs');
  const shoesColor = getSelectedColor('shoes');
  const accColor = getSelectedColor('accessories');

  const handleDragOver = (e: React.DragEvent<Element>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setDragOverCategory('head');
  };

  const handleDragOverBody = (e: React.DragEvent<Element>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setDragOverCategory('body');
  };

  const handleDragOverLegs = (e: React.DragEvent<Element>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setDragOverCategory('legs');
  };

  const handleDragOverShoes = (e: React.DragEvent<Element>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setDragOverCategory('shoes');
  };

  const handleDragOverAcc = (e: React.DragEvent<Element>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setDragOverCategory('accessories');
  };

  const handleDragLeave = () => {
    setDragOverCategory(null);
  };

  const handleDrop = (e: React.DragEvent<Element>) => {
    e.preventDefault();
    setDragOverCategory(null);
    
    const partId = e.dataTransfer.getData('partId');
    const partCategory = e.dataTransfer.getData('category');
    
    if (partCategory === dragOverCategory && partId) {
      selectPart(dragOverCategory as any, partId);
    }
  };

  const modelScale = compact ? 'scale-75' : 'scale-100';

  return (
    <div className={`relative w-full h-full flex items-center justify-center bg-gradient-to-b from-neutral-100 to-neutral-200 rounded-2xl overflow-hidden ${modelScale} origin-center`}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-neutral-900 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-neutral-900 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-neutral-900 rotate-45" />
      </div>

      {/* Drop zone hints */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs text-neutral-400 bg-white/80 px-3 py-1 rounded-full">
        👆 Drag items onto the model
      </div>

      {/* Model Container */}
      <div className="relative z-10 w-64 h-96 md:w-80 md:h-[500px]">
        {/* Head Drop Zone */}
        <DropZone
          category="head"
          isOver={dragOverCategory === 'head'}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          currentPart={headPart}
          label="Head"
        >
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-24 md:w-24 md:h-28 rounded-2xl flex items-center justify-center text-4xl md:text-5xl transition-all duration-300"
            style={{ backgroundColor: headColor + '40', borderColor: headColor, borderWidth: '2px' }}
          >
            <span className="drop-shadow-lg">{headPart?.image}</span>
          </div>
        </DropZone>

        {/* Body Drop Zone */}
        <DropZone
          category="body"
          isOver={dragOverCategory === 'body'}
          onDragOver={handleDragOverBody}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          currentPart={bodyPart}
          label="Body"
        >
          <div 
            className="absolute top-24 left-1/2 -translate-x-1/2 w-32 h-40 md:w-40 md:h-48 rounded-3xl flex items-center justify-center text-5xl md:text-6xl transition-all duration-300 shadow-lg"
            style={{ backgroundColor: bodyColor + '60', borderColor: bodyColor, borderWidth: '3px' }}
          >
            <span className="drop-shadow-lg">{bodyPart?.image}</span>
          </div>
        </DropZone>

        {/* Legs Drop Zone */}
        <DropZone
          category="legs"
          isOver={dragOverCategory === 'legs'}
          onDragOver={handleDragOverLegs}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          currentPart={legsPart}
          label="Legs"
        >
          <div 
            className="absolute top-60 left-1/2 -translate-x-1/2 w-28 h-36 md:w-32 md:h-40 rounded-b-3xl flex items-center justify-center text-4xl md:text-5xl transition-all duration-300 shadow-lg"
            style={{ backgroundColor: legsColor + '60', borderColor: legsColor, borderWidth: '3px' }}
          >
            <span className="drop-shadow-lg">{legsPart?.image}</span>
          </div>
        </DropZone>

        {/* Shoes Drop Zone */}
        <DropZone
          category="shoes"
          isOver={dragOverCategory === 'shoes'}
          onDragOver={handleDragOverShoes}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          currentPart={shoesPart}
          label="Shoes"
        >
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-16 md:w-28 md:h-20 rounded-xl flex items-center justify-center text-3xl md:text-4xl transition-all duration-300 shadow-lg"
            style={{ backgroundColor: shoesColor + '60', borderColor: shoesColor, borderWidth: '2px' }}
          >
            <span className="drop-shadow-lg">{shoesPart?.image}</span>
          </div>
        </DropZone>

        {/* Accessories Drop Zone */}
        <DropZone
          category="accessories"
          isOver={dragOverCategory === 'accessories'}
          onDragOver={handleDragOverAcc}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          currentPart={accPart}
          label="Accessory"
        >
          {accPart && accPart.id !== 'acc-5' ? (
            <div 
              className="absolute top-32 right-8 md:right-12 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-2xl md:text-3xl transition-all duration-300 shadow-lg animate-bounce"
              style={{ backgroundColor: accColor + '40', borderColor: accColor, borderWidth: '2px', animationDuration: '3s' }}
            >
              <span className="drop-shadow-lg">{accPart?.image}</span>
            </div>
          ) : (
            <div className="absolute top-32 right-8 md:right-12 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-2 border-dashed border-neutral-300 text-neutral-400 text-xs text-center">
              Drop<br/>here
            </div>
          )}
        </DropZone>
      </div>

      {/* Current Outfit Labels */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-2 text-xs md:text-sm">
        {categories.map((cat) => {
          const part = getSelectedPart(cat.id);
          return (
            <span key={cat.id} className="px-2 py-1 bg-white/80 rounded flex items-center gap-1">
              <span>{cat.icon}</span>
              <span className="truncate max-w-[100px]">{part?.name || 'Empty'}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
