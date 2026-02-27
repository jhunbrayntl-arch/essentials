'use client';

import Image from 'next/image';
import Link from 'next/link';
import { allProducts } from '@/data/products';

const featuredProducts = allProducts.slice(0, 4);

const shopCategories = [
  { name: 'Tops', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop' },
  { name: 'Bottoms', image: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&h=600&fit=crop' },
  { name: 'Outerwear', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=600&fit=crop' },
];

export default function Home() {
  return (
    <main>
      {/* Urgency Banner */}
      <div className="bg-red-600 text-white text-center py-2 px-4">
        <p className="text-sm font-medium">
          🔥 FLASH SALE: Up to 30% OFF | Use code <span className="font-bold bg-white text-red-600 px-2 py-0.5 rounded">FLASH20</span> for extra 20% OFF | Ends in 6 hours!
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Realistic Human Model */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1920&h=1080&fit=crop"
            alt="Essentials Collection - Male Model"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tighter">
              ESSENTIALS
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-xl leading-relaxed">
              Minimalist clothing for everyday life. Quality pieces that never go out of style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary inline-block text-center">
                Shop Now
              </Link>
              <Link href="/studio" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-colors inline-block text-center">
                Try Virtual Studio
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-white/20">
              <div>
                <p className="text-3xl font-bold text-white mb-1">16+</p>
                <p className="text-neutral-400 text-sm">Products</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">30%</p>
                <p className="text-neutral-400 text-sm">Off Sale</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">Free</p>
                <p className="text-neutral-400 text-sm">Shipping $150+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our most loved pieces that form the foundation of any wardrobe.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => {
              const discount = product.originalPrice
                ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                : 0;
              const currentStock = product.stock[product.sizes[0]] || 0;
              const isLowStock = currentStock > 0 && currentStock <= 5;

              return (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group"
                >
                  <div className="relative aspect-[3/4] bg-neutral-100 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    {product.isSale && (
                      <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs font-medium">
                        -{discount}%
                      </span>
                    )}
                    {isLowStock && (
                      <span className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs font-medium">
                        Low Stock
                      </span>
                    )}
                  </div>
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-600">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-neutral-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Find exactly what you need from our curated collections.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shopCategories.map((category) => (
              <Link
                key={category.name}
                href={`/products?category=${category.name.toLowerCase()}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold uppercase tracking-wider">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square bg-neutral-100 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=800&fit=crop"
                alt="About Essentials"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Less is More</h2>
              <p className="text-neutral-600 leading-relaxed">
                Essentials was born from a simple idea: everyone deserves access to high-quality,
                timeless clothing. We focus on creating pieces that work together seamlessly,
                reducing the need for excess while maximizing versatility.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Our commitment to sustainable practices and ethical manufacturing means you can
                feel good about what you wear. Each piece is designed to last, both in quality
                and style.
              </p>
              <Link href="/about" className="btn-primary inline-block">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Community</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Subscribe to receive exclusive offers, early access to new drops, and style inspiration.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-neutral-500 rounded"
            />
            <button type="submit" className="btn-primary bg-white text-black hover:bg-neutral-200">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
