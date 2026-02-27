export type PartCategory = 'head' | 'body' | 'legs' | 'shoes' | 'accessories';

export interface ModelPart {
  id: string;
  name: string;
  category: PartCategory;
  price: number;
  colors: string[];
  defaultColor: string;
  image: string;
  description: string;
}

export const modelParts: ModelPart[] = [
  // HEAD OPTIONS
  {
    id: 'head-1',
    name: 'Classic Cap',
    category: 'head',
    price: 35,
    colors: ['#1a1a1a', '#ffffff', '#c41e3a', '#1e3a8a', '#059669'],
    defaultColor: '#1a1a1a',
    image: '🧢',
    description: 'Everyday cap with adjustable strap',
  },
  {
    id: 'head-2',
    name: 'Beanie',
    category: 'head',
    price: 28,
    colors: ['#1a1a1a', '#ffffff', '#7c3aed', '#dc2626', '#0891b2'],
    defaultColor: '#1a1a1a',
    image: '🧶',
    description: 'Cozy knit beanie for cold days',
  },
  {
    id: 'head-3',
    name: 'Bucket Hat',
    category: 'head',
    price: 38,
    colors: ['#f5f5dc', '#1a1a1a', '#059669', '#ea580c'],
    defaultColor: '#f5f5dc',
    image: '👒',
    description: 'Trendy bucket hat with brim',
  },
  {
    id: 'head-4',
    name: 'No Hat',
    category: 'head',
    price: 0,
    colors: ['#f5d0b0'],
    defaultColor: '#f5d0b0',
    image: '👤',
    description: 'Natural look',
  },

  // BODY OPTIONS
  {
    id: 'body-1',
    name: 'Essential Tee',
    category: 'body',
    price: 45,
    colors: ['#ffffff', '#1a1a1a', '#7c3aed', '#dc2626', '#059669', '#1e40af'],
    defaultColor: '#ffffff',
    image: '👕',
    description: 'Premium cotton tee with relaxed fit',
  },
  {
    id: 'body-2',
    name: 'Classic Hoodie',
    category: 'body',
    price: 89,
    colors: ['#1a1a1a', '#6b7280', '#7c3aed', '#059669', '#991b1b'],
    defaultColor: '#1a1a1a',
    image: '🧥',
    description: 'Heavyweight fleece hoodie',
  },
  {
    id: 'body-3',
    name: 'Denim Jacket',
    category: 'body',
    price: 128,
    colors: ['#1e3a5f', '#3b5998', '#6b8db8'],
    defaultColor: '#1e3a5f',
    image: '🧥',
    description: 'Japanese selvedge denim jacket',
  },
  {
    id: 'body-4',
    name: 'Linen Shirt',
    category: 'body',
    price: 68,
    colors: ['#ffffff', '#f5f5dc', '#87ceeb', '#98fb98'],
    defaultColor: '#ffffff',
    image: '👔',
    description: '100% European linen shirt',
  },
  {
    id: 'body-5',
    name: 'Bomber Jacket',
    category: 'body',
    price: 145,
    colors: ['#1a1a1a', '#2d5016', '#4a3728', '#1e3a5f'],
    defaultColor: '#1a1a1a',
    image: '🧢',
    description: 'Water-resistant nylon bomber',
  },

  // LEGS OPTIONS
  {
    id: 'legs-1',
    name: 'Slim Chino',
    category: 'legs',
    price: 78,
    colors: ['#1a1a1a', '#f5f5dc', '#374151', '#059669', '#1e40af'],
    defaultColor: '#f5f5dc',
    image: '👖',
    description: 'Japanese twill cotton chinos',
  },
  {
    id: 'legs-2',
    name: 'Slim Jeans',
    category: 'legs',
    price: 88,
    colors: ['#1e3a5f', '#3b5998', '#1a1a1a'],
    defaultColor: '#1e3a5f',
    image: '👖',
    description: 'Japanese denim with stretch',
  },
  {
    id: 'legs-3',
    name: 'Cargo Pants',
    category: 'legs',
    price: 98,
    colors: ['#4a5d23', '#1a1a1a', '#374151', '#78350f'],
    defaultColor: '#4a5d23',
    image: '👖',
    description: 'Military-spec ripstop cargo pants',
  },
  {
    id: 'legs-4',
    name: 'Jogger Sweatpants',
    category: 'legs',
    price: 72,
    colors: ['#1a1a1a', '#6b7280', '#1e3a5f', '#064e3b'],
    defaultColor: '#1a1a1a',
    image: '🩳',
    description: 'French terry cotton joggers',
  },

  // SHOES OPTIONS
  {
    id: 'shoes-1',
    name: 'White Sneakers',
    category: 'shoes',
    price: 115,
    colors: ['#ffffff', '#f5f5f5'],
    defaultColor: '#ffffff',
    image: '👟',
    description: 'Minimalist leather low-tops',
  },
  {
    id: 'shoes-2',
    name: 'Black Sneakers',
    category: 'shoes',
    price: 115,
    colors: ['#1a1a1a', '#2d2d2d'],
    defaultColor: '#1a1a1a',
    image: '👟',
    description: 'Sleek black leather sneakers',
  },
  {
    id: 'shoes-3',
    name: 'Canvas High-Tops',
    category: 'shoes',
    price: 75,
    colors: ['#1a1a1a', '#ffffff', '#dc2626', '#1e40af'],
    defaultColor: '#1a1a1a',
    image: '👟',
    description: 'Classic canvas high-top sneakers',
  },
  {
    id: 'shoes-4',
    name: 'Boots',
    category: 'shoes',
    price: 165,
    colors: ['#4a3728', '#1a1a1a'],
    defaultColor: '#4a3728',
    image: '👢',
    description: 'Premium leather boots',
  },

  // ACCESSORIES OPTIONS
  {
    id: 'acc-1',
    name: 'Leather Belt',
    category: 'accessories',
    price: 55,
    colors: ['#4a3728', '#1a1a1a'],
    defaultColor: '#4a3728',
    image: '👖',
    description: 'Full-grain Italian leather belt',
  },
  {
    id: 'acc-2',
    name: 'Canvas Tote',
    category: 'accessories',
    price: 42,
    colors: ['#f5f5dc', '#1a1a1a', '#059669'],
    defaultColor: '#f5f5dc',
    image: '👜',
    description: '18oz cotton canvas tote',
  },
  {
    id: 'acc-3',
    name: 'Backpack',
    category: 'accessories',
    price: 85,
    colors: ['#1a1a1a', '#374151', '#059669'],
    defaultColor: '#1a1a1a',
    image: '🎒',
    description: 'Minimalist everyday backpack',
  },
  {
    id: 'acc-4',
    name: 'Watch',
    category: 'accessories',
    price: 125,
    colors: ['#c0a080', '#c0c0c0', '#1a1a1a'],
    defaultColor: '#c0a080',
    image: '⌚',
    description: 'Minimalist analog watch',
  },
  {
    id: 'acc-5',
    name: 'No Accessories',
    category: 'accessories',
    price: 0,
    colors: ['#transparent'],
    defaultColor: '#transparent',
    image: '',
    description: 'Clean look',
  },
];

