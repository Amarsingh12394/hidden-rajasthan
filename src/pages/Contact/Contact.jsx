import { useState } from 'react'
import Button from '../../components/Button/Button'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! We will get back to you soon.')
  }
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Your Name" required className="w-full border p-2 rounded" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        <input type="email" placeholder="Email" required className="w-full border p-2 rounded" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
        <textarea placeholder="Message" rows="5" required className="w-full border p-2 rounded" value={form.message} onChange={e => setForm({...form, message: e.target.value})}></textarea>
        <Button type="submit">Send Message</Button>
      </form>
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <p>📧 support@hiddenrajasthan.com</p>
        <p>📞 +91 141 123 4567</p>
        <p>📍 Jaipur, Rajasthan, India</p>
      </div>
    </div>
  )
}
export default Contact