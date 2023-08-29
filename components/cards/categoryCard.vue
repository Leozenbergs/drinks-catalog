<template>
  <v-card
    v-if="!!item"
    :width="300"
    :height="300"
    @click="navigate"
    class="d-flex align-center justify-center cursor-pointer"
  >
    <h4 class="text-button"><b>{{ item.strCategory }}</b></h4>
  </v-card>
</template>


<script lang="ts" setup>
  import { CategoryType } from '../../types/categoryType';

  function navigate() {
    return navigateTo({
      path: '/drinks',
      query: {
        "category": item.strCategory
      }
    })
  }

  const { item } = defineProps<{
    item: CategoryType
  }>()
</script>

<style scoped>
.card-gradient {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), center center / cover no-repeat
}
</style>
