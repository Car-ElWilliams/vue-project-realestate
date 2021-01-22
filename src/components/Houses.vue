<template>
  <div @click="zoo()">Run</div>
</template>

<script>
const axios = require('axios')
// import zoopoli from '../modules/zoopoli.js'
export default {
  mounted() {
    this.zoo()
  },
  data() {
    return {
      listing: '',
      // pricing: String,
      // imagesBig: String,
      // adresses: String,
      // shortDesc: String,
    }
  },
  methods: {
    zoo() {
      // zoopoli()
      axios.get(
          'http://api.zoopla.co.uk/api/v1/property_listings.json?area=london&api_key=nnc2mfhmmbngxyvgpmqy86nz'
        )
        .then(
          response => (this.listing = response.data.listing[0].price)
          // console.log('my', response)
          // this.listing = response.data.listing[0]
          // this.pricing = response.data.listing[0].price
          // this.imagesBig = response.data.listing[0].image_645_430_url
          // this.adresses = response.data.listing[0].street_name
          // this.shortDesc = response.data.listing[0].short_description
          // console.log(
          //   'Zooli info',
          //   this.listing,
          // this.shortDesc,
          // this.pricing,
          // this.adresses,
          // this.imagesBig
          // )
        )
        .catch(error => {
          console.log(error)
        })
    },
    mounted() {
      axios.get(
          'http://api.zoopla.co.uk/api/v1/property_listings.json?area=london&api_key=nnc2mfhmmbngxyvgpmqy86nz'
        )
        .then(
          response => (this.listing = response)
          // console.log('my', response)
          // this.listing = response.data.listing[0]
          // this.pricing = response.data.listing[0].price
          // this.imagesBig = response.data.listing[0].image_645_430_url
          // this.adresses = response.data.listing[0].street_name
          // this.shortDesc = response.data.listing[0].short_description
          // console.log(
          //   'Zooli info',
          //   this.listing,
          // this.shortDesc,
          // this.pricing,
          // this.adresses,
          // this.imagesBig
          // )
        )
        .catch(error => {
          console.log(error)
        })
    },
  },
}
// const axios = require('axios')  axios({ method: 'get', url: 'http://api.zoopla.co.uk/api/v1/property_listings.json?area=london&api_key=nnc2mfhmmbngxyvgpmqy86nz', responseType: 'application/json', }).then(function (response) {     // console.log(response)     listing = [response.data.listing[0]]     pricing = [response.data.listing[0].price]     imagesBig = [response.data.listing[0].image_645_430_url]     adresses = [response.data.listing[0].street_name]     shortDesc = [response.data.listing[0].short_description]     console.log(listing, shortDesc, pricing, adresses, imagesBig)   })   .catch(error => {     console.log(error)   })

//  http//:api.zoopla.co.uk/api/v1/property_listings.json?area=Oxford&api_key=nnc2mfhmmbngxyvgpmqy86nz
</script>

<style></style>
