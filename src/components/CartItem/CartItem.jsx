import { useCart } from '../../context/CartContext'

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <div className="flex gap-4 border-b pb-4 mb-4">
      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
      <div className="grow">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-amber-700">${item.price}</p>
        <div className="flex items-center gap-3 mt-2">
          <label>Qty:</label>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
            className="border rounded w-16 p-1 text-center"
          />
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 text-sm hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="font-bold">${(item.price * item.quantity).toFixed(2)}</div>
    </div>
  )
}

export default CartItem