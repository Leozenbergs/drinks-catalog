<template>
  <v-card :width="200" :height="250" class="cursor-pointer mb-8">
    <v-img
      :src="drink.strDrinkThumb"
      gradient="to top right, rgba(0,0,0, .6), rgba(255, 255, 255, 0)"
      height="200px"
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
    <v-card-title>{{ drink.strDrink }}</v-card-title>
  </v-card>
</template>

<script lang="ts" setup>
import { CocktailType } from '~/types/cocktailType';

const { drink } = defineProps<{
  drink: CocktailType
}>()
</script>