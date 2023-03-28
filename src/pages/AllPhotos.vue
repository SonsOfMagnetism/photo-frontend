<template>
    <div>
        <div class="photo">
            <router-link :to="{name: 'photo'}">
                <h1></h1>
            </router-link>
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