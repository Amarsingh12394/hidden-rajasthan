import { useFavorite } from '../../context/FavoriteContext'
import ProductCard from '../../components/ProductCard/ProductCard'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'

const Favorites = () => {
  const { favorites } = useFavorite()

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl mb-4">No favorites yet</h2>
        <Link to="/shop"><Button>Start Shopping</Button></Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {favorites.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Favorites