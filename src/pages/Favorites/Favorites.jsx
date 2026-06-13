import { useFavorite } from '../../context/FavoriteContext'
import ProductCard from '../../components/ProductCard/ProductCard'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'

const Favorites = () => {
  const { favorites } = useFavorite()

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your wishlist is empty ❤️</h2>
        <p className="text-gray-600 mb-6">Save your favourite products here and order them later.</p>
        <Link to="/shop">
          <Button>Start Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Your Favourites</h1>
      <p className="text-gray-600 mb-6">{favorites.length} item(s) saved</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {favorites.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Favorites