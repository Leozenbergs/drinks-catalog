<template>
  <v-app-bar app elevation="1" color="secondary">
    <v-app-bar-title
      @click="() => navigateTo({path: '/'})"
      class="cursor-pointer"
    >
      &#x1F378;
      Drinks Catalog
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-text-field
      v-model="search"
      name="search"
      density="compact"
      variant="outlined"
      placeholder="Search drinks"
      prepend-inner-icon="mdi-magnify"
      rounded
      hide-details
      @keyup.enter="searchDrinks"
      class="mr-2"
    />
  </v-app-bar>

</template>

<script lang="ts" setup>
import { ref } from 'vue'

const search = ref()

function searchDrinks() {
  return navigateTo({
    path: '/drinks',
    query: {
      "search": search.value
    }
  })
}
</script>