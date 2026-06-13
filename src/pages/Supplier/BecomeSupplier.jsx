import { useState } from 'react'
import Button from '../../components/Button/Button'
import supplierBg from '../../assets/image/bg2.png'

const BecomeSupplier = () => {
  const [form, setForm] = useState({ name: '', email: '', business: '', products: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Application submitted! We will review and contact you within 3-5 business days.')
  }

  return (
    <div
      className="relative min-h-full py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${supplierBg})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        <h1 className="text-3xl font-bold mb-4 text-white">Become a Supplier</h1>
        <p className="mb-6 text-white/90">Join our network of authentic Rajasthani artisans, weavers, and producers. Sell to thousands of B2C and B2B customers globally.</p>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white/95 shadow p-6 rounded">
          <input type="text" placeholder="Full Name" required className="w-full border p-2 rounded bg-white" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
          <input type="email" placeholder="Email" required className="w-full border p-2 rounded bg-white" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          <input type="text" placeholder="Business / Shop Name" required className="w-full border p-2 rounded bg-white" value={form.business} onChange={e => setForm({...form, business: e.target.value})} />
          <textarea placeholder="Describe your products (e.g., rugs, pottery, textiles)" rows="4" required className="w-full border p-2 rounded bg-white" value={form.products} onChange={e => setForm({...form, products: e.target.value})}></textarea>
          <Button type="submit">Apply Now</Button>
        </form>
      </div>
    </div>
  )
}
export default BecomeSupplier
