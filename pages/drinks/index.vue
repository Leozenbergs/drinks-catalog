<template>
  <v-container class="background">
    <page-title :title='category?.toString() || search?.toString()' description="Choose a drink" />

    <v-row
      v-if="!loading"
      center-affix
    >
      <v-col        
        v-for="(drink, index) in drinks"
        :sm="4"
        :xs="12"
        class="mb-8 d-flex justify-center"
        :key="index"
      >
        <drink-card :drink="drink"></drink-card>
      </v-col>
    </v-row>
    <div v-else class="d-flex justify-center">
      <v-progress-circular color="secondary" indeterminate></v-progress-circular>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import { _AsyncData } from 'nuxt/dist/app/composables/asyncData';
import { ref, watch } from 'vue'

import { ICategories } from '~/types/categoryType';
import drinkCard from "../../components/cards/drinkCard.vue"
import pageTitle from '../../components/pageTitle.vue';

import { getDrinksByCategory, getCocktailByName } from '../../composables/cocktails';


const drinks = ref()
const loading = ref(true)

const { currentRoute } = useRouter()
const routeQuery = currentRoute.value.query
const category = ref(routeQuery.category)
const search = ref(routeQuery.search)

watch(() => currentRoute.value.query, (query) => {
  !!query.category ? category.value = query.category : search.value = query.search

  if((!search.value && search.value !== '') && !!category.value) return getCategoryCocktails()
  if(!!search.value && !category.value) return getCocktailsByName()
  return getAllCocktails()
}, { deep: true, immediate: true })


async function getCategoryCocktails() {
  try {
    const items = await getDrinksByCategory(category.value?.toString())
    setDrinks(items)
  } catch(e) {
    console.log(e);
    useState('error', () => true)
  } finally {
    loading.value = false
  }
}

async function getCocktailsByName() {
  try {
    const items = await getCocktailByName(search.value?.toString())
    setDrinks(items)
  } catch(e) {
    console.log(e);
    useState('error', () => true)
  } finally {
    loading.value = false
  }
}

async function getAllCocktails() {
  try {
    const items = await getCocktailByName('')
    setDrinks(items)
  } catch(e) {
    console.log(e);
    useState('error', () => true)
  } finally {
    loading.value = false
  }
}

const setDrinks = (items: _AsyncData<ICategories, Error>) => {
  drinks.value = undefined
  drinks.value = items
  useState('cocktails', () => items)
}
</script>

<style>
.background {
  background-image: url('/img/red-drink.svg');
  background-position: bottom;
  background-size: 40%;
  min-height: 90vh;
}
</style>
