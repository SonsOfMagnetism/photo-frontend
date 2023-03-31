<template>
    <div class="photo">
        <h1>{{ photo.title }}</h1>
        <img v-bind:src="photo.image"/>
        <h3>{{ photo.location }}</h3>
        <h3>{{ photo.yearTaken }}</h3>
        <router-link to="/"><button class="new">Back to Main</button></router-link>
        <router-link :to="{name: 'edit', params: {id: photo._id}}"><button class="new">Edit Photo</button></router-link>
        <button class="delete" v-on:click="deletePhoto">Delete Photo</button>
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
    .new {
        margin: 10px;
        background-color: #2A8D5D;
        border: #2A8D5D;
    }
    .delete {
        margin: 10px;
        background-color: red;
        border: red;
    }
</style>