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
    name: 'Black Cap',
    category: 'head',
    price: 35,
    colors: ['#1a1a1a', '#ffffff', '#1e3a5f'],
    defaultColor: '#1a1a1a',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop',
    description: 'Classic baseball cap',
  },
  {
    id: 'head-2',
    name: 'Knit Beanie',
    category: 'head',
    price: 28,
    colors: ['#1a1a1a', '#6b7280', '#7c3aed'],
    defaultColor: '#1a1a1a',
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&h=400&fit=crop',
    description: 'Cozy winter beanie',
  },
  {
    id: 'head-3',
    name: 'Bucket Hat',
    category: 'head',
    price: 38,
    colors: ['#f5f5dc', '#1a1a1a', '#059669'],
    defaultColor: '#f5f5dc',
    image: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=400&h=400&fit=crop',
    description: 'Trendy bucket hat',
  },
  {
    id: 'head-4',
    name: 'No Hat',
    category: 'head',
    price: 0,
    colors: ['#e8c4a0'],
    defaultColor: '#e8c4a0',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    description: 'Natural look',
  },

  // BODY OPTIONS
  {
    id: 'body-1',
    name: 'White Essential Tee',
    category: 'body',
    price: 45,
    colors: ['#ffffff', '#1a1a1a', '#7c3aed', '#1e3a5f'],
    defaultColor: '#ffffff',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
    description: 'Premium cotton tee',
  },
  {
    id: 'body-2',
    name: 'Classic Hoodie',
    category: 'body',
    price: 89,
    colors: ['#1a1a1a', '#6b7280', '#7c3aed', '#059669'],
    defaultColor: '#1a1a1a',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=500&fit=crop',
    description: 'Heavyweight fleece',
  },
  {
    id: 'body-3',
    name: 'Denim Jacket',
    category: 'body',
    price: 128,
    colors: ['#1e3a5f', '#3b5998'],
    defaultColor: '#1e3a5f',
    image: 'https://images.unsplash.com/photo-1576995853123-5a297da4030e?w=400&h=500&fit=crop',
    description: 'Japanese selvedge denim',
  },
  {
    id: 'body-4',
    name: 'Linen Shirt',
    category: 'body',
    price: 68,
    colors: ['#ffffff', '#f5f5dc', '#87ceeb'],
    defaultColor: '#ffffff',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop',
    description: 'European linen',
  },
  {
    id: 'body-5',
    name: 'Bomber Jacket',
    category: 'body',
    price: 145,
    colors: ['#1a1a1a', '#2d5016', '#1e3a5f'],
    defaultColor: '#1a1a1a',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
    description: 'Nylon bomber',
  },

  // LEGS OPTIONS
  {
    id: 'legs-1',
    name: 'Slim Chino',
    category: 'legs',
    price: 78,
    colors: ['#f5f5dc', '#1a1a1a', '#374151', '#1e3a5f'],
    defaultColor: '#f5f5dc',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop',
    description: 'Japanese twill cotton',
  },
  {
    id: 'legs-2',
    name: 'Slim Jeans',
    category: 'legs',
    price: 88,
    colors: ['#1e3a5f', '#3b5998', '#1a1a1a'],
    defaultColor: '#1e3a5f',
    image: 'https://images.unsplash.com/photo-1542272617-08f08630329e?w=400&h=500&fit=crop',
    description: 'Japanese denim',
  },
  {
    id: 'legs-3',
    name: 'Cargo Pants',
    category: 'legs',
    price: 98,
    colors: ['#4a5d23', '#1a1a1a', '#374151'],
    defaultColor: '#4a5d23',
    image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=400&h=500&fit=crop',
    description: 'Military ripstop',
  },
  {
    id: 'legs-4',
    name: 'Jogger Sweatpants',
    category: 'legs',
    price: 72,
    colors: ['#1a1a1a', '#6b7280', '#1e3a5f'],
    defaultColor: '#1a1a1a',
    image: 'https://images.unsplash.com/photo-1552975084-6e027cd345c7?w=400&h=500&fit=crop',
    description: 'French terry cotton',
  },

  // SHOES OPTIONS
  {
    id: 'shoes-1',
    name: 'White Sneakers',
    category: 'shoes',
    price: 115,
    colors: ['#ffffff', '#f5f5f5'],
    defaultColor: '#ffffff',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop',
    description: 'Minimalist leather',
  },
  {
    id: 'shoes-2',
    name: 'Black Sneakers',
    category: 'shoes',
    price: 115,
    colors: ['#1a1a1a', '#2d2d2d'],
    defaultColor: '#1a1a1a',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=300&fit=crop',
    description: 'Sleek black leather',
  },
  {
    id: 'shoes-3',
    name: 'Canvas High-Tops',
    category: 'shoes',
    price: 75,
    colors: ['#1a1a1a', '#ffffff', '#dc2626'],
    defaultColor: '#1a1a1a',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=300&fit=crop',
    description: 'Classic high-tops',
  },
  {
    id: 'shoes-4',
    name: 'Leather Boots',
    category: 'shoes',
    price: 165,
    colors: ['#4a3728', '#1a1a1a'],
    defaultColor: '#4a3728',
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=400&h=300&fit=crop',
    description: 'Premium leather boots',
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
