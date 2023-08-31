<template>
  <v-container>
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
          <v-tooltip text="Favorite">
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                variant="text"
                icon
                :color="isFavorite ? 'primary' : '#333'"
                @click="toggleFavorite"
              >
                <v-icon>{{ isFavorite ? 'mdi-star' : 'mdi-star-outline'}}</v-icon>
              </v-btn>
            </template>
          </v-tooltip>
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
            <details-section :details="details" />
          </div>
        </v-card-text>
  
        <v-card-actions>
          <v-btn color="primary" variant="tonal" width="100%" @click="close">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import detailsSection from '~/components/sections/detailsSection.vue'

import { getDetailsById } from "~/composables/cocktailsHandler";
import { setFavorite, getFavoriteById, removeFavorite } from '../../composables/favorites';

const router = useRouter()
const routeQuery = router.currentRoute.value

const id = routeQuery.params.id

const dialog = ref(true)
const details = ref()

watch(() => router.currentRoute.value, async (query) => {
  details.value = await getDetailsById(id.toString())
}, { immediate: true })

const isFavorite = ref(false)

onMounted(() => {
  isFavorite.value = !!getFavoriteById(id.toString())
})


async function toggleFavorite() {
  isFavorite.value ? removeFavorite(id.toString()) : setFavorite(details.value)
  isFavorite.value = !isFavorite.value
}

function close() {
  dialog.value = false
  router.go(-1)
}
</script>