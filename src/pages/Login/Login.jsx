import { useState } from 'react'
import { useUser } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { isValidEmail, isRequired, validateForm } from '../../utils/validators'

const Login = () => {
  const { login } = useUser()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', role: 'customer' })
  const [errors, setErrors] = useState({})

  const validationRules = {
    email: [
      { check: isRequired, message: 'Email is required' },
      { check: isValidEmail, message: 'Enter a valid email address' }
    ]
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // Clear field error on typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateForm(formData, validationRules)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    login(formData.email, formData.role)
    if (formData.role === 'admin') navigate('/admin')
    else if (formData.role === 'supplier') navigate('/supplier/dashboard')
    else navigate('/')
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
        >
          <option value="customer">Customer</option>
          <option value="supplier">Supplier</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </form>
    </div>
  )
}
export default Login