'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const allProducts = [
  {
    id: 1,
    name: 'Essential Tee',
    price: 45,
    category: 'tops',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
    description: 'Premium cotton tee with a relaxed fit.',
  },
  {
    id: 2,
    name: 'Classic Hoodie',
    price: 89,
    category: 'outerwear',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=800&fit=crop',
    description: 'Heavyweight fleece hoodie for everyday wear.',
  },
  {
    id: 3,
    name: 'Slim Chino',
    price: 78,
    category: 'bottoms',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop',
    description: 'Versatile chino pants with a modern slim fit.',
  },
  {
    id: 4,
    name: 'Everyday Cap',
    price: 35,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop',
    description: 'Classic six-panel cap with adjustable strap.',
  },
  {
    id: 5,
    name: 'Oversized Sweatshirt',
    price: 95,
    category: 'tops',
    image: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?w=600&h=800&fit=crop',
    description: 'Relaxed fit sweatshirt in premium cotton blend.',
  },
  {
    id: 6,
    name: 'Cargo Pants',
    price: 98,
    category: 'bottoms',
    image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600&h=800&fit=crop',
    description: 'Utility cargo pants with multiple pockets.',
  },
  {
    id: 7,
    name: 'Bomber Jacket',
    price: 145,
    category: 'outerwear',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
    description: 'Lightweight bomber jacket for transitional weather.',
  },
  {
    id: 8,
    name: 'Canvas Tote',
    price: 42,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=800&fit=crop',
    description: 'Durable canvas tote for everyday essentials.',
  },
];

const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'tops', label: 'Tops' },
  { value: 'bottoms', label: 'Bottoms' },
  { value: 'outerwear', label: 'Outerwear' },
  { value: 'accessories', label: 'Accessories' },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <main>
      {/* Header */}
      <section className="bg-neutral-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Explore our collection of timeless essentials designed for everyday wear.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 text-sm uppercase tracking-wider transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-black text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-[3/4] bg-neutral-100 mb-4 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <button className="absolute bottom-4 left-4 right-4 bg-white text-black py-3 text-sm uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-100">
                    Add to Cart
                  </button>
                </div>
                <h3 className="font-medium text-lg">{product.name}</h3>
                <p className="text-neutral-600">${product.price}</p>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-neutral-600">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
