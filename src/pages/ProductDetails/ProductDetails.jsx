import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'
import { useFavorite } from '../../context/FavoriteContext'
import { useUser } from '../../context/UserContext'
import Button from '../../components/Button/Button'
import { useState } from 'react'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.id === parseInt(id))
  const { addToCart } = useCart()
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorite()
  const { user } = useUser()
  const [quantity, setQuantity] = useState(1)
  const [error, setError] = useState('')

  if (!product) return <div className="text-center py-20">Product not found</div>

  const handleAddToCart = () => {
    if (!user) {
      navigate('/login')
      return
    }
    if (quantity < 1) {
      setError('Quantity must be at least 1')
      return
    }
    addToCart(product, quantity)
    setError('')
  }

  const handleFavorite = () => {
    if (!user) {
      navigate('/login')
      return
    }
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites(product)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <button onClick={() => navigate(-1)} className="text-amber-600 mb-4">← Back</button>
      <div className="grid md:grid-cols-2 gap-8">
        <img src={product.image} alt={product.name} className="w-full rounded-lg shadow" />
        <div>
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <button onClick={handleFavorite} className="text-3xl">
              {isFavorite(product.id) ? '❤️' : '🤍'}
            </button>
          </div>
          <p className="text-gray-600 mb-2">By {product.supplier}</p>
          <p className="text-2xl text-amber-700 font-bold mb-4">${product.price}</p>
          <p className="mb-4">⭐ {product.rating} / 5</p>
          <p className="mb-4">Category: {product.category}</p>
          <div className="flex items-center gap-4 mb-6">
            <label>Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="border p-2 w-20 rounded"
            />
          </div>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>
      {/* Related products (same category) */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">You may also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3).map(rel => (
            <div key={rel.id} className="border p-2 rounded">
              <img src={rel.image} alt={rel.name} className="h-32 w-full object-cover" />
              <p className="font-semibold">{rel.name}</p>
              <button onClick={() => navigate(`/product/${rel.id}`)} className="text-amber-600 text-sm">View</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ProductDetails