<template>
  <div id="app">
    <div v-if="error" id="error">You are using this site offline...</div>
    <div class="home">
      <router-link to="/"></router-link>
      <router-view />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default {
  beforeCreate() {
    this.$store.commit('initialiseStore')
  },
  beforeMount() {
    this.checkOnline()
  },
  data() {
    return {
      error: false,
    }
  },
  methods: {
    secondCheck() {
      if (this.error === true || navigator.onLine === false) {
        let interval = window.setInterval(
          function() {
          if (navigator.onLine === false) {
            this.error === true
            console.log('Checking status...')
          } else if (navigator.onLine === true) {
            console.log('Back online, stabilizing connection...')
            this.error = false
            document.querySelector('#error').style.display = 'none'
            clearInterval(interval)
          }
        }, 3000)
      }
    },
    checkOnline() {
      //ONLINE OR NOT CODE

      /*1. ALTERNATIVE 
console.log(navigator.onLine ? 'Online' : 'Offline')
*/

      // 2. ALTERNATIVE
      window.addEventListener('offline', () => {
        console.log('%c User is OFFLINE ', 'color:black; font-size:20px')
        this.error = true
        sessionStorage.setItem('offline', JSON.stringify(this.error))
        this.secondCheck()
      })

      if (
        navigator.onLine === true ||
        window.addEventListener('online', () => true)
      ) {
        console.log('%c User is ONLINE ', 'color:blue; font-size:20px')
        this.error = false
        sessionStorage.setItem('offline', JSON.stringify(this.error))
      }

      if (sessionStorage.getItem('offline')) {
        this.error = JSON.parse(sessionStorage.getItem('offline'))
      }

      // 3. Alternative This verifies 100% that the user is online
      // getOnlineStatus().then((isOnline) => {
      //   console.log(isOnline ? 'Really ONLINE' : 'Offline')
      // })

      // function getOnlineStatus() {
      //   if (navigator.onLine) {
      //     return fetch(location.origin, { method: 'HEAD' })
      //       .then(() => true)
      //       .catch(() => false)
      //   }

      //   return new Promise((resolve) => resolve(false))
      // }
    },
  },
}
</script>

<style lang="scss">
#error {
  background-color: black;
  color: white;
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 10;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}

button {
  width: 30vw;
}
</style>
