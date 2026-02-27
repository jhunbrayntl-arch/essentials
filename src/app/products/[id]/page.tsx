'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { allProducts, getRelatedProducts } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  const productId = parseInt(params.id as string);
  const product = allProducts.find(p => p.id === productId);
  const relatedProducts = getRelatedProducts(productId, 4);

  // Countdown timer for urgency (6 hours from now)
  useEffect(() => {
    const endTime = Date.now() + 6 * 60 * 60 * 1000; // 6 hours

    const timer = setInterval(() => {
      const now = Date.now();
      const difference = endTime - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const currentStock = product.stock[selectedSize || product.sizes[0]] || 0;
  const isLowStock = currentStock > 0 && currentStock <= 5;
  const isOutOfStock = currentStock === 0;

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSelectedSize(product.sizes[0]);
    } else {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize,
      }, quantity);
    }
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <main>
      {/* Urgency Banner */}
      <div className="bg-red-600 text-white text-center py-3 px-4">
        <p className="text-sm font-medium">
          🔥 FLASH SALE ENDS IN{' '}
          <span className="font-bold">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          {' '}| Use code <span className="font-bold bg-white text-red-600 px-2 py-0.5 rounded">FLASH20</span> for extra 20% OFF!
        </p>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-8 py-6">
        <nav className="text-sm text-neutral-500">
          <Link href="/" className="hover:text-neutral-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-neutral-900 capitalize">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-900">{product.name}</span>
        </nav>
      </div>

      {/* Product Details */}
      <section className="container mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] bg-neutral-100 rounded-lg overflow-hidden">
              <Image
                src={product.images?.[selectedImage] || product.image}
                alt={product.name}
                fill
                className="object-cover"
                unoptimized
                priority
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-sm font-medium">
                  NEW
                </span>
              )}
              {product.isSale && (
                <span className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-sm font-medium">
                  -{discount}%
                </span>
              )}
            </div>
            {product.images && product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-24 h-32 flex-shrink-0 bg-neutral-100 rounded overflow-hidden border-2 transition-colors ${
                      selectedImage === idx ? 'border-black' : 'border-transparent'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.isNew && (
                <span className="bg-neutral-900 text-white px-3 py-1 text-xs font-medium uppercase tracking-wider">
                  New Arrival
                </span>
              )}
              {product.isSale && (
                <span className="bg-red-600 text-white px-3 py-1 text-xs font-medium uppercase tracking-wider">
                  Sale
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-neutral-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-neutral-600 text-sm">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-neutral-400 line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                      Save ${product.originalPrice - product.price}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Stock Warning */}
            {isLowStock && !isOutOfStock && (
              <div className="bg-orange-50 border border-orange-200 text-orange-700 px-4 py-3 rounded mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Only {currentStock} left in stock!</span>
              </div>
            )}

            {isOutOfStock && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                <span className="font-medium">Out of Stock</span>
              </div>
            )}

            {/* Description */}
            <div className="mb-8">
              <p className="text-neutral-900 mb-4 leading-relaxed font-medium">{product.description}</p>
            </div>

            {/* Product Story */}
            <div className="mb-8 p-6 bg-neutral-50 rounded-lg border border-neutral-100">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="font-bold text-sm uppercase tracking-wider">The Story</h3>
              </div>
              <p className="text-neutral-600 leading-relaxed italic">{product.story}</p>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="font-medium">Size</label>
                <button className="text-sm text-neutral-500 underline hover:text-neutral-900">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => {
                  const stock = product.stock[size];
                  const disabled = stock === 0;
                  return (
                    <button
                      key={size}
                      onClick={() => !disabled && setSelectedSize(size)}
                      disabled={disabled}
                      className={`w-14 h-14 flex items-center justify-center border rounded text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : disabled
                          ? 'border-neutral-200 text-neutral-300 cursor-not-allowed'
                          : 'border-neutral-200 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
              {!selectedSize && (
                <p className="text-red-500 text-sm mt-2">Please select a size</p>
              )}
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="font-medium mb-3 block">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-neutral-200 rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-16 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(currentStock || 10, quantity + 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                    disabled={currentStock > 0 && quantity >= currentStock}
                  >
                    +
                  </button>
                </div>
                {currentStock > 0 && quantity >= currentStock && (
                  <span className="text-orange-600 text-sm">Max stock reached</span>
                )}
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={isOutOfStock}
              className="w-full btn-primary py-4 text-lg mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isOutOfStock ? 'Out of Stock' : `Add to Cart - $${(product.price * quantity).toFixed(2)}`}
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-neutral-100">
              <div className="text-center">
                <svg className="w-8 h-8 mx-auto mb-2 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <p className="text-xs text-neutral-500">Free Shipping</p>
              </div>
              <div className="text-center">
                <svg className="w-8 h-8 mx-auto mb-2 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <p className="text-xs text-neutral-500">30-Day Returns</p>
              </div>
              <div className="text-center">
                <svg className="w-8 h-8 mx-auto mb-2 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-xs text-neutral-500">Secure Checkout</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-neutral-50 py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group"
                >
                  <div className="relative aspect-[3/4] bg-neutral-100 mb-4 rounded overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    {product.isSale && (
                      <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs font-medium">
                        Sale
                      </span>
                    )}
                  </div>
                  <h3 className="font-medium">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-600">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-neutral-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
