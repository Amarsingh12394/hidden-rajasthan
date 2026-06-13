import { Outlet, Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const SupplierLayout = () => {
  const { logout } = useUser()
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-amber-800 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Supplier Zone</h2>
        <nav className="space-y-3">
          <Link to="/supplier/dashboard" className="block hover:text-amber-200">Dashboard</Link>
          <Link to="/supplier/products" className="block hover:text-amber-200">My Products</Link>
          <button onClick={logout} className="block w-full text-left hover:text-amber-200">Logout</button>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-50">
        <Outlet />
      </main>
    </div>
  )
}
export default SupplierLayout