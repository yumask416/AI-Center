import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/css/reset.css'
import './assets/css/common.css'

import ElementPlus from 'element-plus'
// import * as ElIcons from '@element-plus/icons.vue'

import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { Vscale } from '@gyhyfj/vscale'

const app = createApp(App)
const store = createPinia()

app.use(router)
app.use(store)
app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.component('v-scale', Vscale)
app.mount('#app')
