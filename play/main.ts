import { createApp } from 'vue'
import component_ui from '@blackwhite_ui_kit/components'
import App from './App.vue'
const app = createApp(App)
app.use(component_ui)
app.mount('#app')
