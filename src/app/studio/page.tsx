'use client';

import { ModelProvider } from '@/contexts/ModelContext';
import ModelViewer from '@/components/customizer/ModelViewer';
import PartSelector from '@/components/customizer/PartSelector';
import Link from 'next/link';

export default function StudioPage() {
  return (
    <ModelProvider>
      <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">STUDIO</h1>
                <p className="text-sm text-neutral-400">Create Your Perfect Look</p>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="/"
                  className="px-4 py-2 text-sm text-white hover:text-neutral-300 transition-colors"
                >
                  ← Back Home
                </Link>
                <Link
                  href="/customizer"
                  className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors"
                >
                  Simple Mode
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-20 pb-8 min-h-screen">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
              {/* Left: Model Display */}
              <div className="lg:col-span-2">
                <div className="sticky top-24">
                  <div className="bg-gradient-to-b from-neutral-800/50 to-neutral-900/50 rounded-3xl p-8 border border-white/10 shadow-2xl">
                    <div className="aspect-[4/5] md:aspect-[3/4] mb-6">
                      <ModelViewer />
                    </div>
                    
                    {/* Info Bar */}
                    <div className="flex items-center justify-between bg-black/30 rounded-2xl p-4 border border-white/10">
                      <div>
                        <p className="text-neutral-400 text-sm mb-1">Total Outfit Value</p>
                        <p className="text-3xl font-bold text-white" id="outfit-price">$0</p>
                      </div>
                      <div className="flex gap-3">
                        <button className="px-6 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors">
                          Save Look
                        </button>
                        <button className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-neutral-200 transition-colors">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Product Selector */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-neutral-900/50 rounded-3xl p-6 border border-white/10">
                    <h2 className="text-xl font-bold text-white mb-2">Wardrobe</h2>
                    <p className="text-neutral-400 text-sm mb-6">Drag items onto the model</p>
                    <PartSelector />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer hint */}
        <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 text-neutral-500 text-sm">
          💡 Tip: Drag products from the wardrobe onto the model to try them on
        </footer>
      </div>
    </ModelProvider>
  );
}
