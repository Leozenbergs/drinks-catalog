<template>
  <v-card :width="250" :height="300" class="mb-8">
    <div class="p-relative cursor-pointer" @click="showDetails">
      <div class="overlay d-flex align-center justify-center">
        <v-btn color="primary mt-4" class="details">Details</v-btn>
      </div>
      <v-img
        :src="drink.strDrinkThumb"
        gradient="to top right, rgba(0,0,0, .7), rgba(255, 255, 255, 0)"
        height="250px"
        class="image"
      >
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="secondary"
              indeterminate
            ></v-progress-circular>
          </div>
        </template>
      </v-img>
    </div>
    <v-card-title>{{ drink.strDrink }}</v-card-title>
  </v-card>
</template>

<script lang="ts" setup>
import { CocktailType } from '~/types/cocktailType';

const { drink } = defineProps<{
  drink: CocktailType
}>()

function showDetails() {
  return navigateTo({
    path: `/drinks/${drink.idDrink}`
  })
}
</script>

<style>
.p-relative {
  position: relative;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease-in-out;
  backface-visibility: hidden;
  z-index: 1;
}
.details {
  opacity: 0;
}
.overlay {
  width: 250px;
  height: 250px;
  transition: .5s ease-in-out;  
  background: rgba(0,0,0,0);
  position: absolute;
}

.p-relative:hover .image, .p-relative:hover .details {
  opacity: 1;
}

.p-relative:hover .overlay {
  background: rgba(0,0,0,.7);
  z-index: 10;
}
</style>
