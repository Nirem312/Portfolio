import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from '../src/views/Home.vue'
import Projects from '../src/views/Projects.vue'
import Contact from '../src/views/Contact.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

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

const vuetify = createVuetify({
    components,
    directives,
})  

createApp(App)
.use(router)
.use(vuetify)
.mount('#app')
