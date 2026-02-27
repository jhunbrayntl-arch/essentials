'use client';

import Image from 'next/image';

interface StyleSuggestionsProps {
  onSelectItem: (itemId: string) => void;
}

const styleSuggestions = [
  {
    id: 'casual',
    name: 'Casual Cool',
    description: 'Relaxed and effortless',
    image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e194?w=300&h=400&fit=crop',
    items: ['Essential Tee', 'Slim Jeans', 'White Sneakers'],
  },
  {
    id: 'smart',
    name: 'Smart Casual',
    description: 'Polished yet comfortable',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=400&fit=crop',
    items: ['Linen Shirt', 'Slim Chino', 'Leather Boots'],
  },
  {
    id: 'street',
    name: 'Street Style',
    description: 'Urban and trendy',
    image: 'https://images.unsplash.com/photo-1550246140-5119980d748a?w=300&h=400&fit=crop',
    items: ['Hoodie', 'Cargo Pants', 'High-Tops'],
  },
  {
    id: 'layered',
    name: 'Layered Look',
    description: 'Depth and dimension',
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=300&h=400&fit=crop',
    items: ['Tee', 'Denim Jacket', 'Chino'],
  },
];

export default function StyleSuggestions({ onSelectItem }: StyleSuggestionsProps) {
  return (
    <div className="bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 rounded-2xl p-6 border border-neutral-700">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">AI Style Suggestions</h3>
          <p className="text-neutral-400 text-sm">Personalized for your body type</p>
        </div>
      </div>

      {/* Style Cards */}
      <div className="grid grid-cols-2 gap-3">
        {styleSuggestions.map((style) => (
          <button
            key={style.id}
            onClick={() => onSelectItem(style.id)}
            className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-900 hover:ring-2 hover:ring-purple-500 transition-all"
          >
            <Image
              src={style.image}
              alt={style.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h4 className="text-white font-semibold text-sm mb-1">{style.name}</h4>
              <p className="text-neutral-400 text-xs">{style.description}</p>
            </div>
            <div className="absolute top-2 right-2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Outfit Items */}
      <div className="mt-4 pt-4 border-t border-neutral-700">
        <p className="text-neutral-400 text-sm mb-3">Recommended Items</p>
        <div className="flex flex-wrap gap-2">
          {['Essential Tee', 'Denim Jacket', 'Slim Jeans', 'White Sneakers'].map((item) => (
            <button
              key={item}
              onClick={() => onSelectItem(item)}
              className="px-3 py-1.5 bg-neutral-900 hover:bg-purple-500/20 border border-neutral-700 hover:border-purple-500 rounded-full text-xs text-white transition-colors"
            >
              + {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
