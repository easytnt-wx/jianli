import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'front',
            component: () => import('@/views/front')
        },
        {
            path: '/template01',
            name: 'template01',
            component: () => import('@/views/template01')
        }
    ]
})
