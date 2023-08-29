<template>
  <v-container>
    <page-title :title='category?.toString() || search?.toString()' description="Choose a drink" />

    <div
      v-if="!!drinks"
      class="d-flex justify-space-around flex-wrap"
    >
      <drink-card :drink="drink" v-for="(drink, index) in drinks" :key="index"></drink-card>
    </div>
    <div v-else class="d-flex justify-center">
      <v-progress-circular color="secondary" indeterminate></v-progress-circular>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import { _AsyncData } from 'nuxt/dist/app/composables/asyncData';
import { ref, watch } from 'vue'

import { ICategories } from '~/types/categoryType';
import drinkCard from "../components/cards/drinkCard"
import pageTitle from '../components/pageTitle.vue';

import { getDrinksByCategory, getCocktailByName, getAllCategories } from '../composables/cocktails';


const drinks = ref()

const { currentRoute } = useRouter()
const routeQuery = currentRoute.value.query
const category = ref(routeQuery.category)
const search = ref(routeQuery.search)

watch(() => currentRoute.value.query, (query) => {
  !!query.category ? category.value = query.category : search.value = query.search

  if((!search.value && search.value !== '') && !!category.value) return getCategoryCocktails()
  if(!!search.value || !category.value) return getCocktailsByName()
  return getAllCocktails()
}, { deep: true, immediate: true })


async function getCategoryCocktails() {
  const items = await getDrinksByCategory(category.value?.toString())
  setDrinks(items)
}

async function getCocktailsByName() {
  const items = await getCocktailByName(search.value?.toString())
  setDrinks(items)
}

async function getAllCocktails() {
  const items = await getCocktailByName('')
  setDrinks(items)
}

const setDrinks = (items: _AsyncData<ICategories, Error>) => {
  drinks.value = undefined
  drinks.value = items
  useState('cocktails', () => items)
}


</script>
