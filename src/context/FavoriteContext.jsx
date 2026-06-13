import { createContext, useContext, useState, useEffect } from 'react'

const FavoriteContext = createContext()

export const useFavorite = () => useContext(FavoriteContext)

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (product) => {
    if (!favorites.some(item => item.id === product.id)) {
      setFavorites([...favorites, product])
    }
  }

  const removeFromFavorites = (productId) => {
    setFavorites(favorites.filter(item => item.id !== productId))
  }

  const isFavorite = (productId) => favorites.some(item => item.id === productId)

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  )
}