import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import ViewLogin from '../views/view-login.vue';
import ViewUserRole from '../views/view-user-role.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: ViewLogin,
        meta: {
            layout: 'LayoutAuth',
        },
    },
    {
        path: '/user-role',
        name: 'user-role',
        component: ViewUserRole,
        meta: {
            layout: 'LayoutAuth',
        },
    },
];

export default createRouter({
    history: createWebHistory('/e-way/'),
    routes,
});