import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home'
import Article from '@/views/article/Article'
import Photo from '@/views/photo/Photo'
import Profile from '@/views/profile/Profile'
import Message from '@/views/message/Message'
import Signin from '@/views/login/Signin'
import Logined from '@/views/login/Logined'
import Signup from '@/views/login/Signup'

Vue.use(VueRouter)

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

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
        path: '/article',
        name: 'Article',
        component: Article
    },
    {
        path: '/photo',
        name: 'Photo',
        component: Photo
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/message',
        name: 'Message',
        component: Message
    },
    {
        path: '/signin',
        name: 'Signin',
        component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
        path: '/logined',
        name: 'Logined',
        component: Logined
    }
]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})



export default router