<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Houses />
  </div>
</template>

<script>
// @ is an alias to /src
import Houses from "@/components/Houses.vue"

export default {
  name: "Home",
  components: {
    Houses
  }
};
</script>
