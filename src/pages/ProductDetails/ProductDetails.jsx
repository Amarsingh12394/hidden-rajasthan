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
  const [mainImage, setMainImage] = useState(product?.images?.[0] || product?.image)

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
    alert(`${quantity} × ${product.name} added to cart!`)
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

  // Get related products (same category, excluding current)
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Back button */}
      <button onClick={() => navigate(-1)} className="text-amber-600 mb-4 flex items-center gap-1 hover:underline">
        ← Back to Shop
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left column – Image Gallery */}
        <div>
          <div className="mb-4">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full rounded-lg shadow-lg object-cover h-96"
            />
          </div>
          {/* Thumbnail gallery */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {(product.images || [product.image]).map((img, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(img)}
                className={`border-2 rounded-md overflow-hidden ${mainImage === img ? 'border-amber-600' : 'border-transparent'}`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-20 h-20 object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right column – Product info */}
        <div>
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <button onClick={handleFavorite} className="text-3xl focus:outline-none">
              {isFavorite(product.id) ? '❤️' : '🤍'}
            </button>
          </div>
          <p className="text-gray-600 mb-2">By {product.supplier}</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500">★</span>
            <span>{product.rating} / 5</span>
          </div>
          <p className="text-3xl text-amber-700 font-bold mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          {/* Quantity selector */}
          <div className="flex items-center gap-4 mb-6">
            <label className="font-semibold">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="border rounded w-20 p-2 text-center"
            />
          </div>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <Button onClick={handleAddToCart} className="w-full md:w-auto px-8 py-3 text-lg">
            Add to Cart 🛒
          </Button>
          
          {/* Additional info */}
          <div className="mt-8 border-t pt-6">
            <h3 className="font-semibold mb-2">Product Details</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✓ Handcrafted in Rajasthan</li>
              <li>✓ Ethically sourced materials</li>
              <li>✓ Free shipping on orders over $50</li>
              <li>✓ 7-day return policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(rel => (
              <div key={rel.id} className="border rounded p-3 hover:shadow transition">
                <img
                  src={rel.image}
                  alt={rel.name}
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <h3 className="font-semibold">{rel.name}</h3>
                <p className="text-amber-700 font-bold">${rel.price}</p>
                <button
                  onClick={() => navigate(`/product/${rel.id}`)}
                  className="text-amber-600 text-sm hover:underline mt-1"
                >
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails