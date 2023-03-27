<template>
  <div class="app">
    <h1>Photos</h1>
    <router-view :photos="photos" :url="url" :getPhotos="getPhotos" />
  </div>
</template>

<script>
  import {ref, onMounted} from "vue" // Import compostion API hooks
  // ref hook allows to create reactive variables
  // onMounted allows code to execute when the component mounts

  export default {
    name: 'App',
    // Setup property allows to use new composition API to define properties/methods
    // Returns an objecgt with any properties/methods the component should have
    setup(props) {
      // Variable with base URL for API calls
      const url = "https://photography-portfolio.herokuapp.com/"
      // ref for holding all the photos
      const photos = ref([])
      // method for getting photos
      const getPhotos = async() => {
        const response = await fetch(url)
        const data = await response.json()
        photos.value = await data
      }
      // run getPhotos once when component loads
      onMounted(() => getPhotos())
      // return component propertioes and methods
      return {
        photos,
        getPhotos,
        url,
        ...props
      }
    }
  }
</script>

<style>
  .app {
    text-align: center;
  }
</style>