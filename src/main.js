import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'


const app = createApp(App)

app.use(router)
app.use(PerfectScrollbar)
app.use(VueAxios, axios)

app.mount('#app')
