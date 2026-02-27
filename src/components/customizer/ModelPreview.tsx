'use client';

import { useModel } from '@/contexts/ModelContext';
import { getPartById } from '@/data/modelParts';
import ModelViewer from './ModelViewer';
import CustomizationMenu from './CustomizationMenu';
import { useCart } from '@/contexts/CartContext';

export default function ModelPreview() {
  const { outfit, totalPrice, getSelectedPart, getSelectedColor } = useModel();
  const { addToCart } = useCart();

  const handleAddOutfitToCart = () => {
    Object.entries(outfit).forEach(([category, partId]) => {
      const part = getPartById(partId);
      if (part && part.price > 0) {
        addToCart({
          id: part.id,
          name: part.name,
          price: part.price,
          image: part.image,
          size: 'One Size',
        });
      }
    });
  };

  const handleAddIndividualToCart = (category: string) => {
    const partId = outfit[category as keyof typeof outfit];
    const part = getPartById(partId);
    if (part && part.price > 0) {
      addToCart({
        id: part.id,
        name: part.name,
        price: part.price,
        image: part.image,
        size: 'One Size',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-neutral-900 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold">Outfit Customizer</h1>
          <p className="text-neutral-400 mt-1">Mix and match to create your perfect look</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Model Viewer - Left Side */}
          <div className="order-1">
            <div className="sticky top-24">
              <ModelViewer />
              
              {/* Add to Cart Bar */}
              <div className="mt-6 bg-neutral-50 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-neutral-500">Total Outfit Price</p>
                    <p className="text-3xl font-bold">${totalPrice}</p>
                  </div>
                  <button
                    onClick={handleAddOutfitToCart}
                    disabled={totalPrice === 0}
                    className="px-8 py-4 bg-neutral-900 text-white rounded-xl font-bold text-lg hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Add Full Outfit to Cart
                  </button>
                </div>
                
                {/* Individual Add Buttons */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200">
                  {Object.keys(outfit).map((category) => {
                    const part = getSelectedPart(category as any);
                    if (!part || part.price === 0) return null;
                    return (
                      <button
                        key={category}
                        onClick={() => handleAddIndividualToCart(category)}
                        className="px-3 py-1.5 bg-white border border-neutral-200 rounded-lg text-xs font-medium hover:border-neutral-400 transition-colors"
                      >
                        + Add {part.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Customization Menu - Right Side */}
          <div className="order-2">
            <CustomizationMenu />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-neutral-50 py-12 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-neutral-900 text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                1️
              </div>
              <h3 className="font-semibold mb-2">Select Category</h3>
              <p className="text-neutral-600 text-sm">Choose from head, body, legs, shoes, and accessories</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-neutral-900 text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                2️
              </div>
              <h3 className="font-semibold mb-2">Pick Your Style</h3>
              <p className="text-neutral-600 text-sm">Browse available parts and click to try them on</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-neutral-900 text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                3️
              </div>
              <h3 className="font-semibold mb-2">Customize Colors</h3>
              <p className="text-neutral-600 text-sm">Select your preferred color for each item</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-neutral-900 text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                4️
              </div>
              <h3 className="font-semibold mb-2">Add to Cart</h3>
              <p className="text-neutral-600 text-sm">Purchase individual items or the complete outfit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
