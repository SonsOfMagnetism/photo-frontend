<template>
  <div class="app">
    <header>
      <navbar>
        
      </navbar>
    </header>
    <h1>Vue Photography</h1>
    <router-view :photos="photos" :url="url" :getPhotos="getPhotos" />
    <footer>
      <div>
        <span>Github Repo</span>
        <a href="https://github.com/SonsOfMagnetism/photography-backend" target="_blank">Backend</a>
        <a href="https://github.com/SonsOfMagnetism/photo-frontend" target="_blank">Frontend</a>
      </div>
      <div>
        <p>Copyright © 2023 Vue Photography</p>
      </div>
      <div>
        <i>Created By: </i>
        <a href='https://github.com/SonsOfMagnetism' target='_blank'>Rene Santiago</a>
      </div>
    </footer>
  </div>
</template>

<script>
  import {ref, onMounted} from "vue"; // Import compostion API hooks
  // ref hook allows to create reactive variables
  // onMounted allows code to execute when the component mounts
 
  export default {
    name: 'App',
    // Setup property allows to use new composition API to define properties/methods
    // Returns an objecgt with any properties/methods the component should have 
    setup(props) {
      // Variable with base URL for API calls
      const url = "https://photography-portfolio.herokuapp.com/photo/"
      // ref for holding all the photos
      const photos = ref([])
      // method for getting photos
      const getPhotos = async() => {
        try {
          const response = await fetch(url)
          if (response.ok) {
            const data = await response.json()
            photos.value = data
          } else {
            throw new Error(`HTTP error: ${response.status}`)
          }
        } catch (error) {
          console.error(error)
        }
      }
      // run getPhotos once when component loads
      onMounted(() => getPhotos())
      // return component properties and methods
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
    background-color: #3C493F;
    color: #A2E3C4;
  }
  h1 {
    color: #2A8D5D;
  }
  h2 {
    color: #2A8D5D;
  }
  h2:hover {
    color: #A2E3C4;
  }
  * {
    margin: 0;
    padding: 0;
  }
</style>