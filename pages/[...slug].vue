<template>
  <v-container class="not-found">
    <div class="d-flex-justify-center text-center">
      <h1>404 Page not found</h1>
    </div>
  </v-container>
</template>

<script lang="ts" setup></script>

<style scoped>
.not-found {
  height: 70vh;
  background-image: url('/img/404.svg');
  background-position: center;
  background-size: contain;
}
</style>