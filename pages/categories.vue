<template>
  <v-container class="categories">
    <page-title title="All Categories" description="Choose a category" />

    <div class="d-flex justify-start align-center my-4">
      <v-tooltip text="Return to index">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            variant="flat"
            color="neutral1"
            icon
            @click="navigateToIndex"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </template>
      </v-tooltip>
    </div>

    <div v-if="!loading">
      <v-list variant="flat" class="bg-transparent">
        <template v-for="(value, index) in categories" :key="index">
          <v-hover>
            <template v-slot:default="{ isHovering, props}">
              <v-list-item
                v-bind="props"
                rounded
                :class="`mb-2 ${isHovering ? 'bg-secondary' : '#fff'}`"
                @click="navigate(value)"
              >
                <v-list-item-title>{{ value.strCategory }}</v-list-item-title>
              </v-list-item>
            </template>
          </v-hover>
        </template>
      </v-list>
    </div>
    <div v-else class="d-flex justify-center">
      <v-progress-circular color="secondary" indeterminate></v-progress-circular>
    </div>

  </v-container>
</template>

<script lang="ts" setup>
  import categoryCard from '../components/cards/categoryCard.vue';
  import pageTitle from '../components/pageTitle.vue';

  import { getCategories } from '../composables/cocktailsHandler';
  import { CategoryType } from '~/types/categoryType';

  const categories = ref()
  const loading = ref(true)

  onMounted(async () => {
    categories.value = await getCategories()
    loading.value = false
  })

  function navigateToIndex() {
    return navigateTo({
      path: '/'
    })
  }

  function navigate(item: CategoryType) {
    return navigateTo({
      path: '/drinks',
      query: {
        "category": item.strCategory
      }
    })
  }
</script>

<style scoped>
.categories {
  height: 90vh;
}
</style>