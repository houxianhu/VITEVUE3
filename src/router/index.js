import { createRouter, createWebHashHistory } from "vue-router";
import asyncRoutes from './asyncRoutes';
const routes = [
    {
        path: '/login',
        component: () => import("@/views/login.vue")
    },
    ...asyncRoutes,
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;