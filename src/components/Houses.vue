<template>
  <div>
    <div class="house-card">

      <h1 class="house-city">{{zooplaData.postTown}}</h1>
<p class="house-short-adress">{{zooplaData.shortAdress}}</p>
<div class="houseImg">
  <img :src="zooplaData.imagesBig" alt="">
</div>
<h2 class="house-price">{{zooplaData.pricing}}</h2>
<h3 class="house-adress-full">{{zooplaData.fullAdress}}</h3>
<h4 class="house-description">{{zooplaData.shortDesc}}</h4>
    </div>
    <div>
      <h3>Ecosystem</h3>
      <ul>
        <li>
          <a href="https://router.vuejs.org" target="_blank" rel="noopener"
            >vue-router</a
          >
        </li>
        <li>
          <a href="https://vuex.vuejs.org" target="_blank" rel="noopener"
            >vuex</a
          >
        </li>
        <li>
          <a
            href="https://github.com/vuejs/vue-devtools#vue-devtools"
            target="_blank"
            rel="noopener"
            >vue-devtools</a
          >
        </li>
        <li>
          <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
            >vue-loader</a
          >
        </li>
        <li>
          <a
            href="https://github.com/vuejs/awesome-vue"
            target="_blank"
            rel="noopener"
            >awesome-vue</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  mounted() {
    this.getZoopolaData()
  },
  data() {
    return {
      zooplaData:{
      listing: String,
      pricing: String,
      imagesBig: String,
      shortAdress: String,
      shortDesc: String,
      fullAdress: String,
      postTown: String,
      },
    }
  },
  methods: {
    getZoopolaData() {
      axios
        .get(
          'http://api.zoopla.co.uk/api/v1/property_listings.json?area=london&api_key=nnc2mfhmmbngxyvgpmqy86nz'
        )
        .then(response => {
          this.zooplaData.listing = response.data.listing[0].price
          console.log('Full Response', response)
          this.zooplaData.listing = response.data.listing[0]
          this.zooplaData.pricing = response.data.listing[0].price
          this.zooplaData.imagesBig = response.data.listing[0].image_645_430_url
          this.zooplaData.shortAdress = response.data.listing[0].street_name
          this.zooplaData.shortDesc = response.data.listing[0].short_description
          this.zooplaData.fullAdress = response.data.listing[0].displayable_address
          this.zooplaData.postTown = response.data.listing[0].post_town
          console.log('%c House Data From Zoopoli:', 'color:green; font-size: large');
          console.log(
            this.listing,
            this.shortDesc,
            this.pricing,
            this.adress,
            this.imagesBig
          )
        })
        .catch(error => {
          console.log(error)
        })
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
