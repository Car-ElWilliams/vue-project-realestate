export default function getData() {
  let listing
  let pricing
  let imagesBig
  let adresses
  let shortDesc

  const axios = require('axios')

  axios({
    method: 'get',
    url:
      'http://api.zoopla.co.uk/api/v1/property_listings.json?area=london&api_key=nnc2mfhmmbngxyvgpmqy86nz',
    responseType: 'application/json',
  })
    .then(function (response) {
      listing = [response.data.listing[0]]
      pricing = [response.data.listing[0].price]
      imagesBig = [response.data.listing[0].image_645_430_url]
      adresses = [response.data.listing[0].street_name]
      shortDesc = [response.data.listing[0].short_description]
      console.log(listing, shortDesc, pricing, adresses, imagesBig)
    })
    .catch(error => {
      console.log(error)
    })
}
// const axios = require('axios')  axios({ method: 'get', url: 'http://api.zoopla.co.uk/api/v1/property_listings.json?area=london&api_key=nnc2mfhmmbngxyvgpmqy86nz', responseType: 'application/json', }).then(function (response) {     // console.log(response)     listing = [response.data.listing[0]]     pricing = [response.data.listing[0].price]     imagesBig = [response.data.listing[0].image_645_430_url]     adresses = [response.data.listing[0].street_name]     shortDesc = [response.data.listing[0].short_description]     console.log(listing, shortDesc, pricing, adresses, imagesBig)   })   .catch(error => {     console.log(error)   })

//  http//:api.zoopla.co.uk/api/v1/property_listings.json?area=Oxford&api_key=nnc2mfhmmbngxyvgpmqy86nz
