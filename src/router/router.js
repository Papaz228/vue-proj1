import {createRouter, createWebHistory} from "vue-router"
import MainPage from "@/pages/MainPage.vue"
import TransactionDetailPage from "@/pages/TransactionDetailPage.vue"

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/transactions/:id',
        component: TransactionDetailPage

    }
]

const router = createRouter(
    {
        history: createWebHistory(process.env.BASE_URL),
        routes
    })

export default router