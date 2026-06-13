import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { useCart } from '../../context/CartContext'
import { useFavorite } from '../../context/FavoriteContext'
import { useUser } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const { favorites, addToFavorites, removeFromFavorites, isFavorite } = useFavorite()
  const { user } = useUser()
  const navigate = useNavigate()

  const handleAddToCart = () => {
    if (!user) {
      navigate('/login')
      return
    }
    addToCart(product)
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
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition relative">
      <button onClick={handleFavorite} className="absolute top-2 right-2 text-2xl">
        {isFavorite(product.id) ? '❤️' : '🤍'}
      </button>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
        <h3 className="font-semibold mt-2">{product.name}</h3>
        <p className="text-amber-700 font-bold">${product.price}</p>
      </Link>
      <Button onClick={handleAddToCart} className="mt-2 w-full">Add to Cart</Button>
    </div>
  )
}

export default ProductCard