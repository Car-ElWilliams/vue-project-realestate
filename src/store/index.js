import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalListing: Number,
    allZooplaData: [
      {
        pricing: [],
        imagesBig: [],
        shortAdress: [],
        shortDesc: [],
        fullAdress: [],
        postTown: [],
        roundedResults: null,
        results: null,
      },
    ],
  },
  mutations: {
    allListings(event, listingArray) {
      console.log('Total Listing is:', listingArray.listing)
      //adding a new copied object to All Zoopla Data
      for (let i = 1; i < listingArray.listing; i++) {
        this.state.allZooplaData.push(
          JSON.parse(JSON.stringify(this.state.allZooplaData[0]))
        )
      }
      for (let i = 0; i < listingArray.listing; i++) {
        this.state.allZooplaData[i].pricing.push(`£${listingArray.price[i]}`)
        this.state.allZooplaData[i].imagesBig.push(listingArray.images[i])
        this.state.allZooplaData[i].shortAdress.push(listingArray.adress[i])
        this.state.allZooplaData[i].shortDesc.push(listingArray.desc[i])
        this.state.allZooplaData[i].fullAdress.push(listingArray.fullAdress[i])
        this.state.allZooplaData[i].postTown.push(listingArray.postTown[i])
        //Convert To A Locale String
        // this.state.allZooplaData[i].pricing[i].replace(',')
      }

      this.state.allZooplaData.roundedResults =
        Math.round(listingArray.results / 1000) * 1000
      this.state.allZooplaData.results = listingArray.results
      this.state.totalListing = listingArray.listing
    },
  },
  actions: {},
  modules: {},
})
