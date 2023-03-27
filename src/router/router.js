import {createRouter, createWebHistory} from "vue-router"
import MainPage from "@/pages/MainPage.vue"
import UsersPage from "@/pages/UsersPage.vue"
import UserIdPage from "@/pages/UserIdPage.vue"

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/users',
        component: UsersPage
    },
    {
        path: '/users/:id',
        component: UserIdPage
    }
]

const router = createRouter(
    {
        history: createWebHistory(process.env.BASE_URL),
        routes
    })

export default router