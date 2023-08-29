import { Cocktail } from '@/types/cocktail'; 
import { Category } from '@/types/category';

const API_URL = process.env.API_URL || 'https://www.thecocktaildb.com/api/json/v1/1'

interface IFetchResult<T> {
  data: T | null;
  pending: any | null
  error: any | null;
}

export const getCocktailByName = async (name: string):Promise<IFetchResult<Cocktail[]>> => {
  return await useFetch<Cocktail[]>(() => `${API_URL}/search.php?s=${name}`)
}

export const getAllCategories = async (): Promise<IFetchResult<Category[]>> => {
  return await useFetch<Category[]>(() => `${API_URL}/list.php?c=list`)
}

export const getDrinksByCategory = async (category: string): Promise<IFetchResult<Cocktail[]>> => {
  return await useFetch<Cocktail[]>(() => `${API_URL}/filter.php?c=${category}`)
}
