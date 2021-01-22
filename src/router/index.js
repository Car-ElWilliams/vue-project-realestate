import Vue from 'vue'
import VueRouter from 'vue-router'
import HousesSlides from '../views/HousesSlides.vue'
import Start from '../views/Start.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Start,
  },

  {
    path: '/houses',
    name: 'Houses',
    component: HousesSlides
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})


export default router
