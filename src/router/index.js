import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home'
import Hot from '@/views/hot/Hot'
import Smile from '@/views/smile/Smile'

Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/hot',
        name: 'Hot',
        component: Hot
    },
    {
        path: '/smile',
        name: 'Smile',
        component: Smile
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router