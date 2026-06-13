import { useUser } from '../../context/UserContext'
import { Link } from 'react-router-dom'

const SupplierDashboard = () => {
  const { user } = useUser()
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Your Products</h2>
          <p className="mb-4">Manage your listed products, add new items, track sales.</p>
          <Link to="/supplier/products" className="text-amber-600 underline">Manage Products →</Link>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <p className="mb-4">View incoming orders and update status.</p>
          <p className="text-gray-500">(Demo – no orders yet)</p>
        </div>
      </div>
    </div>
  )
}
export default SupplierDashboard