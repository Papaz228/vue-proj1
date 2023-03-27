import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components'
import directives from '@/directives'
import router from "@/router/router"
import store from '@/store'

const app = createApp(App)

directives.forEach(element => {
    app.directive(element.name, element)
})

components.forEach(element => {
    app.component(element.name, element)
});

app
.use(router)
.use(store)
.mount('#app')
