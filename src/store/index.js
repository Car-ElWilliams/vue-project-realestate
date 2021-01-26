import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allZooplaData: {
      totalListing: Number,
      pricing: [],
      imagesBig: [],
      shortAdress: [],
      shortDesc: [],
      fullAdress: [],
      postTown: [],
    },
  },
  mutations: {
    allListings(event, listingArray) {
      // console.log(listingArray);
      console.log('Total Listing is:', listingArray.listing)
      for (let i = 0; i < listingArray.listing; i++) {
        console.error('working?')
        this.state.allZooplaData.pricing.push(listingArray.price[i])
        this.state.allZooplaData.imagesBig.push(listingArray.images[i])
        this.state.allZooplaData.shortAdress.push(listingArray.adress[i])
        this.state.allZooplaData.shortDesc.push(listingArray.desc[i])
        this.state.allZooplaData.fullAdress.push(listingArray.fullAdress[i])
        this.state.allZooplaData.postTown.push(listingArray.postTown[i])
      }
      this.state.allZooplaData.totalListing = listingArray.listing
    },
  },
  actions: {},
  modules: {},
})
