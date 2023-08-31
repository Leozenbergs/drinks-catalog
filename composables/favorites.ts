import { CocktailType } from "~/types/cocktailType"

export const setFavorite = (details: CocktailType) => {
  let favorites = localStorage.getItem('favorites')
  let favoriteDrinks = !!favorites ? JSON.parse(favorites) : []

  favoriteDrinks.push({
    idDrink: details?.idDrink,
    strDrink: details?.strDrink,
    strDrinkThumb: details?.strDrinkThumb
  })

  localStorage.setItem('favorites', JSON.stringify(favoriteDrinks))
}

export const getFavoriteById = (id: string) => {
  const favorites = localStorage.getItem('favorites')
  const favoriteDrinks = !!favorites ? JSON.parse(favorites) : []

  return favoriteDrinks.find((drink: CocktailType) => drink.idDrink === id)
}

export const removeFavorite = (id: string) => {
  const favorites = localStorage.getItem('favorites')
  const favoriteDrinks = !!favorites ? JSON.parse(favorites) : []

  const drinkIds = favoriteDrinks.map((drink: CocktailType) => drink.idDrink)

  const index = drinkIds.indexOf(id)

  favoriteDrinks.splice(index, 1)

  localStorage.setItem('favorites', JSON.stringify(favoriteDrinks))
}