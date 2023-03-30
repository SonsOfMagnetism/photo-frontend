<template>
    <div class="photo">
        <h1>{{ photo.title }}</h1>
        <img v-bind:src="photo.image"/>
        <h2>{{ photo.location }}</h2>
        <h2>{{ photo.yearTaken }}</h2>
        <router-link to="/"><button>Back to Main</button></router-link>
        <router-link :to="{name: 'edit', params: {id: photo._id}}"><button>Edit Photo</button></router-link>
        <button v-on:click="deletePhoto">Delete Photo</button>
    </div>
</template>

<script>
    // get useRoute hook to get access to params
    import { useRoute, useRouter } from 'vue-router';
    // getting toRefs hook to maintain props reactivity
    import { toRefs } from 'vue';

    export default {
        name: "SinglePhoto",
        props: ["photos", "url", "getPhotos"],
        setup (props){
            // get route object to access params
            const route = useRoute()
            // get Router
            const router = useRouter()
            // retrieve photos from props
            const {photos, url, getPhotos} = toRefs(props)
            // grab target photo from photos
            const photo = photos.value[route.params.id]
            const deletePhoto = async () => {
                await fetch(url.value + photo._id + "/", {
                    method: "delete"
                })
                await getPhotos.value()
                router.push("/")
            }
            // return properties
            return {
                photo,
                deletePhoto
            }
        }
    }
</script>

<style>
    button {
        margin: 10px;
    }
</style>