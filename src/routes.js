/////////////////////////
// Components Imports
/////////////////////////
import AllPhotos from "./pages/AllPhotos"
import SinglePhoto from "./pages/SinglePhoto"
import DataForm from "./pages/DataForm"

/////////////////////////
// Array of Routes
/////////////////////////
export default [
    // Main page for seeing all photos
    { path: "/", component: AllPhotos },
    // Page for seeing an individual photo
    { path: "/photo/:id", component: SinglePhoto, name: "photo" },
    // Route for creating a new photo
    { path: "/new", component: DataForm },
    // Route for updating a photo
    { path:"/edit", component: DataForm}
]