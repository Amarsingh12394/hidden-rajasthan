import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-2xl font-bold text-amber-500 mb-4">Hidden Rajasthan</h3>
            <p className="text-sm leading-relaxed">
              Connecting heritage with global markets. Authentic handcrafted treasures from the heart of Rajasthan.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-amber-500 transition">Shop</Link></li>
              <li><Link to="/b2b" className="hover:text-amber-500 transition">B2B Marketplace</Link></li>
              <li><Link to="/become-supplier" className="hover:text-amber-500 transition">Become a Supplier</Link></li>
              <li><Link to="/about" className="hover:text-amber-500 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="hover:text-amber-500 transition">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-amber-500 transition">Shipping Info</Link></li>
              <li><Link to="/returns" className="hover:text-amber-500 transition">Returns</Link></li>
              <li><Link to="/privacy" className="hover:text-amber-500 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-amber-500 transition">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Connected</h4>
            <p className="text-sm mb-3">Subscribe for exclusive offers and updates.</p>
            <form className="flex flex-col sm:flex-row gap-2 mb-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-amber-500"
                required
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded text-sm transition"
              >
                Subscribe
              </button>
            </form>
            {/* Social Icons */}
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-amber-500 transition">📘</a>
              <a href="#" className="hover:text-amber-500 transition">📸</a>
              <a href="#" className="hover:text-amber-500 transition">🐦</a>
              <a href="#" className="hover:text-amber-500 transition">🔗</a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Hidden Rajasthan. All rights reserved. | Crafted with ❤️ in Jaipur
        </div>
      </div>
    </footer>
  )
}

export default Footer