export const categories: { id: PartCategory; name: string; icon: string }[] = [
  { id: 'head', name: 'Head', icon: '🧢' },
  { id: 'body', name: 'Body', icon: '👕' },
  { id: 'legs', name: 'Legs', icon: '👖' },
  { id: 'shoes', name: 'Shoes', icon: '👟' },
  { id: 'accessories', name: 'Accessories', icon: '👜' },
];

export function getPartsByCategory(category: PartCategory): ModelPart[] {
  return modelParts.filter(part => part.category === category);
}

export function getPartById(id: string): ModelPart | undefined {
  return modelParts.find(part => part.id === id);
}

// Default outfit
export const defaultOutfit = {
  head: 'head-4',
  body: 'body-1',
  legs: 'legs-1',
  shoes: 'shoes-1',
  accessories: 'acc-5',
};

// Preset outfits
export const outfitPresets = [
  {
    name: 'Casual Friday',
    outfit: {
      head: 'head-1',
      body: 'body-1',
      legs: 'legs-2',
      shoes: 'shoes-1',
      accessories: 'acc-4',
    },
  },
  {
    name: 'Street Style',
    outfit: {
      head: 'head-3',
      body: 'body-2',
      legs: 'legs-3',
      shoes: 'shoes-3',
      accessories: 'acc-3',
    },
  },
  {
    name: 'Smart Casual',
    outfit: {
      head: 'head-4',
      body: 'body-4',
      legs: 'legs-1',
      shoes: 'shoes-1',
      accessories: 'acc-1',
    },
  },
  {
    name: 'Winter Ready',
    outfit: {
      head: 'head-2',
      body: 'body-3',
      legs: 'legs-4',
      shoes: 'shoes-4',
      accessories: 'acc-2',
    },
  },
];
