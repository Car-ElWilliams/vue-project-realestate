<template>
  <div class="home">
    <router-link to="/">Start</router-link>
    <router-view />
    <h6>You are viewing: {{ routerPath }}</h6>
    <Houses :results="this.result" />
  </div>
</template>

<script>
// @ is an alias to /src
import Houses from '@/components/Houses.vue'

export default {
  name: 'Home',
  components: {
    Houses,
  },
  data() {
    return {
      result: this.$store.state.allZooplaData.results,
      routerPath: this.$router.currentRoute.path,
    }
  },
  props: {
    id: {
      type: String,
    },
  },
}
// console.log(this.$route.params.id)
</script>
