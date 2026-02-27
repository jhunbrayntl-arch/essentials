'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { allProducts } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'tops', label: 'Tops' },
  { value: 'bottoms', label: 'Bottoms' },
  { value: 'outerwear', label: 'Outerwear' },
  { value: 'accessories', label: 'Accessories' },
];

export default function ProductsPage() {
  const { addToCart } = useCart();
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
            {filteredProducts.map((product) => {
              const discount = product.originalPrice
                ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                : 0;
              const currentStock = product.stock[product.sizes[0]] || 0;
              const isLowStock = currentStock > 0 && currentStock <= 5;

              return (
                <div key={product.id} className="group">
                  <div className="relative aspect-[3/4] bg-neutral-100 mb-4 rounded-lg overflow-hidden">
                    <Link href={`/products/${product.id}`}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </Link>
                    {product.isNew && (
                      <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-medium">
                        NEW
                      </span>
                    )}
                    {product.isSale && (
                      <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs font-medium">
                        -{discount}%
                      </span>
                    )}
                    {isLowStock && (
                      <span className="absolute bottom-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs font-medium">
                        Low Stock
                      </span>
                    )}
                    <button
                      onClick={() => addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        size: product.sizes[0],
                      })}
                      className="absolute bottom-4 left-4 right-4 bg-white text-black py-3 text-sm uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-100 rounded shadow-lg"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-medium text-lg hover:text-neutral-600 transition-colors">{product.name}</h3>
                  </Link>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-600">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-neutral-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
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
