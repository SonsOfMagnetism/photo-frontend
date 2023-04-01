<template>
    <h1 class="formh1">
        Insert Information Below
    </h1>
<div class="row">
    <div class="column column-33 column-offset-33">
    <form v-on:submit.prevent="handleSubmit">
        <input id="formData" type="text" placeholder="Title" v-model="title"/>
        <input type="text" placeholder="URL of image" v-model="image" />
        <input type="number" placeholder="Year Taken" v-model="yearTaken"/>
        <input type="text" placeholder="Location" v-model="location"/>
        <input type="text" placeholder="Tags" v-model="tags"/>
        <input id="formButton" type="submit" :value="buttonLabel"/>
    </form>
    </div>
</div>
</template>

<script>
    // get router hooks
    import {useRoute, useRouter} from "vue-router"
    // get vue hooks
    import {ref, toRefs} from "vue"

    export default {
        name: "DataForm",
        props: ["photos", "url", "getPhotos"],
        setup(props) {
            const route = useRoute()  // get route
            const router = useRouter() // get router
            const {photos, url, getPhotos} = toRefs(props) // get photos from props
            const title = ref("") // variable for title in form
            const image = ref("") // variable for image in form
            const yearTaken = ref("") // variable for yearTaken in form
            const location = ref("") // variable for location in form
            const tags = ref("") // variable for tags in form
            console.log(url)
            let buttonLabel // label for submit button
            let handleSubmit // variable to hold submit function
            // if edit route setup for editing, if not setup for creating
            if (route.name === "edit") {
                // get photo to be edited from photos
                const photo = photos.value.find((p) => p._id == route.params.id)
                // fill the form with that photos values
                console.log(photos.value)
                console.log(photo)
                title.value = photo.title
                image.value = photo.image
                yearTaken.value = photo.yearTaken
                location.value = photo.location
                tags.value = photo.tags
                // label for submit button
                buttonLabel = "edit todo"
                // define function to update
                handleSubmit = async () => {
                    await fetch(url.value + route.params.id + "/", {
                        method: "put",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            title: title.value,
                            image: image.value,
                            yearTaken: yearTaken.value,
                            location: location.value,
                            tags: tags.value
                        })
                    })
                    getPhotos.value()
                    router.push("/")
                }
            } else {
                // label for submit button
                buttonLabel = "Add Photo"
                // define function to create
                handleSubmit = async () => {
                    await fetch(url.value, {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            title: title.value,
                            image: image.value,
                            yearTaken: yearTaken.value,
                            location: location.value,
                            tags: tags.value
                        })
                    })
                    getPhotos.value()
                    router.push("/")
                }
            }
            return {
                title,
                image,
                yearTaken,
                location,
                tags,
                handleSubmit,
                buttonLabel
            }
        }
    }
</script>

<style>
    #formData:onhover {
        border: #2A8D5D;
    }
    #formButton {
        background-color: #2A8D5D;
        border: #2A8D5D;
        justify-content: center;
        align-items: center;
    }
    .formContainer {
        /* max-width: 80%; */
        justify-content: center;
        align-items: center;
    }
    .row {
        margin-top: 75px;
    }
    .formh1 {
        text-align: center;
        margin-top: 75px;
    }
</style>