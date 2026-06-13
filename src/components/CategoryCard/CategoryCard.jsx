import { Link } from 'react-router-dom'

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/shop?category=${category.slug}`} className="block group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition duration-500"
          />
          {/* Dark gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
          {/* Category name overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-xl md:text-2xl font-bold text-white text-center drop-shadow-lg">
              {category.name}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard