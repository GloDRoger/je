import { createApp } from 'vue'
import App from './App.vue'

import 'virtual:svg-icons-register'
import '@/css/index.css'

const app = createApp(App)
installModule(app)
app.mount('#app')
