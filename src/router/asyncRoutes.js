import Layout from "@/layout/index.vue";

const asyncRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/index',
        meta: {title: "首页", toPath: '/index'},
        children: [
            {
                path: 'index',
                component: () => import("@/views/index.vue"),
                name: "Index",
                meta: {title: "首页", toPath: '/index'},
            }
        ]
    },
    {
        path: '/system',
        component: Layout,
        redirect: '/system/config',
        meta: {title: "系统配置", toPath: "/system/config"},
        children: [
            {
                path: 'config',
                component: () => import("@/views/system/config.vue"),
                name: "config",
                meta: {title: "config", toPath: '/system/config'},
            },
            {
                path: 'dept',
                component: () => import("@/views/system/dept.vue"),
                name: "dept",
                meta: {title: "dept", toPath: '/system/dept'},
            },
            {
                path: 'menu',
                component: () => import("@/views/system/menu.vue"),
                name: "menu",
                meta: {title: "menu", toPath: '/system/menu'},
            }
        ]
    },
    {
        path: '/tools',
        component: Layout,
        redirect: '/tools/index',
        meta: {title: "常用工具", toPath: '/tools/index'},
        children: [
            {
                path: 'index',
                component: () => import("@/views/tools/index.vue"),
                name: "tools",
                meta: {title: "tools",toPath: '/tools/index'},
                children: [
                    {
                        path: 'dict',
                        component: () => import("@/views/tools/dict/index.vue"),
                        name: "dict",
                        meta: {title: "dict", toPath: "/tools/index/dict"},
                    },
                    {
                        path: 'dicts',
                        component: () => import("@/views/tools/dict/dicts.vue"),
                        name: "dicts",
                        meta: {title: "~工具箱~", toPath: "/tools/index/dicts"},
                    },
                ]
            },
            {
                path: 'tool',
                component: () => import("@/views/tools/tools.vue"),
                name: "Tools",
                meta: {title: "工具箱", toPath: "/tools/tool"},
            },
        ]
    },
]

export default asyncRoutes