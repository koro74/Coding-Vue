//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.provide("globalMessage", "hello!") // 키(key): globalMessage, 값(value): hello!
app.mount('#app')
