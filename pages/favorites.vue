<template>
  <v-container class="background">
    <div class="d-flex justify-center mb-8">
      <div class="text-center">
        <h1>Favorite Drinks</h1>
      </div>
    </div>

    <v-row
      v-if="favoriteDrinks?.length"
      center-affix
    >
      <v-col        
        v-for="(drink, index) in favoriteDrinks"
        :lg="4"
        :sm="6"
        :xs="12"
        :key="index"
        class="mb-8 d-flex justify-center"
      >
        <drink-card :drink="drink"/>
      </v-col>
    </v-row>
    <div v-else class="d-flex justify-center">
      <div class="text-grey-darken-1">Nenhum favorito encontrado</div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
  import drinkCard from '~/components/cards/drinkCard.vue';

  const favoriteDrinks = ref([])
  const favorites = localStorage.getItem('favorites')
  
  onMounted(() => {
    favoriteDrinks.value = favorites !== "[]" ? JSON.parse(favorites) : []
  })

</script>

<style>
.background {
  background-image: url('/img/red-drink.svg');
  background-position: bottom;
  background-size: 40%;
  min-height: 90vh;
}
</style>