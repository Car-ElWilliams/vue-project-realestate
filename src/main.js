import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import './styles/start.scss'
// import sasser from './styles/start.scss'

//TODO 1. Make Sass work
//TODO 2. Look for boostrsap vue compnents to use (button, perhaps maybe a slideshow)
// var sass = require('sass');

// sass.render({ file: sasser });

Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
