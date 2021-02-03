<template>
  <div>
    <div>
      <h1>All {{ results }} Listings</h1>
      <div class="house-card" v-for="item in zooplaData" :key="item.id">
        <h1 class="house-city">{{ item.postTown }}</h1>
        <p class="house-short-adress">{{ item.shortAdress }}</p>
        <div class="houseImg">
          <img :src="item.imagesBig" alt="" />
        </div>
        <h2 class="house-price">{{ item.pricing }}</h2>
        <h3 class="house-adress-full">{{ item.fullAdress }}</h3>
        <h4 class="house-description">{{ item.shortDesc }}</h4>
      </div>
      <b-pagination
        align="f  ill"
        v-model="currentPage"
        :total-rows="rows"
        size="lg"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import fromZooplaJS from '../modules/zoopla.js'

export default {
  created() {
    this.copyZooplaObj()
    // this.launchToVueX()
  },
  data() {
    return {
      zooplaData: [
        {
          pricing: this.$store.state.allZooplaData[0].pricing[0],
          imagesBig: this.$store.state.allZooplaData[0].imagesBig[0],
          shortAdress: this.$store.state.allZooplaData[0].shortAdress[0],
          shortDesc: this.$store.state.allZooplaData[0].shortDesc[0],
          fullAdress: this.$store.state.allZooplaData[0].fullAdress[0],
          postTown: this.$store.state.allZooplaData[0].postTown[0],
        },
      ],
      rows: 100,
      currentPage: 1,
    }
  },
  props: {
    results: {
      type: Number,
    },
  },
  methods: {
    log(event) {
      console.log(event)
    },
    copyZooplaObj() {
      //Adds a new copied object to All Zoopla Data
      for (let i = 1; i < this.$store.state.totalListing; i++) {
        this.zooplaData.push(
          JSON.parse(
            JSON.stringify({
              pricing: this.$store.state.allZooplaData[i].pricing[0],
              imagesBig: this.$store.state.allZooplaData[i].imagesBig[0],
              shortAdress: this.$store.state.allZooplaData[i].shortAdress[0],
              shortDesc: this.$store.state.allZooplaData[i].shortDesc[0],
              fullAdress: this.$store.state.allZooplaData[i].fullAdress[0],
              postTown: this.$store.state.allZooplaData[i].postTown[0],
            })
          )
        )
      }
    },
    zooplaPageNumber() {
      fromZooplaJS(this.currentPage)
    },
  },
  watch: {
    currentPage() {
      this.zooplaPageNumber()
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
