<template>
  <v-container>
    <h1 class="d-flex justify-center mb-4">All Categories</h1>
    <v-row no-gutters class="justify-start">
      <v-col
        v-for="(value, index) in categories"
        :xl="4"
        :xs="12"
        :key="index"
        class="mb-4"
      >
        <category-card :item="value"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import { useState } from 'nuxt/app';
  import { ref, onMounted } from 'vue'
  
  import { getCocktailByName, getAllCategories } from '../composables/cocktails';
  import categoryCard from '../components/cards/categoryCard.vue';

  const categories = ref()

  // const cocktails = async () => getCocktailByName('margarita')
  // const drinks = cocktails
  // useState('drinks', () => cocktails)

  async function setCategories() {
    const categoryItems = await getAllCategories()
    categories.value = categoryItems
    useState('categories', () => categoryItems)
  }

  onMounted(() => {
    setCategories()
  })

</script>