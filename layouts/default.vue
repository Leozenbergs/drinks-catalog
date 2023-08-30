<template>
  <v-layout>
    <main-app-bar></main-app-bar>
    <v-main>
      <NuxtPage />
      <page-footer />
      <error-alert v-if="statusError" />
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
import MainAppBar from "../components/app-bar/mainBar.vue";
import pageFooter from "../components/footers/pageFooter.vue";
import errorAlert from "../components/alerts/errorAlert.vue";

const statusError = useState('error')

</script>

<style>
.cursor-pointer {
  cursor: pointer;
}

</style>