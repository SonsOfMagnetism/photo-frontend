<template>
    <div class="photo">
        <h1>{{ photo.title }}</h1>
        <h2>{{ photo.location }}</h2>
        <h2>{{ photo.yearTaken }}</h2>
        <router-link to="/"><button>Back to Main</button></router-link>
    </div>
</template>

<script>
    // get useRoute hook to get access to params
    import { useRoute } from 'vue-router';
    // getting toRefs hook to maintain props reactivity
    import { toRefs } from 'vue';

    export default {
        name: "SinglePhoto",
        props: ['photos'],
        setup (props){
            // get route object to access params
            const route = useRoute()
            // retrieve photos from props
            const {photos} = toRefs(props)
            // grab target photo from photos
            const photo = photos.value[route.params.id]
            // return properties
            return {
                photos
            }
        }
    }
</script>

<style>
    button {
        margin: 10px;
    }
</style>