<template>
  <v-container>
    <h1 class="d-flex justify-center mb-4">All Categories</h1>
    {{ categories }}
  </v-container>
</template>

<script lang="ts" setup>
  import { useState } from 'nuxt/app';
  import { ref, onMounted } from 'vue'
  
  import { getCocktailByName, getAllCategories } from '../composables/cocktails';

  const drinks = ref([])
  const categories = ref([])

  onMounted(async() => {
    const cocktails = await getCocktailByName('margarita')
    drinks.value = useState('drinks', () => cocktails.data)

    const teste = await getAllCategories()
    categories.value = useState('categories', () => teste.data)
  })
</script>