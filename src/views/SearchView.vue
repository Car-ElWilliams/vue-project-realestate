<template>
  <div class="home">
    <router-link to="/">Start</router-link>
    <router-view />
    <h6>You are viewing: {{ routerPath }}</h6>
    <Search @log-me="logger" />
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue'

export default {
  name: 'Home',
  components: {
    Search,
  },
  methods: {
    logger(payload) {
      console.log(payload)
    },
  },
  data() {
    return {
      routerPath: this.$router.currentRoute.path,
    }
  },
}
</script>
