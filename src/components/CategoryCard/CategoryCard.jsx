import { Link } from 'react-router-dom'

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/shop?category=${category.slug}`} className="block group">
      <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
        <img src={category.image} alt={category.name} className="w-full h-40 object-cover group-hover:scale-105 transition" />
        <div className="p-3 text-center font-semibold">{category.name}</div>
      </div>
    </Link>
  )
}

export default CategoryCard