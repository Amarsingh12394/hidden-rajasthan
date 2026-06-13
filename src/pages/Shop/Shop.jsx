import { useState } from 'react'
import { products } from '../../data/products'
import ProductCard from '../../components/ProductCard/ProductCard'
import { categories } from '../../data/categories'

const Shop = () => {
  const [filter, setFilter] = useState('')
  const filtered = filter ? products.filter(p => p.category === filter) : products

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Shop All Products</h1>
      <div className="flex gap-3 mb-6 overflow-x-auto">
        <button onClick={() => setFilter('')} className={`px-3 py-1 rounded ${!filter ? 'bg-amber-600 text-white' : 'bg-gray-200'}`}>All</button>
        {categories.map(cat => <button key={cat.slug} onClick={() => setFilter(cat.name)} className={`px-3 py-1 rounded ${filter === cat.name ? 'bg-amber-600 text-white' : 'bg-gray-200'}`}>{cat.name}</button>)}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{filtered.map(p => <ProductCard key={p.id} product={p} />)}</div>
    </div>
  )
}
export default Shop