<template>
  <v-container>
    <page-title title="All Categories" description="Choose a category" />

    <div
      v-if="!!categories"
      class="d-flex justify-space-around flex-wrap"
    >
      <div        
        v-for="(value, index) in categories"
        :key="index"
        class="mb-8"
      >
        <category-card :item="value"/>
      </div>
    </div>
    <div v-else class="d-flex justify-center">
      <v-progress-circular color="secondary" indeterminate></v-progress-circular>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
  import { useState } from 'nuxt/app';
  import { ref, onMounted } from 'vue'
  
  import { getAllCategories } from '../composables/cocktails';
  import categoryCard from '../components/cards/categoryCard.vue';
  import pageTitle from '../components/pageTitle.vue';

  const categories = ref()


  async function setCategories() {
    const categoryItems = await getAllCategories()
    categories.value = categoryItems
    useState('categories', () => categoryItems)
  }

  onMounted(() => {
    setCategories()
  })

</script>
