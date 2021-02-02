import store from '../store'

export default function getData(pagecount) {
  let results
  let pricing = []
  let imagesBig = []
  let adresses = []
  let shortDesc = []
  let postTown = []
  let fullAdress = []
  let pageCount = '2'
  const axios = require('axios')

  if (pagecount !== Number) {
    // pageCount = pagecount
    console.log('Curent Page:', pagecount);
  }
  //! THIS IS ALL ZOOPLA API DATA FEEDING VUEX
  axios({
    method: 'get',
    url:
      `http://api.zoopla.co.uk/api/v1/property_listings.json?&page_number=${pageCount}&area=london&page_size=100&summarised=true&api_key=nnc2mfhmmbngxyvgpmqy86nz`,
    responseType: 'application/json',
  })
    .then(function (response) {
      console.log(response)
      for (let i = 0; i < response.data.listing.length; i++) {
        pricing.push(response.data.listing[i].price)
        imagesBig.push(response.data.listing[i].image_645_430_url)
        adresses.push(response.data.listing[i].street_name)
        shortDesc.push(response.data.listing[i].short_description)
        postTown.push(response.data.listing[i].post_town)
        fullAdress.push(response.data.listing[i].displayable_address)
      }
      results = response.data.result_count

      console.log(shortDesc, pricing, adresses, imagesBig, results)

      store.commit('allListings', {
        listing: response.data.listing.length,
        price: pricing,
        images: imagesBig,
        adress: adresses,
        desc: shortDesc,
        fullAdress,
        postTown,
        results,
      })
    })
    .catch(error => {
      console.error('Error from Zoopla API:', error)
    })
}

// const axios = require('axios')

// getZoopolaData() {
//       axios
//         .get(
//           'http://api.zoopla.co.uk/api/v1/property_listings.json?area=london&api_key=nnc2mfhmmbngxyvgpmqy86nz'
//         )
//         .then(response => {
//           this.zooplaData.listing = response.data.listing[0].price
//           console.log('Full Response', response)
//           this.zooplaData.listing = response.data.listing[0]
//           this.zooplaData.pricing = response.data.listing[0].price
//           this.zooplaData.imagesBig = response.data.listing[0].image_645_430_url
//           this.zooplaData.shortAdress = response.data.listing[0].street_name
//           this.zooplaData.shortDesc = response.data.listing[0].short_description
//           this.zooplaData.fullAdress =
//             response.data.listing[0].displayable_address
//           this.zooplaData.postTown = response.data.listing[0].post_town
//           console.log(
//             '%c House Data From Zoopoli:',
//             'color:green; font-size: large'
//           )
//           console.log(
//             this.listing,
//             this.shortDesc,
//             this.pricing,
//             this.adress,
//             this.imagesBig
//           )
//         })
//         .catch(error => {
//           console.log(error)
//         })
//     },
