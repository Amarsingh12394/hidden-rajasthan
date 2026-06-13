import Hero from '../../components/Hero/Hero'
import SearchBar from '../../components/SearchBar/SearchBar'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import ProductCard from '../../components/ProductCard/ProductCard'
import SupplierCard from '../../components/SupplierCard/SupplierCard'
import Testimonial from '../../components/Testimonial/Testimonial'
import Button from '../../components/Button/Button'
import { categories } from '../../data/categories'
import { products } from '../../data/products'
import { suppliers } from '../../data/suppliers'
import { testimonials } from '../../data/testimonials'
import { Link } from 'react-router-dom'
import bgVideo from '../../assets/videos/video2.mp4'   // ✅ correct path (plural 'videos')

const Home = () => {
  const bestSellers = products.slice(0, 4)

  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <SearchBar />
      </div>

      {/* Featured Categories - Large Images */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Featured Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.slice(0, 4).map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </section>

      {/* Best Selling Products - Larger Photos */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Best Selling Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((p) => (
            <ProductCard key={p.id} product={p} size="large" />
          ))}
        </div>
      </section>

      {/* Why Hidden Rajasthan - with Background Video */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Why Hidden Rajasthan?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">🧵</div>
              <h3 className="text-xl font-semibold mb-2">Direct from Artisans</h3>
              <p className="text-gray-700">
                No middlemen. We work directly with weavers, potters, and craftspeople to ensure
                fair prices and authentic products.
              </p>
            </div>
            <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-2">Ethical Sourcing</h3>
              <p className="text-gray-700">
                Every product is made with eco-friendly materials. We support sustainable
                livelihoods and preserve traditional crafts.
              </p>
            </div>
            <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Global Shipping</h3>
              <p className="text-gray-700">
                Fast, reliable delivery to over 30 countries. Track your order from Jaipur to your
                doorstep.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
            <div className="flex items-start gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg">
              <span className="text-2xl">⭐</span>
              <div>
                <h4 className="font-semibold">100% Authentic</h4>
                <p className="text-sm text-gray-700">Handcrafted with love, no mass production.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg">
              <span className="text-2xl">🔄</span>
              <div>
                <h4 className="font-semibold">Easy Returns</h4>
                <p className="text-sm text-gray-700">7-day return policy, no questions asked.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg">
              <span className="text-2xl">🔒</span>
              <div>
                <h4 className="font-semibold">Secure Payments</h4>
                <p className="text-sm text-gray-700">
                  SSL encrypted checkout, multiple payment options.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg">
              <span className="text-2xl">💚</span>
              <div>
                <h4 className="font-semibold">Supporting Communities</h4>
                <p className="text-sm text-gray-700">
                  5% of profits go back to artisan communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Suppliers */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Meet Our Suppliers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {suppliers.map((s) => (
            <SupplierCard key={s.id} supplier={s} />
          ))}
        </div>
      </section>

      {/* B2B Solutions */}
      <section className="bg-amber-100 py-12 text-center">
        <h2 className="text-2xl font-bold">B2B Solutions</h2>
        <p>Bulk orders, corporate gifting, export assistance</p>
        <Link to="/b2b">
          <Button className="mt-4">Inquire Now</Button>
        </Link>
      </section>

      {/* Customer Reviews */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <Testimonial key={t.id} data={t} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-8 text-center bg-gray-100">
        <h3 className="text-xl">Subscribe to our Newsletter</h3>
        <div className="mt-2 flex justify-center gap-2">
          <input className="p-2 border rounded" placeholder="Email" />
          <Button>Subscribe</Button>
        </div>
      </section>
    </div>
  )
}

export default Home