import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { useState } from 'react'

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', address: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Order placed! (demo)')
    clearCart()
    navigate('/')
  }

  if (cartItems.length === 0) {
    navigate('/cart')
    return null
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Full Name" required className="w-full border p-2 rounded" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            <input type="email" placeholder="Email" required className="w-full border p-2 rounded" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
            <textarea placeholder="Shipping Address" required className="w-full border p-2 rounded" rows="3" value={form.address} onChange={e => setForm({...form, address: e.target.value})}></textarea>
            <Button type="submit">Place Order</Button>
          </form>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h2 className="font-bold">Order Summary</h2>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between text-sm py-1">
              <span>{item.name} x{item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t mt-2 pt-2 font-bold flex justify-between">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Checkout