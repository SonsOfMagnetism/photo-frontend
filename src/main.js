import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import routes from "./routes"
import 'milligram'

// Create router
const router = createRouter({
    // Create web history
    history: createWebHistory(),
    // Inject routes
    routes,
})

// Create vue application
const app = createApp(App)

// Inject router into app
app.use(router)

// Mount app to the DOM
app.mount("#app")