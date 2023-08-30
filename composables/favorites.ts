import { CocktailType } from "~/types/cocktailType"

export const setFavorite = (details: CocktailType) => {
  let favorites = localStorage.getItem('favorites')
  let favoriteDrinks = !!favorites ? JSON.parse(favorites) : []

  favoriteDrinks.push({
    idDrink: details?.idDrink,
    strDrinkThumb: details?.strDrinkThumb
  })

  localStorage.setItem('favorites', JSON.stringify(favoriteDrinks))
}

export const getFavoriteById = (id: string) => {
  let favorites = localStorage.getItem('favorites')
  let favoriteDrinks = !!favorites ? JSON.parse(favorites) : []

  return favoriteDrinks.find((drink: CocktailType) => drink.idDrink === id)
}

export const removeFavorite = (id: string) => {
  let favorites = localStorage.getItem('favorites')
  let favoriteDrinks = !!favorites ? JSON.parse(favorites) : []

  const index = favoriteDrinks.indexOf((drink: CocktailType) => drink.idDrink === id)

  favoriteDrinks.splice(index, 1)

  localStorage.setItem('favorites', JSON.stringify(favoriteDrinks))
}