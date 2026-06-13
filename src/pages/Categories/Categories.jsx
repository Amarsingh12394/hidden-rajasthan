import { categories } from '../../data/categories'
import CategoryCard from '../../components/CategoryCard/CategoryCard'

const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">All Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map(cat => (
          <CategoryCard key={cat.slug} category={cat} />
        ))}
      </div>
    </div>
  )
}
export default Categories