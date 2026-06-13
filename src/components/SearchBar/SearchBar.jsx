import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="grow border rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
      <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded-r hover:bg-amber-700">
        🔍
      </button>
    </form>
  )
}

export default SearchBar