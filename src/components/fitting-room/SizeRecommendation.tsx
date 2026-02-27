'use client';

interface SizeRecommendationProps {
  bodyType?: string;
  measurements?: {
    chest: string;
    waist: string;
    hips: string;
  };
  recommendedSize: string;
  confidence: number;
}

export default function SizeRecommendation({
  bodyType = 'Athletic',
  measurements,
  recommendedSize = 'M',
  confidence = 92,
}: SizeRecommendationProps) {
  return (
    <div className="bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 rounded-2xl p-6 border border-neutral-700">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">AI Size Recommendation</h3>
          <p className="text-neutral-400 text-sm">Based on your body analysis</p>
        </div>
      </div>

      {/* Recommended Size Badge */}
      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-neutral-400 text-sm mb-1">Recommended Size</p>
            <p className="text-4xl font-bold text-green-400">{recommendedSize}</p>
          </div>
          <div className="text-right">
            <p className="text-neutral-400 text-sm mb-1">Confidence</p>
            <p className="text-2xl font-bold text-green-400">{confidence}%</p>
          </div>
        </div>
      </div>

      {/* Body Type */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-neutral-900/50 rounded-xl p-3">
          <p className="text-neutral-500 text-xs mb-1">Body Type</p>
          <p className="text-white font-semibold">{bodyType}</p>
        </div>
        <div className="bg-neutral-900/50 rounded-xl p-3">
          <p className="text-neutral-500 text-xs mb-1">Fit Preference</p>
          <p className="text-white font-semibold">Regular</p>
        </div>
      </div>

      {/* Measurements */}
      {measurements && (
        <div className="space-y-2">
          <p className="text-neutral-500 text-xs">Estimated Measurements</p>
          <div className="flex gap-2">
            <div className="flex-1 bg-neutral-900/50 rounded-lg p-2 text-center">
              <p className="text-neutral-400 text-xs">Chest</p>
              <p className="text-white font-medium">{measurements.chest}</p>
            </div>
            <div className="flex-1 bg-neutral-900/50 rounded-lg p-2 text-center">
              <p className="text-neutral-400 text-xs">Waist</p>
              <p className="text-white font-medium">{measurements.waist}</p>
            </div>
            <div className="flex-1 bg-neutral-900/50 rounded-lg p-2 text-center">
              <p className="text-neutral-400 text-xs">Hips</p>
              <p className="text-white font-medium">{measurements.hips}</p>
            </div>
          </div>
        </div>
      )}

      {/* Size Guide Link */}
      <div className="mt-4 pt-4 border-t border-neutral-700">
        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
          View detailed size guide →
        </button>
      </div>
    </div>
  );
}
