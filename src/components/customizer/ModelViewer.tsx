'use client';

import { useModel } from '@/contexts/ModelContext';
import { getPartById, categories } from '@/data/modelParts';
import { useState } from 'react';
import HumanHead from './svg/HumanHead';
import HumanBody from './svg/HumanBody';
import HumanLegs from './svg/HumanLegs';
import HumanShoes from './svg/HumanShoes';

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

function DropZone({ category, isOver, onDragOver, onDragLeave, onDrop, children, label }: DropZoneProps) {
  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`absolute transition-all duration-200 cursor-pointer ${
        isOver 
          ? 'ring-4 ring-green-500 ring-offset-2 scale-105 z-50 rounded-lg' 
          : 'hover:ring-2 hover:ring-neutral-400 hover:ring-offset-1'
      }`}
    >
      {children}
      {isOver && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-green-500 text-white text-xs px-3 py-1.5 rounded-full font-medium animate-bounce shadow-lg">
          ✨ Drop to equip {label}
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

  const headColor = getSelectedColor('head');
  const bodyColor = getSelectedColor('body');
  const legsColor = getSelectedColor('legs');
  const shoesColor = getSelectedColor('shoes');

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
    <div className={`relative w-full h-full flex items-center justify-center bg-gradient-to-b from-sky-100 via-neutral-100 to-neutral-200 rounded-3xl overflow-hidden shadow-inner ${modelScale} origin-center`}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-neutral-900 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-neutral-900 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-neutral-900 rotate-45" />
      </div>

      {/* Title */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-sm font-semibold text-neutral-500 bg-white/80 px-4 py-2 rounded-full shadow-sm">
        👆 Drag items onto the model
      </div>

      {/* Model Container */}
      <div className="relative z-10 w-48 h-80 md:w-64 md:h-[450px]">
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-28 md:w-28 md:h-32">
            <HumanHead color={headColor} partId={headPart?.id || 'head-4'} />
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
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-32 h-40 md:w-40 md:h-48">
            <HumanBody color={bodyColor} partId={bodyPart?.id || 'body-1'} />
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
          <div className="absolute top-60 left-1/2 -translate-x-1/2 w-28 h-36 md:w-32 md:h-40">
            <HumanLegs color={legsColor} partId={legsPart?.id || 'legs-1'} />
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
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-16 md:w-32 md:h-20">
            <HumanShoes color={shoesColor} partId={shoesPart?.id || 'shoes-1'} />
          </div>
        </DropZone>
      </div>

      {/* Current Outfit Labels */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-2 text-xs">
        {categories.map((cat) => {
          const part = getSelectedPart(cat.id);
          return (
            <span key={cat.id} className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm flex items-center gap-1.5 border border-neutral-200">
              <span>{cat.icon}</span>
              <span className="truncate max-w-[80px] font-medium">{part?.name || 'Empty'}</span>
            </span>
          );
        })}
      </div>

      {/* Price tag */}
      <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
        ${Object.entries({ head: headPart, body: bodyPart, legs: legsPart, shoes: shoesPart })
          .reduce((sum, [_, p]) => sum + (p?.price || 0), 0)}
      </div>
    </div>
  );
}
