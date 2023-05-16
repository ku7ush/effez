import { Login } from './.nuxt/components'
import Dashboard from './pages/Dashboard.vue'

export default {
    routes: [
        {
            path: '/',
            component: Login,
            name: 'Login'
        },
        {
            path: '/login',
            component: Login,
            name: 'Login'
        }
    ]
}