import { useState } from 'react'
import { useUser } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { login } = useUser()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('customer')

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, role)
    if (role === 'admin') navigate('/admin')
    else if (role === 'supplier') navigate('/supplier/dashboard')
    else navigate('/')
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Login (Demo)</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border p-2 rounded mb-2" required />
        <select value={role} onChange={e => setRole(e.target.value)} className="w-full border p-2 rounded mb-4">
          <option value="customer">Customer</option>
          <option value="supplier">Supplier</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded w-full">Login</button>
      </form>
      <p className="text-xs mt-4 text-gray-500">Demo: No password required. Choose role to test dashboards.</p>
    </div>
  )
}
export default Login