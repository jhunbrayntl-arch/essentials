'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { ModelPart, PartCategory, defaultOutfit, outfitPresets, getPartById } from '@/data/modelParts';

interface Outfit {
  head: string;
  body: string;
  legs: string;
  shoes: string;
  accessories: string;
}

interface ColorSelections {
  head: string;
  body: string;
  legs: string;
  shoes: string;
  accessories: string;
}

interface ModelContextType {
  outfit: Outfit;
  colors: ColorSelections;
  selectedCategory: PartCategory;
  totalPrice: number;
  setSelectedCategory: (category: PartCategory) => void;
  selectPart: (category: PartCategory, partId: string) => void;
  selectColor: (category: PartCategory, color: string) => void;
  resetOutfit: () => void;
  randomizeOutfit: () => void;
  loadPreset: (presetIndex: number) => void;
  getSelectedPart: (category: PartCategory) => ModelPart | undefined;
  getSelectedColor: (category: PartCategory) => string;
}

const ModelContext = createContext<ModelContextType | undefined>(undefined);

export function ModelProvider({ children }: { children: ReactNode }) {
  const [outfit, setOutfit] = useState<Outfit>(defaultOutfit);
  const [colors, setColors] = useState<ColorSelections>({
    head: getPartById(defaultOutfit.head)?.defaultColor || '#1a1a1a',
    body: getPartById(defaultOutfit.body)?.defaultColor || '#ffffff',
    legs: getPartById(defaultOutfit.legs)?.defaultColor || '#f5f5dc',
    shoes: getPartById(defaultOutfit.shoes)?.defaultColor || '#ffffff',
    accessories: getPartById(defaultOutfit.accessories)?.defaultColor || '#4a3728',
  });
  const [selectedCategory, setSelectedCategory] = useState<PartCategory>('body');

  // Calculate total price
  const totalPrice = Object.values(outfit).reduce((total, partId) => {
    const part = getPartById(partId);
    return total + (part?.price || 0);
  }, 0);

  const selectPart = useCallback((category: PartCategory, partId: string) => {
    const part = getPartById(partId);
    setOutfit(prev => ({ ...prev, [category]: partId }));
    if (part && part.colors.length > 0) {
      setColors(prev => ({ ...prev, [category]: part.defaultColor }));
    }
  }, []);

  const selectColor = useCallback((category: PartCategory, color: string) => {
    setColors(prev => ({ ...prev, [category]: color }));
  }, []);

  const resetOutfit = useCallback(() => {
    setOutfit(defaultOutfit);
    setColors({
      head: getPartById(defaultOutfit.head)?.defaultColor || '#1a1a1a',
      body: getPartById(defaultOutfit.body)?.defaultColor || '#ffffff',
      legs: getPartById(defaultOutfit.legs)?.defaultColor || '#f5f5dc',
      shoes: getPartById(defaultOutfit.shoes)?.defaultColor || '#ffffff',
      accessories: getPartById(defaultOutfit.accessories)?.defaultColor || '#4a3728',
    });
  }, []);

  const randomizeOutfit = useCallback(() => {
    const categories: PartCategory[] = ['head', 'body', 'legs', 'shoes', 'accessories'];
    const newOutfit: Outfit = { head: '', body: '', legs: '', shoes: '', accessories: '' };
    const newColors: ColorSelections = { head: '', body: '', legs: '', shoes: '', accessories: '' };

    categories.forEach(category => {
      const parts = getPartById('head-1')?.category ? 
        Object.values(require('@/data/modelParts')).filter((p: any) => p?.category === category) : 
        [];
      // Simple randomization - in production, use proper import
      const categoryParts = [
        { id: 'head-1', defaultColor: '#1a1a1a' },
        { id: 'head-2', defaultColor: '#1a1a1a' },
        { id: 'head-3', defaultColor: '#f5f5dc' },
        { id: 'head-4', defaultColor: '#f5d0b0' },
      ].filter(p => {
        if (category === 'head') return p.id.startsWith('head-');
        return false;
      });
      
      // Fallback to default for now
      newOutfit[category] = outfit[category];
      newColors[category] = colors[category];
    });

    setOutfit(newOutfit);
    setColors(newColors);
  }, [outfit, colors]);

  const loadPreset = useCallback((presetIndex: number) => {
    const preset = outfitPresets[presetIndex];
    if (preset) {
      setOutfit(preset.outfit);
      // Set colors to defaults for each selected part
      const newColors: ColorSelections = {
        head: getPartById(preset.outfit.head)?.defaultColor || '#1a1a1a',
        body: getPartById(preset.outfit.body)?.defaultColor || '#ffffff',
        legs: getPartById(preset.outfit.legs)?.defaultColor || '#f5f5dc',
        shoes: getPartById(preset.outfit.shoes)?.defaultColor || '#ffffff',
        accessories: getPartById(preset.outfit.accessories)?.defaultColor || '#4a3728',
      };
      setColors(newColors);
    }
  }, []);

  const getSelectedPart = useCallback((category: PartCategory): ModelPart | undefined => {
    return getPartById(outfit[category]);
  }, [outfit]);

  const getSelectedColor = useCallback((category: PartCategory): string => {
    return colors[category];
  }, [colors]);

  return (
    <ModelContext.Provider
      value={{
        outfit,
        colors,
        selectedCategory,
        totalPrice,
        setSelectedCategory,
        selectPart,
        selectColor,
        resetOutfit,
        randomizeOutfit,
        loadPreset,
        getSelectedPart,
        getSelectedColor,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
}

export function useModel() {
  const context = useContext(ModelContext);
  if (context === undefined) {
    throw new Error('useModel must be used within a ModelProvider');
  }
  return context;
}
