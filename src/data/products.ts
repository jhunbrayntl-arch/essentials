export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  images?: string[];
  description: string;
  story: string;
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
    description: 'The perfect white tee doesn\'t exi— oh wait, it does. Crafted from 100% organic cotton with a relaxed fit that hits just right. Not too boxy, not too slim. The fabric gets softer with every wash while maintaining its shape. Ribbed crewneck that won\'t stretch out. This is the tee you\'ll reach for every single day.',
    story: 'We spent 18 months perfecting this tee. Our founder lived in 47 different white tees before settling on this exact blend. The inspiration? A vintage 1960s tee found in a Tokyo archive that had the perfect worn-in feel from day one. We replicated that broken-in comfort while keeping the structure modern. This isn\'t just a basic tee—it\'s THE basic tee.',
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
    description: '480 GSM heavyweight French terry cotton that feels like a warm hug. Double-lined hood with metal eyelets. Kangaroo pocket sized for your phone, keys, and that snack you\'re not sharing. The fleece interior is brushed to perfection—soft without the pilling. This hoodie will outlive your relationships.',
    story: 'Born from a 3am studio session that turned into a week-long bender. Our designer fell asleep at the drafting table and woke up cold. The office hoodie was too thin, too loud, too... much. So we made our own. Inspired by vintage athletic wear from the 80s and the need for something that could handle late nights and early mornings. The Classic Hoodie has been our bestseller for three years running. Once you go heavy, you never go back.',
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
    description: 'The chinos that convinced our intern to stop wearing sweatpants. Japanese twill cotton with 2% elastane for stretch that doesn\'t scream "stretch fabric." Slim through the thigh, tapered at the ankle. Four-pocket design with hidden coin pocket. Machine washable and wrinkle-resistant because adulting is hard enough.',
    story: 'We interviewed 200 guys about their pant problems. The answers were universal: "Jeans are too heavy for summer, dress pants are too fancy, and I refuse to wear joggers to dinner." The Slim Chino was our answer. Patterned after a pair of 1950s Ivy League pants found in a Connecticut estate sale. We modernized the fit but kept the soul. These pants have been to job interviews, first dates, and funerals. They\'re ready for whatever your life throws at them.',
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
    description: 'Six-panel construction with a low-profile crown that doesn\'t make you look like a trucker (unless that\'s your thing, no judgment). Pre-curved brip for instant shade. Adjustable leather strap that actually stays put. Breathable cotton twill that won\'t make your head sweat like a sinner in church.',
    story: 'Our designer found a vintage New Era cap at a Brooklyn flea market and refused to take it off for three weeks straight. The problem? It was falling apart. So we dissected it—literally. Stitch by stitch, we figured out why it felt so perfect. The Everyday Cap is that hat, reborn. We\'ve sold over 10,000 of these. Your head deserves this level of comfort.',
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
    description: 'Dropped shoulders, extended sleeves, and a body that says "I\'m comfortable" without saying anything at all. Heavy cotton fleece with a brushed interior that feels like clouds. Ribbed side panels for shape retention. This is what you wear when you want to look put-together while feeling like you\'re in pajamas.',
    story: 'The Oversized Sweatshirt was born from a mistake. Our pattern maker misread the measurements and created something two sizes too big. Instead of scrapping it, our designer tried it on and refused to take it off for a week. "This is it," she said. "This is the one." We went back to the drawing board and intentionally engineered that perfect oversized fit. It\'s not sloppy big—it\'s intentional big. There\'s a difference, and you\'ll feel it immediately.',
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
    description: 'Military-spec ripstop cotton that can handle anything from construction sites to concert pits. Four cargo pockets with hidden zippers. Articulated knees for mobility. Gusseted crotch because comfort shouldn\'t be compromised. These pants have been tested by skateboarders, mechanics, and one very adventurous accountant.',
    story: 'We wanted pants that could survive a zombie apocalypse but look good at brunch. The Cargo Pants are inspired by 1990s military surplus with a modern tailored fit. Our pattern maker spent two weeks at a military surplus store studying original issue pants. The result? Pockets that actually fit your phone. Pockets that fit your wallet. Pockets that fit the kitchen sink (okay, not really). These are the pants you grab when you need to be ready for anything.',
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
    description: 'Water-resistant nylon shell meets cozy quilted lining. Ribbed collar, cuffs, and hem that keep the cold out. Two side pockets plus an interior pocket for your secrets. The bomber that works with everything from hoodies to button-ups. Lightweight enough for spring, warm enough for fall.',
    story: 'The Bomber Jacket is a tribute to the original MA-1 flight jacket worn by Air Force pilots in the 1950s. We found a deadstock vintage piece on eBay and were obsessed with the patina, the fit, the attitude. But we wanted something lighter, more versatile for everyday wear. Six months of development later, we have a jacket that honors the original while fitting into modern life. It\'s been worn on motorcycles, in boardrooms, and on first dates. The Bomber doesn\'t judge—it just makes you look good.',
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
    description: '18oz cotton canvas that gets better with age. Reinforced handles that won\'t rip when you overload it (we won\'t tell). Interior zip pocket for keys and that pen you keep losing. Water-resistant lining because spills happen. This tote carries groceries, gym clothes, laptops, and the occasional cat (not recommended but we\'ve seen it).',
    story: 'The Canvas Tote started as a joke. Our team kept stealing each other\'s grocery bags. So we made one tote to rule them all. We tested it with 50 pounds of books, a week\'s worth of groceries, and one very confused intern\'s entire life. It passed with flying colors. The 18oz canvas is the same weight as firefighter gear—overkill for a tote bag, exactly what we wanted. This bag will outlast your phone, your shoes, and probably this relationship.',
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
