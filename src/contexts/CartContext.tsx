'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  id: number | string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  subtotal: number;
  discount: number;
  promoCode: string | null;
  promoCodeError: string | null;
  itemCount: number;
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (id: number | string, size: string) => void;
  updateQuantity: (id: number | string, size: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  closeCart: () => void;
  applyPromoCode: (code: string) => boolean;
  removePromoCode: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [promoCode, setPromoCode] = useState<string | null>(null);
  const [promoCodeError, setPromoCodeError] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('essentials-cart');
    const savedPromo = localStorage.getItem('essentials-promo');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
    if (savedPromo) {
      const promoData = JSON.parse(savedPromo);
      // Check if promo is still valid
      if (new Date(promoData.expiresAt) > new Date()) {
        setPromoCode(promoData.code);
        setDiscount(promoData.discount);
      } else {
        localStorage.removeItem('essentials-promo');
      }
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('essentials-cart', JSON.stringify(items));
  }, [items]);

  // Save promo to localStorage
  useEffect(() => {
    if (promoCode) {
      const promoData = {
        code: promoCode,
        discount,
        expiresAt: new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString(),
      };
      localStorage.setItem('essentials-promo', JSON.stringify(promoData));
    } else {
      localStorage.removeItem('essentials-promo');
    }
  }, [promoCode, discount]);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (item: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    setItems(prev => {
      const existing = prev.find(
        i => i.id === item.id && i.size === item.size
      );
      if (existing) {
        return prev.map(i =>
          i.id === item.id && i.size === item.size
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (id: number | string, size: string) => {
    setItems(prev => prev.filter(item => !(item.id === id && item.size === size)));
  };

  const updateQuantity = (id: number | string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, size);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.id === id && item.size === size ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    setPromoCode(null);
    setDiscount(0);
  };

  const toggleCart = () => setIsOpen(prev => !prev);
  const closeCart = () => setIsOpen(false);

  const applyPromoCode = (code: string): boolean => {
    const normalizedCode = code.toUpperCase().trim();
    
    // Import promo codes dynamically
    import('@/data/products').then(({ promoCodes }) => {
      const promo = promoCodes[normalizedCode as keyof typeof promoCodes];
      
      if (!promo) {
        setPromoCodeError('Invalid promo code');
        return false;
      }
      
      if (new Date(promo.expiresAt) < new Date()) {
        setPromoCodeError('This promo code has expired');
        return false;
      }
      
      if (subtotal < promo.minPurchase) {
        setPromoCodeError(`Minimum purchase of $${promo.minPurchase} required`);
        return false;
      }
      
      setPromoCode(normalizedCode);
      setDiscount(promo.discount);
      setPromoCodeError(null);
      return true;
    });
    
    return true;
  };

  const removePromoCode = () => {
    setPromoCode(null);
    setDiscount(0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        subtotal,
        discount,
        promoCode,
        promoCodeError,
        itemCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleCart,
        closeCart,
        applyPromoCode,
        removePromoCode,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
