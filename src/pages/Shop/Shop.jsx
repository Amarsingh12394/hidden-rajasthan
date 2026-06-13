import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { products } from '../../data/products'
import { categories } from '../../data/categories'
import ProductCard from '../../components/ProductCard/ProductCard'

const Shop = () => {
  const [filterCategory, setFilterCategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()

  // Read query params from URL (e.g., ?category=rugs or ?search=wool)
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const catParam = params.get('category')
    const searchParam = params.get('search')
    if (catParam) {
      const matchedCat = categories.find(c => c.slug === catParam)
      if (matchedCat) setFilterCategory(matchedCat.name)
    }
    if (searchParam) setSearchQuery(searchParam)
  }, [location.search])

  // Filter products
  let filteredProducts = [...products]
  if (filterCategory) {
    filteredProducts = filteredProducts.filter(p => p.category === filterCategory)
  }
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shop All Products</h1>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilterCategory('')}
          className={`px-4 py-2 rounded ${!filterCategory ? 'bg-amber-600 text-white' : 'bg-gray-200'}`}
        >
          All
        </button>
        {categories.map(cat => (
          <button
            key={cat.slug}
            onClick={() => setFilterCategory(cat.name)}
            className={`px-4 py-2 rounded ${filterCategory === cat.name ? 'bg-amber-600 text-white' : 'bg-gray-200'}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-96 border rounded px-4 py-2"
        />
      </div>

      {/* Products grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-center py-10">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Shop