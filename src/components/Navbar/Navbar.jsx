import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useUser } from '../../context/UserContext'
import { useFavorite } from '../../context/FavoriteContext'

const Navbar = () => {
  const { totalItems } = useCart()
  const { user, logout } = useUser()
  const { favorites } = useFavorite()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md shadow-lg'
          : 'bg-black/50 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold text-white hover:text-amber-400 transition"
          >
            Hidden Rajasthan
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4 items-center">
            <Link to="/shop" className="text-white hover:text-amber-400 transition">Shop</Link>
            <Link to="/b2b" className="text-white hover:text-amber-400 transition">B2B</Link>
            <Link to="/become-supplier" className="text-white hover:text-amber-400 transition">Become Supplier</Link>
            <Link to="/about" className="text-white hover:text-amber-400 transition">About</Link>
            <Link to="/contact" className="text-white hover:text-amber-400 transition">Contact</Link>
            <Link to="/favorites" className="text-white hover:text-amber-400 transition relative">
              ❤️ Favorites
              {favorites.length > 0 && (
                <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full px-1.5">
                  {favorites.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="text-white hover:text-amber-400 transition relative">
              🛒
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-4 bg-amber-500 text-white text-xs rounded-full px-1.5">
                  {totalItems}
                </span>
              )}
            </Link>
            {user ? (
              <div className="flex gap-2 items-center">
                <span className="text-sm text-white">{user.name}</span>
                <button onClick={logout} className="text-red-400 text-sm hover:underline">Logout</button>
              </div>
            ) : (
              <Link to="/login" className="bg-amber-600 text-white px-3 py-1 rounded hover:bg-amber-700 transition">Login</Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl text-white focus:outline-none"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Dropdown Menu - Dark/Black Theme */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-3 space-y-2 rounded-lg p-4 bg-black/90 backdrop-blur-md border border-gray-700">
            <Link to="/shop" className="block py-2 hover:text-amber-400 text-white" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link to="/b2b" className="block py-2 hover:text-amber-400 text-white" onClick={() => setIsMenuOpen(false)}>B2B</Link>
            <Link to="/become-supplier" className="block py-2 hover:text-amber-400 text-white" onClick={() => setIsMenuOpen(false)}>Become Supplier</Link>
            <Link to="/about" className="block py-2 hover:text-amber-400 text-white" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block py-2 hover:text-amber-400 text-white" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link to="/favorites" className="block py-2 hover:text-amber-400 text-white" onClick={() => setIsMenuOpen(false)}>❤️ Favorites ({favorites.length})</Link>
            <Link to="/cart" className="block py-2 hover:text-amber-400 text-white" onClick={() => setIsMenuOpen(false)}>🛒 Cart ({totalItems})</Link>
            {user ? (
              <button onClick={() => { logout(); setIsMenuOpen(false); }} className="block w-full text-left py-2 text-red-400">Logout</button>
            ) : (
              <Link to="/login" className="block py-2 bg-amber-600 text-white text-center rounded" onClick={() => setIsMenuOpen(false)}>Login</Link>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar