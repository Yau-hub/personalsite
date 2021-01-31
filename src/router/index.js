import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
	
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import( '../views/Work.vue')
  },
  {
    path: '/lifes',
    name: 'Lifes',
    component: () => import( '../views/Lifes.vue')
  },
  {
    path: '/other',
    name: 'Other',
    component: () => import( '../views/Other.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
