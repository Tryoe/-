import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'  // 导入 router

createApp(App)
.use(ElementPlus)
.use(router)  // 确保使用 router
.mount('#app') 