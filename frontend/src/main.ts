import { createApp } from 'vue'
import { registerSW } from 'virtual:pwa-register'

import App from './App.vue'

import routers from './plugins/routers';
import vuetify from './plugins/vuetify';

registerSW({ immediate: true })

createApp(App)
    .use(routers)
    .use(vuetify)
    .mount('#app')