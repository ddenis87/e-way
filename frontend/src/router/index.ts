import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import ViewAuth from '../views/view-auth.vue'
import ViewEntry from '../views/view-entry.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/e-way',
        name: 'auth',
        component: ViewAuth,
        meta: {
            layout: 'LayoutAuth',
        },
    },
    {
        path: '/e-way/entry',
        name: 'entry',
        component: ViewEntry,
        meta: {
            layout: 'LayoutAuth',
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;