<template>
    
    <div class="photo-container">
        <div class="photo" v-for="(photo, index) in $attrs.photos" v-bind:key="index">
            <router-link :to="{name: 'photo', params: {id: index}}">
                <h2 class="name">{{ photo.title }}</h2>
            </router-link>
            <img v-bind:src="photo.image"/>
            <h3>{{ photo.yearTaken }}</h3>
            <h3>{{ photo.location }}</h3>
            <h3>{{ photo.tags }}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AllPhotos",
        data() {
            return
        }
    }
</script>

<style>
    .photo-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
    }
    .photo {
        text-align: center;
        border: 3px solid #F0F7F4;
        margin: 10px auto;
        width: 80%;
    }
    .photo img {
        width: 350px;
        height: 300px
    }
    @media only screen and (max-width: 600px) {
        /* For mobile phones: */
        .photo-container {
        grid-template-columns: repeat(1, 1fr);
        }
    }

    /* @media only screen and (min-width: 600px) {
        /* For tablets: */
        /* .photo-container {
        grid-template-columns: repeat(1, 1fr);
        }
    } */

</style>

