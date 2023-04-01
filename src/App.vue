<template>
  <div class="app">
    <header>
      <navbar class="container">
        <router-link to="/"><div class="title">Vue Photography</div></router-link>
        <router-link to="/new"><button class="new">New Photo</button></router-link>
      </navbar>
    </header>
    <router-view :photos="photos" :url="url" :getPhotos="getPhotos" />
    <footer>
      <div class="github-section">
        <i class="fab fa-github"></i>
        <i>Github Repo: </i>
        <a href="https://github.com/SonsOfMagnetism/photography-backend" target="_blank" class="github">Backend</a>
        <a href="https://github.com/SonsOfMagnetism/photo-frontend" target="_blank" class="github">Frontend</a>
      </div>
      <div>
        <span>Copyright © 2023 Vue Photography</span>
      </div>
      <div>
        <i>Created By: </i>
        <a href='https://renesantiago.tech/' target='_blank' class="personal">Rene Santiago</a>
      </div>
    </footer>
  </div>
</template>

<script>
  import {ref, onMounted} from "vue"; // Import compostion API hooks
  // ref hook allows to create reactive variables
  // onMounted allows code to execute when the component mounts
  import '@fortawesome/fontawesome-free/css/all.css';
 
  export default {
    name: 'App', 
    components: 'GitHubIcon',
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
    background-color: #3C493F;
    color: #A2E3C4;
  }
  h2 {
    color: #2A8D5D;
  }
  h2:hover {
    color: #A2E3C4;
  }
  /* Header Styles */
  header {
    min-height: 100px;
    background-color: #274546d6;
    padding-top: 15px;
    margin-bottom: 2em;
  }
  /* Navbar Styles */
  .container {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .title {
    color: #A2E3C4;
    font-size: 4rem;
    font-weight: bold;
   }
   .title:hover{
    text-shadow: #57989afc 2px 2px 3px;
   }
  /* Footer Styles */
  footer {
    min-height: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    background-color: #274546d6;
    margin-top: 2em;
    text-align: center;
  }
  .github-section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .github {
    font-weight: bold;
    color: inherit;
  }
  .personal {
    font-weight: bold;
    color: inherit;
  }
  @media only screen and (max-width: 600px) {
        /* For mobile phones: */
        .container {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
        }
        footer {
          grid-template-columns: repeat(1, 1fr);
        }
    }
  /* Margin and padding to get rid of white border on page */
  * {
    margin: 0;
    padding: 0;
  }
</style>