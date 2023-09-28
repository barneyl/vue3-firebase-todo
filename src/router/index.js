
import { createRouter, createWebHashHistory } from 'vue-router'

import ViewToDos from '@/views/ViewToDos.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewAuth from '@/views/ViewAuth.vue'
// ^^ @ symbol alias to src dir as defined iin vite.config.js

const routes = [
    {
        path: '/',
        name: 'b-todo', // Easier to send user programatically to here
        component: ViewToDos
    },
    {
        path: '/stats',
        name: 'stats', // Easier to send user programatically to here
        component: ViewStats
    },
    {
        path: '/auth',
        name: 'auth', // Easier to send user programatically to here
        component: ViewAuth
    }
]

const router = createRouter({
    // Use hashhistory to not require fancy server setup to test:
    history: createWebHashHistory(),
    routes // short hand for: routes: routes
})

export default router