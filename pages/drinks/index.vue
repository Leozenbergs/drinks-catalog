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
import drinkCard from "../../components/cards/drinkCard.vue"
import pageTitle from '../../components/pageTitle.vue';

import {
  getCocktailsByName,
  getCategoryCocktails,
  getAllCocktails
} from "~/composables/cocktailsHandler";

const drinks = ref()
const loading = ref(true)

const { currentRoute } = useRouter()
const routeQuery = currentRoute.value.query
const category = ref(routeQuery.category)
const search = ref(routeQuery.search)

watch(() => currentRoute.value.query, async (query) => {
  category.value = query.category
  search.value = query.search

  await buildRequests()
  loading.value = false
}, { deep: true, immediate: true })

async function buildRequests() {
  const noSearch = (!search.value && search.value?.toString().trim() !== '')
  const hasCategory = !!category.value

  if(noSearch && hasCategory) return drinks.value = await getCategoryCocktails(category.value?.toString())
  if(!noSearch && !hasCategory) return drinks.value = await getCocktailsByName(search.value?.toString())
  return drinks.value = getAllCocktails()
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
