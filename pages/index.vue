<template>
  <v-container>
    <page-title title="All Categories" description="Choose a category" />

    <v-row
      v-if="!loading"
      center-affix
    >
      <v-col        
        v-for="(value, index) in categories"
        :lg="4"
        :sm="6"
        :xs="12"
        :key="index"
        class="mb-8 d-flex justify-center"
      >
        <category-card :item="value"/>
      </v-col>
    </v-row>
    <div v-else class="d-flex justify-center">
      <v-progress-circular color="secondary" indeterminate></v-progress-circular>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
  import { getCategories } from '../composables/cocktailsHandler';
  import categoryCard from '../components/cards/categoryCard.vue';
  import pageTitle from '../components/pageTitle.vue';

  const categories = ref()
  const loading = ref(true)

  onMounted(async () => {
    categories.value = await getCategories()
    loading.value = false
  })

</script>