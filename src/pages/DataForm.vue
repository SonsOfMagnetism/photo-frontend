<template>
    <form v-on:submit.prevent="handleSubmit">
        <input type="text" placeholder="subject" v-model="title"/>
        <input type="text" placeholder="subject" v-model="location"/>
        <input type="submit" :value="buttonLabel"/>
    </form>
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
            const location = ref("") // variable fior location in form
            console.log(url)
            let buttonLabel // label for submit button
            let handleSubmit // variable to hold submit function
            // if edit route setup for editing, if not setup for creating
            if (route.name === "edit") {
                // get photo to be edited from photos
                const photo = photos.value.find((p) => p.id == route.params.id)
                // fill the form with that photos values
                title.value = photo.title
                location.value = photo.location
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
                            location: location.value
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
                            location: location.value
                        })
                    })
                    getPhotos.value()
                    router.push("/")
                }
            }
            return {
                title,
                location,
                handleSubmit,
                buttonLabel
            }
        }
    }
</script>

<style>

</style>