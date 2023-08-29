import { AsyncData, useFetch } from 'nuxt/app';
import { ICocktails } from '@/types/cocktailType'; 
import { ICategories } from '@/types/categoryType';

const API_URL = process.env.API_URL || 'https://www.thecocktaildb.com/api/json/v1/1'

export const getCocktailByName = async (name: string | undefined): Promise<AsyncData<ICocktails, Error>> => {
  const { data, error} = await useFetch<ICocktails>(() => `${API_URL}/search.php?s=${name}`)
  return data.value?.drinks
}

export const getAllCategories = async (): Promise<AsyncData<ICategories, Error>> => {
  const { data, error} = await useFetch<ICategories>(() => `${API_URL}/list.php?c=list`)
  return data.value?.drinks
}

export const getDrinksByCategory = async (category: string | undefined): Promise<AsyncData<ICocktails, Error>> => {
  const { data, error} = await useFetch<ICocktails>(() => `${API_URL}/filter.php?c=${category}`)
  return data.value?.drinks
}
