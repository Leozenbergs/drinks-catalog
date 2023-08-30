<template>
  <v-dialog
    v-model="dialog"
    height="90%"
    width="70vw"
    transition="slide-x-reverse-transition"
  >
    <v-card
      rounded="lg"
      v-click-outside="close"
    >
      <v-card-title class="d-flex">
        <div>{{ details?.strDrink }}</div>
        <v-spacer></v-spacer>
        <v-btn
          variant="text"
          icon
          :color="isFavorite ? 'primary' : '#333'"
          @click="toggleFavorite"
        >
          <v-icon>{{ isFavorite ? 'mdi-star' : 'mdi-star-outline'}}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle><strong>Category: </strong>{{ details?.strCategory }}</v-card-subtitle>
      <v-card-text>
        <div class="d-flex justify-space-between pt-4">
          <v-img
            :src="details?.strDrinkThumb"
            gradient="to top right, rgba(0,0,0, .7), rgba(255, 255, 255, 0)"
            :height="500"
            width="50%"
            cover
            class="rounded-lg"
          />
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
        </div>

        <div v-if="!!details?.strVideo">
          <strong>Video: </strong> 
          <video width="400" controls>
            <source :src="details?.strVideo" type="video/mp4">
            Your browser does not support HTML video.
          </video>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" variant="tonal" width="100%" @click="close">Close Dialog</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

import { getDrinkDetailsById } from '../../composables/cocktails';
import { setFavorite, getFavoriteById, removeFavorite } from '../../composables/favorites';

const router = useRouter()
const routeQuery = router.currentRoute.value

const id = routeQuery.params.id

const dialog = ref(true)
const details = ref()

watch(() => router.currentRoute.value, (query) => {
  return getDetailsById()
}, { immediate: true })

const isFavorite = computed( () => !!getFavoriteById(id.toString()))

async function getDetailsById() {
  try {
    const drinkDetails = await getDrinkDetailsById(id?.toString())
    details.value = drinkDetails
  } catch(e) {
    console.log(e)
    useState('error', () => true)
  }
}

function toggleFavorite() {
  isFavorite ? removeFavorite(id.toString()) : setFavorite(details.value)
}

function close() {
  dialog.value = false
  router.go(-1)
}
</script>