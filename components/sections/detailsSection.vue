<template>
  <div class="ml-8">
    <div><strong>Instructions: </strong>{{ details?.strInstructions }}</div>
    <div><strong>Is alcoholic: </strong>{{ details?.strAlcoholic }}</div>
    <div><strong>Best glass: </strong>{{ details?.strGlass }}</div>
    <div><strong>Ingredients: </strong>
      <ul class="ml-8">
        <li>{{ details?.strIngredient1 !== null ? details?.strIngredient1 : 'Not informed' }}</li>
        <li>{{ details?.strIngredient2 !== null ? details?.strIngredient2 : 'Not informed' }}</li>
        <li>{{ details?.strIngredient3 !== null ? details?.strIngredient3 : 'Not informed' }}</li>
        <li>{{ details?.strIngredient4 !== null ? details?.strIngredient4 : 'Not informed' }}</li>
        <li>{{ details?.strIngredient5 !== null ? details?.strIngredient5 : 'Not informed' }}</li>
      </ul>
    </div>
    <div><strong>Creative commons confirmed: </strong>{{ details?.strCreativeCommonsConfirmed }}</div>
  </div>
</template>

<script setup lang="ts">
import { CocktailType } from "~/types/cocktailType"

defineProps<{
  details: CocktailType
}>()
</script>