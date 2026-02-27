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
    description: 'The perfect white tee does exist. Crafted from 100% organic cotton with a relaxed fit that hits just right. The fabric gets softer with every wash. Ribbed crewneck that will not stretch out.',
    story: 'We spent 18 months perfecting this tee. Our founder lived in 47 different white tees before settling on this exact blend. The inspiration? A vintage 1960s tee found in a Tokyo archive. We replicated that broken-in comfort while keeping the structure modern.',
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
    description: '480 GSM heavyweight French terry cotton that feels like a warm hug. Double-lined hood with metal eyelets. Kangaroo pocket sized for your phone, keys, and that snack you are not sharing.',
    story: 'Born from a 3am studio session. Our designer fell asleep at the drafting table and woke up cold. The office hoodie was too thin, too loud. So we made our own. Inspired by vintage athletic wear from the 80s. The Classic Hoodie has been our bestseller for three years.',
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
    description: 'The chinos that convinced our intern to stop wearing sweatpants. Japanese twill cotton with 2% elastane. Slim through the thigh, tapered at the ankle. Machine washable and wrinkle-resistant.',
    story: 'We interviewed 200 guys about their pant problems. The answers were universal. The Slim Chino was our answer. Patterned after a pair of 1950s Ivy League pants found in a Connecticut estate sale. These pants have been to job interviews, first dates, and funerals.',
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
    description: 'Six-panel construction with a low-profile crown. Pre-curved brim for instant shade. Adjustable leather strap that actually stays put. Breathable cotton twill.',
    story: 'Our designer found a vintage New Era cap at a Brooklyn flea market and refused to take it off. The problem? It was falling apart. So we dissected it. Stitch by stitch, we figured out why it felt so perfect. We have sold over 10,000 of these.',
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
    description: 'Dropped shoulders, extended sleeves, and a body that says you are comfortable. Heavy cotton fleece with a brushed interior. Ribbed side panels for shape retention.',
    story: 'The Oversized Sweatshirt was born from a mistake. Our pattern maker misread the measurements. Instead of scrapping it, our designer tried it on and refused to take it off. We intentionally engineered that perfect oversized fit.',
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
    description: 'Military-spec ripstop cotton. Four cargo pockets with hidden zippers. Articulated knees for mobility. Gusseted crotch because comfort should not be compromised.',
    story: 'We wanted pants that could survive a zombie apocalypse but look good at brunch. The Cargo Pants are inspired by 1990s military surplus. Our pattern maker spent two weeks studying original issue pants. These are the pants you grab when you need to be ready for anything.',
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
    description: 'Water-resistant nylon shell meets cozy quilted lining. Ribbed collar, cuffs, and hem. Two side pockets plus an interior pocket. Lightweight enough for spring, warm enough for fall.',
    story: 'The Bomber Jacket is a tribute to the original MA-1 flight jacket worn by Air Force pilots in the 1950s. We found a deadstock vintage piece on eBay. Six months of development later, we have a jacket that honors the original while fitting into modern life.',
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
    description: '18oz cotton canvas that gets better with age. Reinforced handles. Interior zip pocket for keys. Water-resistant lining. This tote carries groceries, gym clothes, laptops, and more.',
    story: 'The Canvas Tote started as a joke. Our team kept stealing each other grocery bags. So we made one tote to rule them all. We tested it with 50 pounds of books and a week worth of groceries. The 18oz canvas is the same weight as firefighter gear.',
    sizes: ['One Size'],
    stock: { 'One Size': 100 },
    rating: 4.7,
    reviews: 234,
  },
  {
    id: 9,
    name: 'Denim Jacket',
    price: 128,
    originalPrice: 155,
    category: 'outerwear',
    image: 'https://images.unsplash.com/photo-1576995853123-5a297da4030e?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a297da4030e?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=600&h=800&fit=crop',
    ],
    description: 'Japanese selvedge denim that ages like a fine wine. Classic trucker jacket silhouette. Five-pocket design with copper rivets. Unlined for breathability.',
    story: 'We traveled to Okayama, Japan to find the perfect mill. The Denim Jacket is made from 14oz selvedge denim woven on vintage shuttle looms from the 1950s. Each jacket is cut and sewn by artisans who have been doing this for decades. This is forever fashion.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: { S: 8, M: 3, L: 12, XL: 15, XXL: 6 },
    rating: 4.9,
    reviews: 312,
    isSale: true,
  },
  {
    id: 10,
    name: 'Linen Shirt',
    price: 68,
    category: 'tops',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1589465885857-44edb59ef526?w=600&h=800&fit=crop',
    ],
    description: '100% European linen that breathes when it is hot. Relaxed fit with a spread collar. Mother-of-pearl buttons. Wrinkles? That is called character.',
    story: 'The Linen Shirt was designed for people who hate feeling restricted. Our founder spent a summer in Italy and fell in love with how locals dress. We sourced the finest Belgian linen and worked with a Portuguese factory that has been making linen shirts since 1952.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: { XS: 20, S: 15, M: 8, L: 25, XL: 18, XXL: 10 },
    rating: 4.6,
    reviews: 145,
    isNew: true,
  },
  {
    id: 11,
    name: 'Jogger Sweatpants',
    price: 72,
    category: 'bottoms',
    image: 'https://images.unsplash.com/photo-1552975084-6e027cd345c7?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1552975084-6e027cd345c7?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=600&h=800&fit=crop',
    ],
    description: 'French terry cotton with a tapered leg and elastic cuffs. Side pockets deep enough for your phone. Drawstring waist that stays tied.',
    story: 'We set out to make joggers you could wear in public without judgment. The Jogger Sweatpants are the result of 23 prototypes over 8 months. We tested them at coffee shops, airports, and one very important client meeting. They passed with flying colors.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: { XS: 12, S: 5, M: 2, L: 20, XL: 25, XXL: 15 },
    rating: 4.7,
    reviews: 198,
    isSale: true,
  },
  {
    id: 12,
    name: 'Leather Belt',
    price: 55,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop',
    ],
    description: 'Full-grain Italian leather that develops a rich patina. Solid brass buckle that will not tarnish. Single-piece construction. 1.5 inch width works with everything.',
    story: 'We visited a small tannery outside Florence that has been in the same family for four generations. The Leather Belt is made from vegetable-tanned hides using methods unchanged since the 1800s. Each belt is cut from a single piece of leather and hand-finished.',
    sizes: ['30', '32', '34', '36', '38', '40'],
    stock: { '30': 25, '32': 30, '34': 20, '36': 18, '38': 12, '40': 8 },
    rating: 4.8,
    reviews: 267,
  },
  {
    id: 13,
    name: 'White Sneakers',
    price: 115,
    originalPrice: 140,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=800&fit=crop',
    ],
    description: 'Minimalist leather low-tops that go with everything. Removable OrthoLite insole. Rubber cupsole that provides grip. Anti-odor lining.',
    story: 'Finding the perfect white sneaker is rare and worth the wait. We sampled 34 factories across Portugal, Vietnam, and Italy before finding the one. The White Sneakers are made from buttery-soft calfskin. We have worn these to weddings, job interviews, and everything in between.',
    sizes: ['7', '8', '9', '10', '11', '12'],
    stock: { '7': 8, '8': 3, '9': 1, '10': 15, '11': 20, '12': 12 },
    rating: 4.7,
    reviews: 423,
    isSale: true,
  },
  {
    id: 14,
    name: 'Wool Overcoat',
    price: 295,
    originalPrice: 380,
    category: 'outerwear',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
    ],
    description: 'Italian wool blend that drapes like a dream. Notch lapel with button closure. Two front pockets plus interior chest pocket. Fully lined with satin.',
    story: 'The Wool Overcoat was inspired by a 1960s peacoat our creative director found in a London vintage shop. The fabric is sourced from a mill in Biella, Italy. Each coat takes 6 hours to construct and 47 individual steps. You will wear it for decades.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: { S: 5, M: 2, L: 8, XL: 6, XXL: 3 },
    rating: 4.9,
    reviews: 87,
    isNew: true,
    isSale: true,
  },
  {
    id: 15,
    name: 'Henley Longsleeve',
    price: 52,
    category: 'tops',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop',
    ],
    description: 'Slub cotton jersey with a three-button placket. Ribbed collar that holds its shape. Relaxed fit that works layered or on its own.',
    story: 'The Henley is the most underrated piece in any wardrobe. It is not quite a tee, not quite a polo. Ours is made from slub cotton that adds texture without bulk. The Henley Longsleeve is the MVP of layering season.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: { XS: 18, S: 22, M: 15, L: 30, XL: 25, XXL: 12 },
    rating: 4.6,
    reviews: 156,
  },
  {
    id: 16,
    name: 'Slim Jeans',
    price: 88,
    category: 'bottoms',
    image: 'https://images.unsplash.com/photo-1542272617-08f08630329e?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542272617-08f08630329e?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1582552966377-9817e586a1d4?w=600&h=800&fit=crop',
    ],
    description: 'Japanese denim with 1% elastane for comfort. Classic five-pocket design. Slim through the thigh, slight taper at the ankle. Dark indigo wash.',
    story: 'We wanted jeans that looked like raw denim but felt like sweatpants. The Slim Jeans are made from 13.5oz Japanese denim with a touch of stretch. No crazy fading, no distressing, no gimmicks. We have tested these for 6 months straight.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    stock: { '28': 15, '30': 8, '32': 3, '34': 20, '36': 25, '38': 10 },
    rating: 4.8,
    reviews: 345,
    isSale: true,
  },
];

export const promoCodes = {
  'FLASH20': { discount: 0.20, minPurchase: 0, description: '20% OFF - Flash Sale!', expiresAt: new Date(Date.now() + 6 * 60 * 60 * 1000) },
  'LASTCHANCE': { discount: 0.30, minPurchase: 100, description: '30% OFF orders $100+', expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000) },
  'NEWDROP': { discount: 0.15, minPurchase: 0, description: '15% OFF New Arrivals', expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) },
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
