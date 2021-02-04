import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './styles/main.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


// Subscribe to store state update after mutation 
store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem('storeZooplaData', JSON.stringify(state));
});

