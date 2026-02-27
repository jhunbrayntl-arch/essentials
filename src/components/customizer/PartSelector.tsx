'use client';

import { useModel } from '@/contexts/ModelContext';
import { getPartsByCategory, categories } from '@/data/modelParts';
import ProductDraggable from './ProductDraggable';

export default function PartSelector({ compact = false }: { compact?: boolean }) {
  const { selectedCategory, setSelectedCategory, outfit, selectPart, getSelectedColor, selectColor } = useModel();

  const parts = getPartsByCategory(selectedCategory);
  const selectedPartId = outfit[selectedCategory];

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className={`flex gap-2 ${compact ? 'mb-4' : 'mb-6'} overflow-x-auto pb-2`}>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
              selectedCategory === category.id
                ? 'bg-white text-black shadow-lg scale-105'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <span className="text-xl">{category.icon}</span>
            <span className="hidden sm:inline">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Parts Grid - Draggable with real images */}
      <div className={`grid gap-4 ${compact ? 'grid-cols-3 sm:grid-cols-4' : 'grid-cols-2 sm:grid-cols-3'} mb-6`}>
        {parts.map((part) => {
          const isSelected = part.id === selectedPartId;
          return (
            <div
              key={part.id}
              className={`relative p-3 rounded-2xl transition-all duration-200 ${
                isSelected
                  ? 'bg-white/20 ring-2 ring-white shadow-lg'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              {/* Selected indicator */}
              {isSelected && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center z-10 shadow-lg">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}

              {/* Draggable Part with real image */}
              <div className="flex justify-center mb-3">
                <ProductDraggable part={part} size={compact ? 'sm' : 'md'} />
              </div>

              {/* Part info */}
              <h3 className={`font-medium ${compact ? 'text-xs' : 'text-sm'} text-white text-center mb-1`}>{part.name}</h3>
              
              {/* Price */}
              <p className={`font-bold ${compact ? 'text-xs' : 'text-sm'} text-center ${part.price === 0 ? 'text-neutral-400' : 'text-green-400'}`}>
                {part.price === 0 ? 'Free' : `$${part.price}`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
