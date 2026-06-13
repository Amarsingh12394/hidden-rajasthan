import { createContext, useContext, useState, useEffect } from 'react'

const FavoriteContext = createContext()

export const useFavorite = () => {
  const context = useContext(FavoriteContext)
  if (!context) {
    throw new Error('useFavorite must be used within a FavoriteProvider')
  }
  return context
}

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites')
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch (error) {
        console.error('Failed to parse favorites from localStorage', error)
        return []
      }
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (product) => {
    setFavorites((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        return prev
      }
      return [...prev, product]
    })
  }

  const removeFromFavorites = (productId) => {
    setFavorites((prev) => prev.filter((item) => item.id !== productId))
  }

  const isFavorite = (productId) => {
    return favorites.some((item) => item.id === productId)
  }

  const clearFavorites = () => {
    setFavorites([])
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}