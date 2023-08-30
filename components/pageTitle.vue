<template>
  <div class="d-flex justify-center mb-8">
    <div class="text-center">
      <h1>Drinks of {{ title !== undefined && title.trim() !== '' ? title : 'All' }}</h1>
      <span class="text-grey-darken-1">{{ description }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string | undefined, description: string
}>();
</script>