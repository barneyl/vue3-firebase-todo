import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// ^^ not specifying a js file explicitly will look for index.js

createApp(App)
    .use(router)
    .mount('#app')
