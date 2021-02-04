import store from '../store/store'

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
    console.log('Curent Page:', pagecount)
  }
  //! THIS IS ALL ZOOPLA API DATA FEEDING VUEX
  axios({
    method: 'get',
    url: `https://api.zoopla.co.uk/api/v1/property_listings.json?&page_number=${pageCount}&area=london&page_size=100&summarised=false&api_key=nnc2mfhmmbngxyvgpmqy86nz`,
    responseType: 'application/json',
  })
    .then(function (response) {
      console.log(response.data)
      for (let i = 0; i < response.data.listing.length; i++) {
        pricing.push(response.data.listing[i].price)
        imagesBig.push(response.data.listing[i].image_645_430_url)
        adresses.push(response.data.listing[i].street_name)
        shortDesc.push(response.data.listing[i].short_description)
        postTown.push(response.data.listing[i].post_town)
        fullAdress.push(response.data.listing[i].displayable_address)
      }
      results = response.data.result_count

      console.log(shortDesc, pricing, adresses, imagesBig, results, postTown)

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
