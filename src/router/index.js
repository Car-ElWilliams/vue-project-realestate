import Vue from 'vue'
import VueRouter from 'vue-router'
import AllHouses from '../views/AllHouses.vue'
import Start from '../views/Start.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Start,
  },

  {
    path: '/allListings',
    name: 'AllListings',
    component: AllHouses
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})


export default router
