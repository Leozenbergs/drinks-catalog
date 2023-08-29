<template>
  <v-layout class="background">
    <main-app-bar></main-app-bar>
    <v-main>
      <NuxtPage />
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
import MainAppBar from "../components/app-bar/mainBar.vue";

</script>

<style>
.cursor-pointer {
  cursor: pointer;
}

.background {
  background-image: url('/img/red-drink.svg');
  background-position: bottom;
  background-size: 40%;
  min-height: 90vh;
}
</style>