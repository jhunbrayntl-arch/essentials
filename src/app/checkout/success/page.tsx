'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CheckoutSuccessPage() {
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    // Generate a random order number
    setOrderNumber(`ESS-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Success Message */}
        <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-neutral-600 mb-6">
          Thank you for your purchase. We&apos;ve received your order and will process it shortly.
        </p>

        {/* Order Number */}
        <div className="bg-neutral-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-neutral-500 mb-1">Order Number</p>
          <p className="text-lg font-mono font-bold">{orderNumber}</p>
        </div>

        {/* What's Next */}
        <div className="text-left bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
          <h3 className="font-medium mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            What&apos;s Next?
          </h3>
          <ul className="text-sm text-neutral-600 space-y-1">
            <li>• You&apos;ll receive a confirmation email shortly</li>
            <li>• We&apos;ll send a tracking number when shipped</li>
            <li>• Estimated delivery: 5-7 business days</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Link href="/products" className="btn-primary w-full block">
            Continue Shopping
          </Link>
          <Link href="/" className="w-full block py-3 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
            Return to Home
          </Link>
        </div>

        {/* Support */}
        <div className="mt-8 pt-6 border-t border-neutral-100">
          <p className="text-sm text-neutral-500">
            Questions? Contact us at{' '}
            <a href="mailto:support@essentials.com" className="text-neutral-900 underline">
              support@essentials.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
