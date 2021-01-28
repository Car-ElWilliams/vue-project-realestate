<template>
  <div class="start-wrapper">
    <div class="welcome-container">
      <div class="wrapper">
        <h1>Welcome to Houses UK</h1>
        <p>Select an option below to find your new home</p>
      </div>
      <div class="all-listings-container">
        <b-button
          variant="primary"
          v-b-tooltip.hover.top="
            'View all houses currently available on the market'
          "
          size="lg"
          @click="$router.push('allListings')"
          >Browse All Homes</b-button
        >
        <div>{{ startListingCount }}+ listings</div>
      </div>
      <b-button
        @click="$router.push('search')"
        variant="primary"
        v-b-tooltip.hover.top="
          'Narrow down your search by e.g. adress, post code, city'
        "
        size="lg"
        >Area Search</b-button
      >
      <b-button
        variant="primary"
        v-b-tooltip.hover.top="'View a random house'"
        size="lg"
        >Get Lucky</b-button
      >
      <p class="powered"><u>Powered by zoopla API</u></p>
    </div>

    <div class="carousel-container">
      <b-carousel
        class="carousel-style"
        background="#ababab"
        :controls="false"
        :fade="true"
        id="carousel-1"
        :indicators="false"
        :interval="4000"
        img-width="1024"
        img-height="480"
        :no-hover-pause="true"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        v-model="slide"
      >
        <!-- Text slides with image -->
        <!-- <b-carousel-slide
          img-src="https://i.ibb.co/LtjyMHb/photo-1566870360032-259aa700570c-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg"
        ></b-carousel-slide> -->
        <b-carousel-slide
          img-src="https://i.ibb.co/bmZTwjH/photo-1519227355453-8f982e425321-ixlib-rb-1-2.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://i.ibb.co/KbQhwqY/photo-1459535653751-d571815e906b-ixlib-rb-1-2.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://i.ibb.co/7tf8SZJ/photo-1582268611958-ebfd161ef9cf-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg"
        >
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
import fromZooplaJS from '../modules/zoopla.js'
export default {
  mounted() {
    this.launchToVueX()
  },
  data() {
    return {
      slide: 0,
      sliding: true,
      zooplaData: {
        resultCount: Number,
      },
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
    launchToVueX() {
      fromZooplaJS()
    },
  },
  computed: {
    startListingCount() {
      return this.$store.state.totalListing
    },
  },
}

/*TODO 
1. Add The Form To The Start Page. 
2. Add input components options frtom bootstrap with the options: 
area 	(Arbitrary area name, or postcode)
street 
town 	Name
postcode  
3.  
*/
</script>

<style scoped>
/* .start-wrapper {
} */
.carousel-style {
  max-width: 100%;
  z-index: -1;
}

/* .carousel-container {
   position: absolute; 
} */

.welcome-container {
  background-color: white;
  border-radius: 10px;
  height: 85vh;
  position: absolute;
  left: 19.5vw;
  right: 20.5vw;
  top: 10vh;
  bottom: 10vh;
  width: 60vw;
  z-index: 1;
}

.powered {
  position: absolute;
  z-index: 1;
  right: 20vw;
  left: 20vw;
  bottom: 0px;
}
</style>
