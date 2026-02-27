'use client';

import { useModel } from '@/contexts/ModelContext';
import { getPartsByCategory, categories } from '@/data/modelParts';
import DraggablePart from './DraggablePart';

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
                ? 'bg-neutral-900 text-white shadow-lg scale-105'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            <span className="text-xl">{category.icon}</span>
            <span className="hidden sm:inline">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Parts Grid - Draggable */}
      <div className={`grid gap-4 ${compact ? 'grid-cols-4 sm:grid-cols-6' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'} mb-6`}>
        {parts.map((part) => {
          const isSelected = part.id === selectedPartId;
          return (
            <div
              key={part.id}
              className={`relative p-3 rounded-2xl border-2 transition-all duration-200 ${
                isSelected
                  ? 'border-neutral-900 bg-neutral-50 shadow-lg'
                  : 'border-neutral-200 bg-white hover:border-neutral-400'
              }`}
            >
              {/* Selected indicator */}
              {isSelected && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-neutral-900 text-white rounded-full flex items-center justify-center z-10">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}

              {/* Draggable Part */}
              <div className="flex justify-center mb-3">
                <DraggablePart part={part} size={compact ? 'sm' : 'md'} />
              </div>

              {/* Part info */}
              <h3 className={`font-medium ${compact ? 'text-xs' : 'text-sm'} text-left mb-1 truncate`}>{part.name}</h3>
              
              {/* Price */}
              <div className="flex items-center justify-between">
                <span className={`font-bold ${compact ? 'text-xs' : 'text-sm'} ${part.price === 0 ? 'text-neutral-400' : 'text-neutral-900'}`}>
                  {part.price === 0 ? 'Free' : `$${part.price}`}
                </span>
              </div>

              {/* Color swatches - only show when selected */}
              {isSelected && part.colors.length > 0 && (
                <div className="flex gap-1 mt-2 pt-2 border-t border-neutral-100">
                  {part.colors.map((color) => (
                    <button
                      key={color}
                      onClick={(e) => {
                        e.stopPropagation();
                        selectColor(selectedCategory, color);
                      }}
                      className={`w-4 h-4 rounded-full border-2 transition-transform hover:scale-125 ${
                        getSelectedColor(selectedCategory) === color ? 'border-neutral-900 scale-125' : 'border-neutral-200'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
