import { useUser } from '../../context/UserContext'

const AdminDashboard = () => {
  const { user } = useUser()
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome, {user?.email}</p>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 shadow rounded">Total Products: 8</div>
        <div className="bg-white p-4 shadow rounded">Total Suppliers: 3</div>
        <div className="bg-white p-4 shadow rounded">Total Users: 1 (demo)</div>
      </div>
    </div>
  )
}
export default AdminDashboard