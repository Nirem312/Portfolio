import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from '../src/views/Home.vue'
import Projects from '../src/views/Projects.vue'
import Contact from '../src/views/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/Projects',
            name: 'Projects',
            component: Projects
        },
        {
            path: '/Contact',
            name: 'Contact',
            component: Contact
        }
    ]
})

createApp(App)
.use(router)
.mount('#app')
