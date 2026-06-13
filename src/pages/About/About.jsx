import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">Hidden Rajasthan</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Preserving heritage, empowering artisans, connecting Rajasthan to the world.
        </p>
      </div>

      {/* Story */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
          <p className="text-gray-700 mb-3">
            Hidden Rajasthan was born from a desire to showcase the extraordinary craftsmanship hidden in the bylanes of Jaipur, Jodhpur, and Udaipur. What started as a small community project in 2024 has now grown into a global marketplace for authentic, handcrafted goods.
          </p>
          <p className="text-gray-700">
            We’ve partnered with over 50 artisan families, helped revive dying arts like <strong>camel leather crafting</strong> and <strong>hand‑block printing</strong>, and shipped to 30+ countries – all while ensuring fair wages and ethical working conditions.
          </p>
        </div>
        <div className="bg-amber-50 p-6 rounded-xl shadow">
          <img
            src="https://placehold.co/600x400?text=Artisan+at+work"
            alt="Rajasthani artisan"
            className="rounded-lg mb-4 w-full"
          />
          <p className="text-sm text-center text-gray-500">Traditional block printing in Bagru, Rajasthan</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-amber-100 p-8 rounded-xl mb-16">
        <div className="text-center">
          <div className="text-3xl font-bold text-amber-800">50+</div>
          <div className="text-gray-600">Artisan Partners</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-amber-800">30+</div>
          <div className="text-gray-600">Countries Served</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-amber-800">200+</div>
          <div className="text-gray-600">Families Supported</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-amber-800">100%</div>
          <div className="text-gray-600">Handcrafted</div>
        </div>
      </div>

      {/* Core values */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8">What We Stand For</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow-sm text-center">
            <div className="text-4xl mb-2">🤝</div>
            <h3 className="font-bold">Ethical Sourcing</h3>
            <p className="text-gray-600 text-sm">Direct from artisans – no middlemen, fair prices.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm text-center">
            <div className="text-4xl mb-2">🌿</div>
            <h3 className="font-bold">Sustainable</h3>
            <p className="text-gray-600 text-sm">Eco‑friendly materials, zero plastic packaging.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm text-center">
            <div className="text-4xl mb-2">🌍</div>
            <h3 className="font-bold">Global Reach</h3>
            <p className="text-gray-600 text-sm">Worldwide shipping, secure payment, multilingual support.</p>
          </div>
        </div>
      </div>

      {/* CTA to join as supplier */}
      <div className="bg-linear-to-r from-amber-600 to-orange-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Are you an artisan or a supplier?</h2>
        <p className="mb-4">Join our platform and showcase your products to the world.</p>
        <Link to="/become-supplier">
          <Button variant="outline" className="bg-white text-amber-700 hover:bg-amber-50">
            Become a Supplier →
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default About