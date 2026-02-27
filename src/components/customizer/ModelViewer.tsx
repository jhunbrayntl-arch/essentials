'use client';

import { useModel } from '@/contexts/ModelContext';

export default function ModelViewer() {
  const { getSelectedPart, getSelectedColor } = useModel();

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

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-neutral-100 to-neutral-200 rounded-2xl overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-neutral-900 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-neutral-900 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-neutral-900 rotate-45" />
      </div>

      {/* Model Container */}
      <div className="relative z-10 w-64 h-96 md:w-80 md:h-[500px]">
        {/* Head */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-24 md:w-24 md:h-28 rounded-2xl flex items-center justify-center text-4xl md:text-5xl transition-all duration-300"
          style={{ backgroundColor: headColor + '40', borderColor: headColor, borderWidth: '2px' }}
        >
          <span className="drop-shadow-lg">{headPart?.image}</span>
        </div>

        {/* Body */}
        <div 
          className="absolute top-24 left-1/2 -translate-x-1/2 w-32 h-40 md:w-40 md:h-48 rounded-3xl flex items-center justify-center text-5xl md:text-6xl transition-all duration-300 shadow-lg"
          style={{ backgroundColor: bodyColor + '60', borderColor: bodyColor, borderWidth: '3px' }}
        >
          <span className="drop-shadow-lg">{bodyPart?.image}</span>
        </div>

        {/* Legs */}
        <div 
          className="absolute top-60 left-1/2 -translate-x-1/2 w-28 h-36 md:w-32 md:h-40 rounded-b-3xl flex items-center justify-center text-4xl md:text-5xl transition-all duration-300 shadow-lg"
          style={{ backgroundColor: legsColor + '60', borderColor: legsColor, borderWidth: '3px' }}
        >
          <span className="drop-shadow-lg">{legsPart?.image}</span>
        </div>

        {/* Shoes */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-16 md:w-28 md:h-20 rounded-xl flex items-center justify-center text-3xl md:text-4xl transition-all duration-300 shadow-lg"
          style={{ backgroundColor: shoesColor + '60', borderColor: shoesColor, borderWidth: '2px' }}
        >
          <span className="drop-shadow-lg">{shoesPart?.image}</span>
        </div>

        {/* Accessories */}
        {accPart && accPart.id !== 'acc-5' && (
          <div 
            className="absolute top-32 right-8 md:right-12 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-2xl md:text-3xl transition-all duration-300 shadow-lg animate-bounce"
            style={{ backgroundColor: accColor + '40', borderColor: accColor, borderWidth: '2px', animationDuration: '3s' }}
          >
            <span className="drop-shadow-lg">{accPart?.image}</span>
          </div>
        )}
      </div>

      {/* Part Labels */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 md:gap-4 text-xs md:text-sm text-neutral-500">
        <span className="px-2 py-1 bg-white/80 rounded">Head: {headPart?.name}</span>
        <span className="px-2 py-1 bg-white/80 rounded">Body: {bodyPart?.name}</span>
      </div>

      {/* Rotation hint */}
      <div className="absolute top-4 right-4 text-neutral-400 text-xs md:text-sm">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Live Preview</span>
        </div>
      </div>
    </div>
  );
}
