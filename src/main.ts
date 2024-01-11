import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus, {size: 'small', zIndex: 3000})
app.mount('#app')
