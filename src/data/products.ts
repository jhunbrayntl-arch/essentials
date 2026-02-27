export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  images?: string[];
  description: string;
  sizes: string[];
  stock: Record<string, number>;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
}

export const allProducts: Product[] = [
  {
    id: 1,
    name: 'Essential Tee',
    price: 45,
    originalPrice: 55,
    category: 'tops',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop',
    ],
    description: 'Premium cotton tee with a relaxed fit. Made from 100% organic cotton for ultimate comfort and breathability. A true essential for any wardrobe.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: { XS: 15, S: 8, M: 3, L: 25, XL: 12, XXL: 20 },
    rating: 4.8,
    reviews: 124,
    isSale: true,
  },
  {
    id: 2,
    name: 'Classic Hoodie',
    price: 89,
    category: 'outerwear',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600&h=800&fit=crop',
    ],
    description: 'Heavyweight fleece hoodie for everyday wear. Features a kangaroo pocket and adjustable drawstring hood.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: { S: 5, M: 2, L: 18, XL: 30, XXL: 15 },
    rating: 4.9,
    reviews: 256,
    isSale: true,
  },
  {
    id: 3,
    name: 'Slim Chino',
    price: 78,
    category: 'bottoms',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=600&h=800&fit=crop',
    ],
    description: 'Versatile chino pants with a modern slim fit. Perfect for both casual and semi-formal occasions.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    stock: { '28': 10, '30': 4, '32': 1, '34': 22, '36': 18, '38': 8 },
    rating: 4.7,
    reviews: 89,
    isSale: true,
  },
  {
    id: 4,
    name: 'Everyday Cap',
    price: 35,
    originalPrice: 42,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&h=800&fit=crop',
    ],
    description: 'Classic six-panel cap with adjustable strap. One size fits all.',
    sizes: ['One Size'],
    stock: { 'One Size': 50 },
    rating: 4.6,
    reviews: 67,
    isSale: true,
  },
  {
    id: 5,
    name: 'Oversized Sweatshirt',
    price: 95,
    category: 'tops',
    image: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&h=800&fit=crop',
    ],
    description: 'Relaxed fit sweatshirt in premium cotton blend. Dropped shoulders for that perfect oversized look.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 3, S: 1, M: 8, L: 15, XL: 20 },
    rating: 4.9,
    reviews: 178,
    isNew: true,
    isSale: true,
  },
  {
    id: 6,
    name: 'Cargo Pants',
    price: 98,
    category: 'bottoms',
    image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae6b?w=600&h=800&fit=crop',
    ],
    description: 'Utility cargo pants with multiple pockets. Durable ripstop fabric for everyday wear.',
    sizes: ['28', '30', '32', '34', '36'],
    stock: { '28': 12, '30': 6, '32': 2, '34': 10, '36': 5 },
    rating: 4.5,
    reviews: 92,
    isSale: true,
  },
  {
    id: 7,
    name: 'Bomber Jacket',
    price: 145,
    originalPrice: 180,
    category: 'outerwear',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=600&h=800&fit=crop',
    ],
    description: 'Lightweight bomber jacket for transitional weather. Water-resistant outer shell with cozy lining.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: { S: 2, M: 1, L: 5, XL: 8, XXL: 3 },
    rating: 4.8,
    reviews: 45,
    isNew: true,
    isSale: true,
  },
  {
    id: 8,
    name: 'Canvas Tote',
    price: 42,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1566150905458-1bf1dad1db56?w=600&h=800&fit=crop',
    ],
    description: 'Durable canvas tote for everyday essentials. Spacious main compartment with interior pocket.',
    sizes: ['One Size'],
    stock: { 'One Size': 100 },
    rating: 4.7,
    reviews: 234,
  },
];

export const promoCodes = {
  'FLASH20': { discount: 0.20, minPurchase: 0, description: '20% OFF - Flash Sale!', expiresAt: new Date(Date.now() + 6 * 60 * 60 * 1000) }, // 6 hours
  'LASTCHANCE': { discount: 0.30, minPurchase: 100, description: '30% OFF orders $100+', expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000) }, // 2 hours
  'NEWDROP': { discount: 0.15, minPurchase: 0, description: '15% OFF New Arrivals', expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) }, // 24 hours
};

export function getProductById(id: number): Product | undefined {
  return allProducts.find(product => product.id === id);
}

export function getRelatedProducts(productId: number, limit: number = 4): Product[] {
  const product = getProductById(productId);
  if (!product) return [];
  
  return allProducts
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
}
