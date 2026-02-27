import Image from 'next/image';
import Link from 'next/link';

const featuredProducts = [
  {
    id: 1,
    name: 'Essential Tee',
    price: 45,
    category: 'Tops',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
  },
  {
    id: 2,
    name: 'Classic Hoodie',
    price: 89,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=800&fit=crop',
  },
  {
    id: 3,
    name: 'Slim Chino',
    price: 78,
    category: 'Bottoms',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop',
  },
  {
    id: 4,
    name: 'Everyday Cap',
    price: 35,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop',
  },
];

const categories = [
  { name: 'Tops', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop' },
  { name: 'Bottoms', image: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&h=600&fit=crop' },
  { name: 'Outerwear', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=600&fit=crop' },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-neutral-100">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&h=1080&fit=crop"
            alt="Essentials Collection"
            fill
            className="object-cover opacity-20"
            priority
            unoptimized
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
            ESSENTIALS
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl mx-auto">
            Minimalist clothing for everyday life. Quality pieces that never go out of style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-primary">
              Shop Now
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our most loved pieces that form the foundation of any wardrobe.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products?id=${product.id}`} className="group">
                <div className="relative aspect-[3/4] bg-neutral-100 mb-4 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <h3 className="font-medium text-lg">{product.name}</h3>
                <p className="text-neutral-600">${product.price}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Find exactly what you need from our curated collections.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/products?category=${category.name.toLowerCase()}`}
                className="group relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold uppercase tracking-wider">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=800&fit=crop"
                alt="About Essentials"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Less is More</h2>
              <p className="text-neutral-600 leading-relaxed">
                Essentials was born from a simple idea: everyone deserves access to high-quality, 
                timeless clothing. We focus on creating pieces that work together seamlessly, 
                reducing the need for excess while maximizing versatility.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Our commitment to sustainable practices and ethical manufacturing means you can 
                feel good about what you wear. Each piece is designed to last, both in quality 
                and style.
              </p>
              <Link href="/about" className="btn-primary inline-block">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Community</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Subscribe to receive exclusive offers, early access to new drops, and style inspiration.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-neutral-500"
            />
            <button type="submit" className="btn-primary bg-white text-black hover:bg-neutral-200">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
