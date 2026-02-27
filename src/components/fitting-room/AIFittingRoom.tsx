'use client';

import { useState } from 'react';
import PhotoUploader from './PhotoUploader';
import ComparisonSlider from './ComparisonSlider';
import SizeRecommendation from './SizeRecommendation';
import StyleSuggestions from './StyleSuggestions';
import Image from 'next/image';

export default function AIFittingRoom() {
  const [userPhoto, setUserPhoto] = useState<string>('');
  const [selectedOutfit, setSelectedOutfit] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'upload' | 'tryon' | 'recommendations'>('upload');

  // Sample outfit images for virtual try-on
  const outfitImages: Record<string, string> = {
    casual: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e194?w=600&h=800&fit=crop',
    smart: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop',
    street: 'https://images.unsplash.com/photo-1550246140-5119980d748a?w=600&h=800&fit=crop',
    layered: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&h=800&fit=crop',
  };

  const handleStyleSelect = (styleId: string) => {
    setSelectedOutfit(styleId);
    setActiveTab('tryon');
  };

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        <button
          onClick={() => setActiveTab('upload')}
          className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
            activeTab === 'upload'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
              : 'bg-neutral-800 text-neutral-400 hover:text-white'
          }`}
        >
          📸 Upload Photo
        </button>
        <button
          onClick={() => setActiveTab('tryon')}
          disabled={!userPhoto}
          className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
            activeTab === 'tryon'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
              : 'bg-neutral-800 text-neutral-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'
          }`}
        >
          🪞 Virtual Try-On
        </button>
        <button
          onClick={() => setActiveTab('recommendations')}
          disabled={!userPhoto}
          className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
            activeTab === 'recommendations'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
              : 'bg-neutral-800 text-neutral-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'
          }`}
        >
          ✨ AI Recommendations
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Main Display */}
        <div>
          {activeTab === 'upload' && (
            <div className="text-center py-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Welcome to AI Fitting Room
              </h2>
              <p className="text-neutral-400 mb-8 max-w-md mx-auto">
                Upload your photo and let our AI recommend the perfect styles and sizes for your body type.
              </p>
              <PhotoUploader onPhotoUpload={setUserPhoto} />
            </div>
          )}

          {activeTab === 'tryon' && userPhoto && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Virtual Try-On</h2>
              {selectedOutfit && outfitImages[selectedOutfit] ? (
                <ComparisonSlider
                  beforeImage={userPhoto}
                  afterImage={outfitImages[selectedOutfit]}
                />
              ) : (
                <div className="aspect-[3/4] bg-neutral-800 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-neutral-700 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-neutral-400 mb-4">Select a style from recommendations to try on</p>
                    <button
                      onClick={() => setActiveTab('recommendations')}
                      className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold"
                    >
                      Browse Styles
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'recommendations' && userPhoto && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Your Personalized Recommendations</h2>
              <StyleSuggestions onSelectItem={handleStyleSelect} />
            </div>
          )}
        </div>

        {/* Right Column - Info Panels */}
        {userPhoto && (
          <div className="space-y-6">
            <SizeRecommendation
              bodyType="Athletic"
              measurements={{ chest: '40"', waist: '32"', hips: '38"' }}
              recommendedSize="M"
              confidence={94}
            />

            {/* AI Analysis Summary */}
            <div className="bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 rounded-2xl p-6 border border-neutral-700">
              <h3 className="text-lg font-bold text-white mb-4">AI Analysis Summary</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Body Shape</span>
                  <span className="text-white font-medium">Inverted Triangle</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Shoulder Width</span>
                  <span className="text-white font-medium">Broad</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Height Estimate</span>
                  <span className="text-white font-medium">5&apos;11&quot; - 6&apos;1&quot;</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Best Fit Styles</span>
                  <span className="text-purple-400 font-medium">Slim, Tailored</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-3">
              <button className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
                Save This Look
              </button>
              <button className="flex-1 px-6 py-4 bg-neutral-800 text-white rounded-xl font-bold hover:bg-neutral-700 transition-colors">
                Share
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
