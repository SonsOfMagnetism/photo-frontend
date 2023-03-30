<template>
    <div>
        <router-link to="/new"><button>New Photo</button></router-link>
        <div class="photo" v-for="(photo, index) in $attrs.photos" v-bind:key="index">
            <router-link :to="{name: 'photo', params: {id: index}}">
                <h1>{{ photo.title }}</h1>
            </router-link>
            <img v-bind:src="photo.image"/>
            <h2>{{ photo.yearTaken }}</h2>
            <h2>{{ photo.location }}</h2>
            <h2>{{ photo.tags }}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AllPhotos"
    }
</script>

<style>
    .photo {
        text-align: center;
        border: 3px solid green;
        margin: 10px auto;
        width: 80%;
    }
</style>