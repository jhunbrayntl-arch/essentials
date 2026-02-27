'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

type PaymentMethod = 'card' | 'paypal' | 'cod';

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, discount, promoCode, removePromoCode, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const total = subtotal - (subtotal * discount);
  const shipping = subtotal > 150 ? 0 : 9.99;
  const finalTotal = total + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';

    if (paymentMethod === 'card') {
      if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, '').length !== 16) {
        newErrors.cardNumber = 'Valid 16-digit card number is required';
      }
      if (!formData.cardName) newErrors.cardName = 'Name on card is required';
      if (!formData.expiryDate || !/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
        newErrors.expiryDate = 'Valid expiry date (MM/YY) is required';
      }
      if (!formData.cvv || formData.cvv.length !== 3) {
        newErrors.cvv = 'Valid CVV is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Clear cart and redirect to success page
    clearCart();
    router.push('/checkout/success');
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    }
    return value;
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-neutral-600 mb-8">Add some products before checking out.</p>
          <Link href="/products" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <Link href="/" className="text-2xl font-bold tracking-tighter">ESSENTIALS</Link>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="container mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Forms */}
            <div className="lg:col-span-7 space-y-8">
              {/* Contact Information */}
              <section className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 ${
                      errors.email ? 'border-red-500' : 'border-neutral-200'
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </section>

              {/* Shipping Address */}
              <section className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 ${
                        errors.firstName ? 'border-red-500' : 'border-neutral-200'
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 ${
                        errors.lastName ? 'border-red-500' : 'border-neutral-200'
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="address" className="block text-sm font-medium mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 ${
                      errors.address ? 'border-red-500' : 'border-neutral-200'
                    }`}
                    placeholder="123 Main Street"
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>
                <div className="mt-4">
                  <label htmlFor="apartment" className="block text-sm font-medium mb-1">
                    Apartment, suite, etc. (optional)
                  </label>
                  <input
                    type="text"
                    id="apartment"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    placeholder="Apt 4B"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 ${
                        errors.city ? 'border-red-500' : 'border-neutral-200'
                      }`}
                      placeholder="New York"
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 ${
                        errors.state ? 'border-red-500' : 'border-neutral-200'
                      }`}
                      placeholder="NY"
                    />
                    {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 ${
                        errors.zipCode ? 'border-red-500' : 'border-neutral-200'
                      }`}
                      placeholder="10001"
                    />
                    {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 ${
                      errors.phone ? 'border-red-500' : 'border-neutral-200'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </section>

              {/* Payment Method */}
              <section className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                
                {/* Payment Options */}
                <div className="space-y-3 mb-6">
                  <label className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                    paymentMethod === 'card' ? 'border-black bg-neutral-50' : 'border-neutral-200 hover:border-neutral-300'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="w-4 h-4"
                    />
                    <div className="flex items-center gap-3 flex-1">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span className="font-medium">Credit / Debit Card</span>
                      <div className="flex gap-1 ml-auto">
                        <div className="w-10 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                        <div className="w-10 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                      </div>
                    </div>
                  </label>

                  <label className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                    paymentMethod === 'paypal' ? 'border-black bg-neutral-50' : 'border-neutral-200 hover:border-neutral-300'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={() => setPaymentMethod('paypal')}
                      className="w-4 h-4"
                    />
                    <div className="flex items-center gap-3 flex-1">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.554 9.488c.121.365.189.774.189 1.23 0 4.006-2.717 6.282-7.522 6.282H9.37c-.695 0-1.278.502-1.386 1.186L6.69 24H3.87l2.23-14.142c.146-.928.946-1.614 1.884-1.614h3.82c3.305 0 5.466-.659 6.598-2.466.504-.806.686-1.663.55-2.546-.127-.826-.51-1.54-1.105-2.068-.556-.493-1.316-.828-2.203-.978-.847-.143-1.825-.143-2.836.014-.286.045-.56.102-.82.17-.394.103-.76.226-1.094.368l1.06-6.732h6.896c.762 0 1.406.55 1.526 1.302l1.282 8.18z"/>
                      </svg>
                      <span className="font-medium">PayPal</span>
                    </div>
                  </label>

                  <label className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                    paymentMethod === 'cod' ? 'border-black bg-neutral-50' : 'border-neutral-200 hover:border-neutral-300'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="w-4 h-4"
                    />
                    <div className="flex items-center gap-3 flex-1">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="font-medium">Cash on Delivery</span>
                    </div>
                  </label>
                </div>

                {/* Card Details */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4 p-4 bg-neutral-50 rounded-lg">
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => {
                          const formatted = formatCardNumber(e.target.value);
                          setFormData(prev => ({ ...prev, cardNumber: formatted }));
                        }}
                        maxLength={19}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 ${
                          errors.cardNumber ? 'border-red-500' : 'border-neutral-200'
                        }`}
                        placeholder="1234 5678 9012 3456"
                      />
                      {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                    </div>
                    <div>
                      <label htmlFor="cardName" className="block text-sm font-medium mb-1">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 ${
                          errors.cardName ? 'border-red-500' : 'border-neutral-200'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={(e) => {
                            const formatted = formatExpiryDate(e.target.value);
                            setFormData(prev => ({ ...prev, expiryDate: formatted }));
                          }}
                          maxLength={5}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 ${
                            errors.expiryDate ? 'border-red-500' : 'border-neutral-200'
                          }`}
                          placeholder="MM/YY"
                        />
                        {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '');
                            setFormData(prev => ({ ...prev, cvv: value }));
                          }}
                          maxLength={4}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 ${
                            errors.cvv ? 'border-red-500' : 'border-neutral-200'
                          }`}
                          placeholder="123"
                        />
                        {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                      </div>
                    </div>
                  </div>
                )}

                {/* Secure Payment Badge */}
                <div className="flex items-center gap-2 mt-4 text-sm text-neutral-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Your payment information is secure and encrypted</span>
                </div>
              </section>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                {/* Cart Items */}
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex gap-4">
                      <div className="relative w-16 h-20 flex-shrink-0 bg-neutral-100 rounded overflow-hidden">
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
                        <p className="text-neutral-500 text-xs">Size: {item.size}</p>
                        <p className="text-neutral-500 text-xs">Qty: {item.quantity}</p>
                        <p className="font-medium text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Code */}
                {!promoCode ? (
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Have a promo code?</p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter code"
                        className="flex-1 px-3 py-2 border border-neutral-200 rounded text-sm focus:outline-none focus:border-neutral-900"
                      />
                      <button type="button" className="px-4 py-2 bg-neutral-900 text-white rounded text-sm font-medium hover:bg-neutral-800">
                        Apply
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-800 font-medium text-sm">{promoCode}</p>
                        <p className="text-green-600 text-xs">{(discount * 100).toFixed(0)}% OFF applied</p>
                      </div>
                      <button
                        type="button"
                        onClick={removePromoCode}
                        className="text-green-600 hover:text-green-800 text-sm underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )}

                {/* Totals */}
                <div className="border-t border-neutral-100 pt-4 space-y-2">
                  <div className="flex justify-between text-neutral-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({(discount * 100).toFixed(0)}%)</span>
                      <span>-${(subtotal * discount).toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-neutral-100">
                    <span>Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full btn-primary py-4 text-lg mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    `Place Order - $${finalTotal.toFixed(2)}`
                  )}
                </button>

                {/* Trust Badges */}
                <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-neutral-100">
                  <div className="text-center">
                    <svg className="w-8 h-8 mx-auto mb-1 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <p className="text-xs text-neutral-500">Secure</p>
                  </div>
                  <div className="text-center">
                    <svg className="w-8 h-8 mx-auto mb-1 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <p className="text-xs text-neutral-500">Encrypted</p>
                  </div>
                  <div className="text-center">
                    <svg className="w-8 h-8 mx-auto mb-1 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <p className="text-xs text-neutral-500">Protected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
