import { useFetch } from 'nuxt/app';
import { CocktailType } from '@/types/cocktailType'; 
import { CategoryType } from '@/types/categoryType';

const API_URL = process.env.API_URL || 'https://www.thecocktaildb.com/api/json/v1/1'

export const getCocktailByName = async (name: string): Promise<CocktailType[]> => {
  const { data, error} = await useFetch<CocktailType[]>(() => `${API_URL}/search.php?s=${name}`)
  return data._value.drinks
}

export const getAllCategories = async (): Promise<CategoryType[]> => {
  const { data, error} = await useFetch<CategoryType[]>(() => `${API_URL}/list.php?c=list`)
  return data._value.drinks
}

export const getDrinksByCategory = async (category: string): Promise<CocktailType[]> => {
  const { data, error} = await useFetch<CocktailType[]>(() => `${API_URL}/filter.php?c=${category}`)
  return data._value.drinks
}
