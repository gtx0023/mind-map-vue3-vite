import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import store from './store'

//svg插件需要配置代码
import "virtual:svg-icons-register";
//引入自定义插件对象:注册整个项目全局组件
import gloalComponent from "@/components/svgIcon/register";

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus, {size: 'small', zIndex: 3000})
//安装自定义插件
app.use(gloalComponent);

app.mount('#app')
