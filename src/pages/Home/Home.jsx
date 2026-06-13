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
import whyVideo from '../../assets/videos/video2.mp4'

const Home = () => {
  const bestSellers = products.slice(0, 4)
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-8"><SearchBar /></div>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Featured Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.slice(0, 4).map(cat => <CategoryCard key={cat.slug} category={cat} />)}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Best Selling Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section className="relative py-12 text-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={whyVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4">
          <h2 className="text-2xl font-bold text-white">Why Hidden Rajasthan?</h2>
          <p className="max-w-xl mx-auto mt-2 text-white/90">Direct from artisans • Ethical sourcing • Global shipping</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8"><h2 className="text-2xl font-bold mb-4">Meet Our Suppliers</h2><div className="grid md:grid-cols-3 gap-6">{suppliers.map(s => <SupplierCard key={s.id} supplier={s} />)}</div></section>

      <section className="bg-amber-100 py-12 text-center"><h2 className="text-2xl font-bold">B2B Solutions</h2><p>Bulk orders, corporate gifting, export assistance</p><Link to="/b2b"><Button>Inquire Now</Button></Link></section>

      <section className="container mx-auto px-4 py-8"><h2 className="text-2xl font-bold mb-4">Customer Reviews</h2><div className="grid md:grid-cols-3 gap-4">{testimonials.map(t => <Testimonial key={t.id} data={t} />)}</div></section>

      <section className="py-8 text-center bg-gray-100"><h3 className="text-xl">Subscribe to our Newsletter</h3><div className="mt-2 flex justify-center gap-2"><input className="p-2 border rounded" placeholder="Email"/><Button>Subscribe</Button></div></section>
    </div>
  )
}
export default Home