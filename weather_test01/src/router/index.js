import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Config_view.vue'

Vue.use(VueRouter)

    const routes = [
        {
            path: '/',
            name: 'Config_view',
            component: Home
        },
        {
            path: '/results',
            name: 'Result_view',
            component: () => import(/* webpackChunkName: "about" */ '../views/Result_view.vue')
        },
        {
            path: '/results',
            name: 'Result_view',
            component: () => import(/* webpackChunkName: "about" */ '../views/Result_view.vue')
        }
    ]

    const router = new VueRouter({
        routes
    })

    export default router
