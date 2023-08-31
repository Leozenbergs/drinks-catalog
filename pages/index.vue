<template>
  <v-container>
    <div class="d-flex justify-center align-center index-page">
      <div class="text-center">
        <h2 class="mb-4 title">Welcome</h2>

        <div class="text-grey-darken-1 my-9 text-justify">
        {{ introduction }}
        </div>

        <v-btn color="primary" variant="flat" @click="navigate" class="mt-5">Categories</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
  const introduction = ref(`
    Welcome to a world of tantalizing flavors and delightful concoctions – a haven for all beverage enthusiasts. 
    Our page is dedicated to the art and science of drinks, where each sip tells a story and every glass is a canvas of creativity. 
    Whether you're seeking the perfect cocktail recipe to elevate your next gathering, looking to explore the nuances of various types of teas and coffees, or simply interested in learning about the history and cultural significance behind your favorite beverages, you've arrived at the right destination. 
    Join us as we dive into the rich tapestry of beverages – from classic to innovative, comforting to exotic – and embark on a journey that engages your taste buds, piques your curiosity, and leaves you thirsty for more. Cheers to the world of drinks!
  `)

  function navigate() {
    return navigateTo({
      path: '/categories'
    })
  }

</script>

<style scoped>
.index-page {
  height: 90vh;
}

.title {
  font-size: 5em;
}
</style>