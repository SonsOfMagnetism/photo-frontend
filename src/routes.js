/////////////////////////
// Components Imports
/////////////////////////
import AllPhotos from "./pages/AllPhotos"
import SinglePhoto from "./pages/SinglePhoto"
import Form from "./pages/Form"

/////////////////////////
// Array of Routes
/////////////////////////
export default [
    // Main page for seeing all photos
    { path: "/", component: AllPhotos },
    // Page for seeing an individual photo
    { path: "/photo/:id", component: SinglePhoto, name: "photo" },
    // Route for creating a new photo
    { path: "/new", component: Form },
    // Route for updating a photo
    { path:"/edit", component: Form }
]