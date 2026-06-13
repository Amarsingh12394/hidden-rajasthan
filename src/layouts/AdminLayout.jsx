import { Outlet, Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const AdminLayout = () => {
  const { logout } = useUser()
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-3">
          <Link to="/admin" className="block hover:text-amber-400">Dashboard</Link>
          <Link to="/admin/products" className="block hover:text-amber-400">Manage Products</Link>
          <Link to="/admin/suppliers" className="block hover:text-amber-400">Manage Suppliers</Link>
          <Link to="/admin/users" className="block hover:text-amber-400">Manage Users</Link>
          <button onClick={logout} className="block w-full text-left hover:text-amber-400">Logout</button>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </main>
    </div>
  )
}
export default AdminLayout