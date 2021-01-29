import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test01 from '../views/Test01.vue'
import Drag01 from '../views/Drag01.vue'
import Route01 from '../views/Route01.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        },
        {
            path: '/test01',
            name: "Test01",
            component: Test01
        },
        {
            path: '/Drag01',
            name: "Drag01",
            component: Drag01
        },
        {
            path: '/Route01',
            name: "Route01",
            component: Route01
        },
        {
            path: '/user',
            name: "User",
            component: () => import('../views/User.vue')
        }

    ]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
