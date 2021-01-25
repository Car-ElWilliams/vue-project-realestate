import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

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
    }
  },
  mutations: {
    allListings(event, listingArray) {
      console.log(listingArray);
      this.state.allZooplaData.totalListing = listingArray
    }
  },
  actions: {},
  modules: {}
});
