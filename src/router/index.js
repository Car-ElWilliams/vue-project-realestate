import Vue from 'vue'
import VueRouter from 'vue-router'
import HousesSlides from '../views/HousesSlides.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HousesSlides,
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})


export default router
