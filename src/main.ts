import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import BasePage from '../src/components/base_page/BasePage.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
    .use(router)
    .use(ElementPlus)
    .component('BasePage', BasePage)
    .mount('#app')
