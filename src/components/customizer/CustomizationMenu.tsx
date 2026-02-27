'use client';

import { useModel } from '@/contexts/ModelContext';
import { outfitPresets } from '@/data/modelParts';
import PartSelector from './PartSelector';

export default function CustomizationMenu() {
  const { totalPrice, resetOutfit, randomizeOutfit, loadPreset, outfit, getSelectedPart } = useModel();

  return (
    <div className="w-full">
      {/* Preset Outfits */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
          Quick Outfits
        </h3>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {outfitPresets.map((preset, index) => (
            <button
              key={preset.name}
              onClick={() => loadPreset(index)}
              className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-xl text-sm font-medium whitespace-nowrap transition-colors"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Part Selector */}
      <PartSelector />

      {/* Action Buttons */}
      <div className="flex gap-3 mt-6 pt-6 border-t border-neutral-200">
        <button
          onClick={resetOutfit}
          className="flex-1 px-4 py-3 border-2 border-neutral-200 rounded-xl font-medium hover:border-neutral-400 hover:bg-neutral-50 transition-colors"
        >
          Reset
        </button>
        <button
          onClick={randomizeOutfit}
          className="flex-1 px-4 py-3 bg-neutral-900 text-white rounded-xl font-medium hover:bg-neutral-800 transition-colors"
        >
          Randomize
        </button>
      </div>

      {/* Current Selection Summary */}
      <div className="mt-6 p-4 bg-neutral-50 rounded-xl">
        <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
          Your Outfit
        </h3>
        <div className="space-y-2 text-sm">
          {Object.entries(outfit).map(([category, partId]) => {
            const part = getSelectedPart(category as any);
            return (
              <div key={category} className="flex justify-between">
                <span className="text-neutral-500 capitalize">{category}</span>
                <span className="font-medium">{part?.name || 'None'}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-4 pt-4 border-t border-neutral-200 flex justify-between items-center">
          <span className="font-semibold text-neutral-500">Total</span>
          <span className="text-2xl font-bold">${totalPrice}</span>
        </div>
      </div>
    </div>
  );
}
