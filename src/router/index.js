
import { createRouter, createWebHashHistory } from 'vue-router'

import ViewToDos from '@/views/ViewToDos.vue'
import ViewStats from '@/views/ViewStats.vue'
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
    }
]

const router = createRouter({
    // Use hashhistory to not require fancy server setup to test:
    history: createWebHashHistory(),
    routes // short hand for: routes: routes
})

export default router