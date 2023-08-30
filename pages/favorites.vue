<template>
  <v-container class="background">
    <page-title
      title="Favorites"
      description="These are the drinks you marked as favorite"
    />

    drinks
  </v-container>
</template>

<script setup lang="ts">
  import pageTitle from '../components/pageTitle.vue';
</script>

<style>
.background {
  background-image: url('/img/red-drink.svg');
  background-position: bottom;
  background-size: 40%;
  min-height: 90vh;
}
</style>