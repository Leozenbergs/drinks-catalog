<template>
  <v-app-bar app flat color="secondary">
    <v-app-bar-title>Drinks Catalog</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-text-field
      name="search"
      density="compact"
      variant="outlined"
      placeholder="Busque um drink"
      prepend-inner-icon="mdi-magnify"
      rounded
      hide-details
      class="mr-2"
    />
  </v-app-bar>

</template>

<script lang="ts" setup>
</script>