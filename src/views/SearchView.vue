<template>
  <div class="home">
     <router-link to="/">Start</router-link>
    <router-view />
    <Search @log-me="logger"/>
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
  methods:{
    logger(payload){
      console.log(payload)
    }
  }
}
</script>
