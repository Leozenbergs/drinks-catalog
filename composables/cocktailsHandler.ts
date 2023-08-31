import { _AsyncData } from 'nuxt/dist/app/composables/asyncData';
import { getDrinksByCategory,
  getCocktailByName,
  getDrinkDetailsById,
  getAllCategories } from '~/composables/cocktails';

export async function getCategoryCocktails(category: string | undefined) {
  try {
    const items = await getDrinksByCategory(category)
    return items
  } catch(e) {
    console.log(e);
    useState('error', () => true)
  }
}

export async function getCocktailsByName(search: string | undefined) {
  try {
    const items = await getCocktailByName(search)
    return items
  } catch(e) {
    console.log(e);
    useState('error', () => true)
  }
}

export async function getAllCocktails() {
  try {
    const items = await getCocktailByName('')
    return items
  } catch(e) {
    console.log(e);
    useState('error', () => true)
  }
}

export async function getDetailsById(id: string | undefined) {
  try {
    const details = await getDrinkDetailsById(id)
    return details
  } catch(e) {
    console.log(e)
    useState('error', () => true)
  }
}

export async function getCategories() {
  try {
    const items = await getAllCategories()
    return items
  } catch(e) {
    console.log(e);
    useState('error', () => true)
  }
}
