<template>
  <div class="d-flex justify-center mb-8">
    <div class="text-center">
      <h1>Drinks of {{ title !== undefined && title !== '' ? title : 'All' }}</h1>
      <span class="text-grey-darken-1">{{ description }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { title, description } = defineProps<{
  title: string, description: string
}>();
</script>