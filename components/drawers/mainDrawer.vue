<template>
  <v-navigation-drawer
    location="left"
    density="compact"
    expand-on-hover
    rail
    permanent
  >
    <v-list>
      <v-list-item @click="showCategories">
        <template v-slot:prepend>
          <v-icon icon="mdi-format-list-bulleted" color="primary"></v-icon>
        </template>
        <v-list-icon-title class="text-grey-darken-1">Categories</v-list-icon-title>
      </v-list-item>
      <v-list-item @click="showFavorites">
        <template v-slot:prepend>
          <v-icon icon="mdi-star" color="primary"></v-icon>
        </template>
        <v-list-icon-title class="text-grey-darken-1">Favorites</v-list-icon-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
function showFavorites() {
  return navigateTo({
    path: `/favorites`
  })
}

function showCategories() {
  return navigateTo({
    path: `/categories`
  })
}
</script>
