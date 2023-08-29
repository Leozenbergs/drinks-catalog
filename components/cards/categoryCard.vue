<template>
  <v-card v-if="!!item" :width="200" :height="200">
    <v-card-title>{{ item.strCategory }}</v-card-title>
  </v-card>
</template>


<script lang="ts" setup>
  import { CategoryType } from '../../types/categoryType';

  const { item } = defineProps<{
    item: CategoryType
  }>()
</script>