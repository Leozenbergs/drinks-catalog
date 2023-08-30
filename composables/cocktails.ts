import { AsyncData, NuxtError, useFetch } from 'nuxt/app';
import { ICocktails } from '@/types/cocktailType'; 
import { ICategories } from '@/types/categoryType';

const API_URL = process.env.API_URL || 'https://www.thecocktaildb.com/api/json/v1/1'

export const getCocktailByName = async (name: string | undefined): Promise<AsyncData<ICocktails, NuxtError>> => {
  const { data, error, status } = await useFetch<ICocktails>(() => `${API_URL}/search.php?s=${name}`)

  const statusCode = parseInt(status.value)

  if(status.value !== "success") throw createError({
    statusCode: statusCode,
    statusMessage: error.value?.message
  })

  return data.value?.drinks
}

export const getAllCategories = async (): Promise<AsyncData<ICategories, NuxtError>> => {
  const { data, error, status} = await useFetch<ICategories>(() => `${API_URL}/list.php?c=list`)

  const statusCode = parseInt(status.value)

  if(status.value !== "success") throw createError({
    statusCode: statusCode,
    statusMessage: error.value?.message
  })

  return data.value?.drinks

}

export const getDrinksByCategory = async (category: string | undefined): Promise<AsyncData<ICocktails, NuxtError>> => {
  const { data, error, status } = await useFetch<ICocktails>(() => `${API_URL}/filter.php?c=${category}`)

  const statusCode = parseInt(status.value)

  if(status.value !== "success") throw createError({
    statusCode: statusCode,
    statusMessage: error.value?.message
  })

  return data.value?.drinks
}

export const getDrinkDetailsById = async (id: string | undefined): Promise<AsyncData<ICocktails, NuxtError>> => {
  const { data, error, status} = await useFetch<ICocktails>(() => `${API_URL}/lookup.php?i=${id}`)

  const statusCode = parseInt(status.value)

  if(status.value !== "success") throw createError({
    statusCode: statusCode,
    statusMessage: error.value?.message
  })

  return data.value?.drinks[0]
}

