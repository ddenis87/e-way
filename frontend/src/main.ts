import { createApp } from 'vue'
import App from './App.vue'

// Импортируем функцию регистрации
import { registerSW } from 'virtual:pwa-register'

// Регистрируем сервис-воркер
registerSW({ immediate: true })

createApp(App).mount('#app')