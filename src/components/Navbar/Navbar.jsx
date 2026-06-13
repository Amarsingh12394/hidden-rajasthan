import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useUser } from '../../context/UserContext'

const Navbar = () => {
  const { totalItems } = useCart()
  const { user, logout } = useUser()

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center flex-wrap gap-3 bg-amber-50">
        <Link to="/" className="text-2xl font-bold text-amber-700">Hidden Rajasthan</Link>
        <div className="flex gap-4 items-center">
          <Link to="/shop" className="hover:text-amber-600">Shop</Link>
          <Link to="/b2b" className="hover:text-amber-600">B2B</Link>
          <Link to="/become-supplier" className="hover:text-amber-600">Become Supplier</Link>
          <Link to="/about" className="hover:text-amber-600">About</Link>
          <Link to="/contact" className="hover:text-amber-600">Contact</Link>
          <Link to="/cart" className="relative">
            🛒
            {totalItems > 0 && <span className="absolute -top-2 -right-4 bg-amber-600 text-white text-xs rounded-full px-1.5">{totalItems}</span>}
          </Link>
          {user ? (
            <div className="flex gap-2">
              <span className="text-sm">{user.name}</span>
              <button onClick={logout} className="text-red-500 text-sm">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="bg-amber-600 text-white px-3 py-1 rounded">Login</Link>
          )}
        </div>
      </div>
    </nav>
  )
}
export default Navbar