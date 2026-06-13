import { useState } from 'react'
import Button from '../../components/Button/Button'
import b2bBg from '../../assets/image/bg1.png'

const BulkOrders = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Inquiry sent! Our B2B team will contact you shortly.')
    setForm({ name: '', email: '', company: '', message: '' })
  }

  return (
    <div
      className="relative min-h-full py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${b2bBg})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <h1 className="text-3xl font-bold mb-4 text-white">B2B Marketplace</h1>
        <p className="mb-6 text-white/90">Bulk orders, corporate gifting, export assistance – we deliver authentic Rajasthani products worldwide.</p>
        <div className="bg-white/95 p-6 rounded-lg mb-8 shadow">
          <h2 className="text-xl font-semibold mb-2">Why partner with us?</h2>
          <ul className="list-disc list-inside">
            <li>Factory-direct pricing</li>
            <li>Custom branding & packaging</li>
            <li>Global shipping & logistics support</li>
            <li>Dedicated account manager</li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white/95 p-6 rounded-lg shadow">
          <input type="text" placeholder="Full Name" required className="w-full border p-2 rounded bg-white" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
          <input type="email" placeholder="Email" required className="w-full border p-2 rounded bg-white" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          <input type="text" placeholder="Company Name" required className="w-full border p-2 rounded bg-white" value={form.company} onChange={e => setForm({...form, company: e.target.value})} />
          <textarea placeholder="Tell us what you need (products, quantity, etc.)" rows="5" required className="w-full border p-2 rounded bg-white" value={form.message} onChange={e => setForm({...form, message: e.target.value})}></textarea>
          <Button type="submit">Send Inquiry</Button>
        </form>
      </div>
    </div>
  )
}
export default BulkOrders
