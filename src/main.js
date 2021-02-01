import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "./sw.js";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import './styles/start.scss'

Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

//Checks User online status

getOnlineStatus().then((isOnline) => {
  console.log(isOnline ? 'Really online' : 'Offline')
  if (isOnline === false) {
    alert('You are using the site offline')
  }
})

function getOnlineStatus() {
  if (navigator.onLine) {
    return fetch(location.origin, { method: 'HEAD' })
      .then(() => true)
      .catch(() => false)
  }

  return new Promise((resolve) => resolve(false))
}

addEventListener('offline', () => {
  console.log('Offline')
})

addEventListener('online', () => {
  console.log('Online')
})