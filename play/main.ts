import { createApp } from 'vue'
import component_ui from '@easyest/components'
import App from './App.vue'
const app = createApp(App)
app.use(component_ui)
app.mount('#app')
