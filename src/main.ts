import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import { store } from '@/store'
import { router } from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
app
  .use(createPinia())
  .use(router)
  .use(store)
  .mount('#app')
