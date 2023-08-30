<template>
  <v-layout>
    <main-app-bar></main-app-bar>
    <main-drawer></main-drawer>
    <v-main class="bg-background">
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
import mainDrawer from '../components/drawers/mainDrawer.vue';

const statusError = useState('error')

</script>

<style>
.cursor-pointer {
  cursor: pointer;
}

</style>