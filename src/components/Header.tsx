'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
      <nav className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl md:text-3xl font-bold tracking-tighter">
            ESSENTIALS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm uppercase tracking-wider hover:text-neutral-600 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-sm uppercase tracking-wider hover:text-neutral-600 transition-colors">
              Shop
            </Link>
            <Link href="/customizer" className="text-sm uppercase tracking-wider hover:text-neutral-600 transition-colors">
              Customizer
            </Link>
            <Link href="/about" className="text-sm uppercase tracking-wider hover:text-neutral-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm uppercase tracking-wider hover:text-neutral-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleCart}
              className="relative p-2 hover:text-neutral-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium animate-pulse">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-100">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-sm uppercase tracking-wider hover:text-neutral-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/products" className="text-sm uppercase tracking-wider hover:text-neutral-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Shop
              </Link>
              <Link href="/customizer" className="text-sm uppercase tracking-wider hover:text-neutral-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Customizer
              </Link>
              <Link href="/about" className="text-sm uppercase tracking-wider hover:text-neutral-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="text-sm uppercase tracking-wider hover:text-neutral-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
