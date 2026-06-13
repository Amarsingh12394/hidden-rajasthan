import { useState } from 'react'
import Button from '../../components/Button/Button'

const BecomeSupplier = () => {
  const [form, setForm] = useState({ name: '', email: '', business: '', products: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Application submitted! We will review and contact you within 3-5 business days.')
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Become a Supplier</h1>
      <p className="mb-6">Join our network of authentic Rajasthani artisans, weavers, and producers. Sell to thousands of B2C and B2B customers globally.</p>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow p-6 rounded">
        <input type="text" placeholder="Full Name" required className="w-full border p-2 rounded" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        <input type="email" placeholder="Email" required className="w-full border p-2 rounded" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
        <input type="text" placeholder="Business / Shop Name" required className="w-full border p-2 rounded" value={form.business} onChange={e => setForm({...form, business: e.target.value})} />
        <textarea placeholder="Describe your products (e.g., rugs, pottery, textiles)" rows="4" required className="w-full border p-2 rounded" value={form.products} onChange={e => setForm({...form, products: e.target.value})}></textarea>
        <Button type="submit">Apply Now</Button>
      </form>
    </div>
  )
}
export default BecomeSupplier