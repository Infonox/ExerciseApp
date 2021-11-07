import { createApp } from 'vue'
import '@fortawesome/fontawesome-free';
import 'bulma';
import '@fortawesome/fontawesome-free/css/all.css'     
import '@fortawesome/fontawesome-free/js/all.js'
import { Notification, Config } from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full.css'








import App from './App.vue'
import router from './router'



createApp(App)
.use(router)
.use(Notification)
.use(Config,{
    iconPack: 'fas'
})
.mount('#app')
