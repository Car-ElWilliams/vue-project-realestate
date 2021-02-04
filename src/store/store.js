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
        if (listingArray.price[i] === 0) {
          listingArray.price[i] = 'Price Given On Request'
          this.state.allZooplaData[i].pricing.push(listingArray.price[i])
        } else {
          this.state.allZooplaData[i].pricing.push(
            `£${listingArray.price[i]
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
          )
        }
        if (listingArray.desc[i].includes('<p class="top">')) {
          listingArray.desc[i] = listingArray.desc[i].replace(/<[^>]*>/g, '')
          this.state.allZooplaData[i].shortDesc.push(listingArray.desc[i])
        }
        else {
          this.state.allZooplaData[i].shortDesc.push(listingArray.desc[i])
        }
        if (listingArray.postTown[i] === '' || undefined || null) {
          listingArray.postTown[i] = 'City Not Defined'
          this.state.allZooplaData[i].postTown.push(listingArray.postTown[i])
        }
        else {
          this.state.allZooplaData[i].postTown.push(listingArray.postTown[i])
        }
        this.state.allZooplaData[i].imagesBig.push(listingArray.images[i])
        this.state.allZooplaData[i].shortAdress.push(listingArray.adress[i])
        this.state.allZooplaData[i].fullAdress.push(listingArray.fullAdress[i])
        //Convert To A Locale String
        // this.state.allZooplaData[i].pricing[i].replace(',')
      }

      this.state.allZooplaData.roundedResults =
        Math.round(listingArray.results / 1000) * 1000
      this.state.allZooplaData.results = listingArray.results.toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      this.state.totalListing = listingArray.listing
    },
    initialiseStore(state) {
      if (localStorage.getItem('storeZooplaData')) {
        this.replaceState(
          Object.assign(
            state,
            JSON.parse(localStorage.getItem('storeZooplaData'))
          )
        )
      }
    },
  },
  actions: {},
  modules: {},
})
