'use client';

import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CartDrawer() {
  const router = useRouter();
  const {
    items,
    isOpen,
    subtotal,
    discount,
    promoCode,
    promoCodeError,
    itemCount,
    removeFromCart,
    updateQuantity,
    closeCart,
    applyPromoCode,
    removePromoCode,
  } = useCart();

  const [codeInput, setCodeInput] = useState('');
  const [isApplying, setIsApplying] = useState(false);

  const total = subtotal - (subtotal * discount);

  const handleCheckout = () => {
    closeCart();
    router.push('/checkout');
  };

  const handleApplyPromo = () => {
    if (!codeInput.trim()) return;
    setIsApplying(true);
    applyPromoCode(codeInput);
    setIsApplying(false);
  };

  // Close cart on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-100">
          <h2 className="text-xl font-bold">
            Your Cart ({itemCount} {itemCount === 1 ? 'item' : 'items'})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto mb-4 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-neutral-500 mb-4">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="btn-primary"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4 p-4 bg-neutral-50 rounded-lg">
                  <div className="relative w-20 h-24 flex-shrink-0 bg-neutral-100 rounded overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm truncate">{item.name}</h3>
                    <p className="text-neutral-500 text-sm">Size: {item.size}</p>
                    <p className="text-neutral-900 font-medium mt-1">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-neutral-200 rounded hover:bg-neutral-100 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-neutral-200 rounded hover:bg-neutral-100 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-neutral-400 hover:text-red-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-neutral-100 p-6 space-y-4">
            {/* Promo Code */}
            {!promoCode ? (
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={codeInput}
                    onChange={(e) => setCodeInput(e.target.value.toUpperCase())}
                    placeholder="Promo code"
                    className="flex-1 px-4 py-2 border border-neutral-200 rounded focus:outline-none focus:border-black text-sm uppercase"
                    onKeyDown={(e) => e.key === 'Enter' && handleApplyPromo()}
                  />
                  <button
                    onClick={handleApplyPromo}
                    disabled={isApplying || !codeInput.trim()}
                    className="px-4 py-2 bg-neutral-900 text-white rounded text-sm font-medium hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isApplying ? '...' : 'Apply'}
                  </button>
                </div>
                {promoCodeError && (
                  <p className="text-red-500 text-sm">{promoCodeError}</p>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded">
                <div>
                  <p className="text-green-800 font-medium text-sm">{promoCode}</p>
                  <p className="text-green-600 text-xs">{(discount * 100).toFixed(0)}% OFF applied</p>
                </div>
                <button
                  onClick={removePromoCode}
                  className="text-green-600 hover:text-green-800 text-sm underline"
                >
                  Remove
                </button>
              </div>
            )}

            {/* Summary */}
            <div className="space-y-2 pt-4 border-t border-neutral-100">
              <div className="flex justify-between text-neutral-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount ({(discount * 100).toFixed(0)}%)</span>
                  <span>-${(subtotal * discount).toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-neutral-100">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              className="w-full btn-primary py-4 text-lg"
            >
              Checkout
            </button>

            {/* Urgency Message */}
            <p className="text-center text-xs text-neutral-500">
              🔥 Free shipping on orders over $150
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
