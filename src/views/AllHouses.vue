<template>
  <div class="home">
    <Houses :results="this.result"/>
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
  data(){
    return{
      result: this.$store.state.allZooplaData.results
    }
  },
  
}
</script>
