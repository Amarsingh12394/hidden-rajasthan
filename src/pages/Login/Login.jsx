import { useState } from 'react'
import { useUser } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { login } = useUser()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('customer')
  const [error, setError] = useState('')

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    login(email, role)
    if (role === 'admin') navigate('/admin')
    else if (role === 'supplier') navigate('/supplier/dashboard')
    else navigate('/')
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Login (Demo)</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded mb-2"
          required
        />
        <select value={role} onChange={e => setRole(e.target.value)} className="w-full border p-2 rounded mb-2">
          <option value="customer">Customer</option>
          <option value="supplier">Supplier</option>
          <option value="admin">Admin</option>
        </select>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded w-full">Login</button>
      </form>
    </div>
  )
}
export default Login