<template>
  <v-navigation-drawer
    location="left"
    density="compact"
    rail
    permanent
  >
    <v-list>
      <v-tooltip text="Favorites">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" @click="showFavorites">
            <template v-slot:prepend>
              <v-icon icon="mdi-star" color="primary"></v-icon>
            </template>
          </v-list-item>
        </template>
      </v-tooltip>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
function showFavorites() {
  return navigateTo({
    path: `/favorites`
  })
}
</script>
