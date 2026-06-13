import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { useCart } from '../../context/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h3 className="font-semibold mt-2">{product.name}</h3>
      <p className="text-amber-700 font-bold">${product.price}</p>
      <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      <Link to={`/product/${product.id}`} className="text-sm text-blue-600 block mt-2">View Details</Link>
    </div>
  )
}
export default ProductCard