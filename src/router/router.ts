import { createRouter, createWebHistory } from 'vue-router'
import LoginStatus from '../base_service/service/LoginStatus'

// 路由信息
const routes = [
    {
        path: '/login',
        name: 'Login',
        title: '登录',
        meta: { asApp: false },
        component: () => import('../view/login/Login.vue')
    },
    {
        path: '/',
        name: '',
        title: '首页',
        meta: { asApp: false },
        component: () => import('../view/index/Index.vue')
    },
    {
        path: '/encode',
        name: 'Encode',
        meta: {
            asApp: true,
            title: '生成验证码'
        },
        component: () => import('../view/index/Index.vue')
    },
    {
        path: '/decode',
        name: 'Decode',
        meta: {
            asApp: true,
            title: '识别验证码'
        },
        component: () => import('../view/decode/Decode.vue')
    }
]

// 导出路由
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (LoginStatus.isLoginSuccess() || to.name === 'Login' || to.name === '') {
        next()
        return
    }
    next({ name: 'Login' })
})

export default router