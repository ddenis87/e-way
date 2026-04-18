import { createApp } from 'vue'
import { registerSW } from 'virtual:pwa-register'

import App from './App.vue'

import router from './router';

// Регистрируем сервис-воркер
registerSW({ immediate: true })

createApp(App)
    .use(router)
    .mount('#app')