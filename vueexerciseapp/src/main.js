import { createApp } from 'vue'
import '@fortawesome/fontawesome-free';
import 'bulma';
import '@fortawesome/fontawesome-free/css/all.css'     
import '@fortawesome/fontawesome-free/js/all.js'








import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
