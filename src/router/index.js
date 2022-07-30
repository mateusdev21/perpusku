import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    redirect: '/dashboard',
    name: 'home',
    component: () => import ('../views/Home/index.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          text: 'Dashboard',
          breadcrumbs: [
            { name: 'home', text: 'Home' }
          ]
        },
        component: () => import(/* webpackChunkName */ '../views/Home/Dashboard/index.vue'),
      },
      {
        path: '/buku',
        name: 'buku',
        meta: {
          text: 'Buku',
          breadcrumbs: [
            { name: 'home', text: 'Home' }
          ]
        },
        component: () => import(/* webpackChunkName */ '../views/Home/Buku/index.vue'),
      },
      {
        path: '/transaksi',
        name: 'transaksi',
        meta: {
          text: 'Transaksi',
          breadcrumbs: [
            { name: 'home', text: 'Home' }
          ]
        },
        component: () => import(/* webpackChunkName */ '../views/Home/Transaksi/index.vue'),
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/index.vue')
  },
  {
    path: '/test',
    name: 'Testing Component',
    component: () => import(/* webpackChunkName: "about" */ '../views/ComponentTesting.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
