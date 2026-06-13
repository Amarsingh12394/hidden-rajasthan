import { useCart } from '../../context/CartContext'
import CartItem from '../../components/CartItem/CartItem'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartItems, totalPrice, clearCart } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl mb-4">Your cart is empty</h2>
        <Link to="/shop"><Button>Continue Shopping</Button></Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <Link to="/checkout">
            <Button className="w-full mt-4">Proceed to Checkout</Button>
          </Link>
          <button onClick={clearCart} className="text-red-500 text-sm mt-3 w-full">Clear Cart</button>
        </div>
      </div>
    </div>
  )
}
export default Cart