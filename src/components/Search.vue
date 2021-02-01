<template>
  <div>
    <b-container>
      <div role="group">
        <label for="input-live">Town:</label>
        <input type="text " >
        <b-form-input @keydown="$emit('log-me',{town: ['EMITT WORKING', town]})"
          id="input-live"
          v-model="town"
          :state="nameState"
          aria-describedby="input-live-help input-live-feedback"
          placeholder="London"
          trim
          size="lg  "
        ></b-form-input>

        <b-form-invalid-feedback v-if="town" id="input-live-feedback">
          Enter at least 3 letters
        </b-form-invalid-feedback>

        <!-- This is a form text block (formerly known as help block) -->
        <b-form-text id="input-live-help">This field is required.</b-form-text>
      </div>

      <label for="adress-input">Enter an adress</label>
      <b-form-input
        id="adress-input"
        v-model="adress"
        size="lg"
        placeholder="94 Highfield Road"
      ></b-form-input>

      <label for="postcode-input">Postcode</label>
      <b-form-input
        id="postcode-input"
        v-model="postcode"
        size="lg"
        placeholder="SW1W0NY"
        maxlength="7"
        :formatter="formatter"
      ></b-form-input>
      <div v-if="postcode.length > 0">Characters left:{{ postcodeLimit }}</div>
      <label for="max-price-input">Maximum Price Range In £</label>
      <b-form-input
        id="max-price-input"
        v-model="priceMax"
        size="lg"
        placeholder="Enter a maxium price"
      ></b-form-input>
      <b-button @click="onSubmitZooplaData" variant="warning" size="lg">{{ submitForm }}</b-button>
    </b-container>
  </div>
</template>

<script>
  const axios = require('axios')
export default {
  data() {
    return {
      types: ['text', 'number', 'search', 'url', 'date'],
      adress: '',
      town: '',
      text: '',
      postcode: '',
      postcodeLimit: 7,
      priceMax: '',
      submitForm: 'Enter required field',
    }
  },
  computed: {
    nameState() {
      return this.town.length > 2 ? true : false
    },
  },
  methods: {

    formatter(value) {
      return value.toUpperCase()
    },

    onSubmitZooplaData(){
      axios({
    method: 'get',
    url:
      `http://api.zoopla.co.uk/api/v1/property_listings.json?api_key=nnc2mfhmmbngxyvgpmqy86nz&page_size=100&summarised=true&area=${this.town}&postcode=${this.postcode}&street=${this.adress}&maximum_price=${this.priceMax}`,
    responseType: 'application/json',
  }).then(function (response) {
      console.log('From on click function', response.data)
    }
  )}
  },
  watch: {
    postcode: function() {
      let postcode = this.postcode.toString().length
      this.postcodeLimit = 7 - postcode
    },
    town() {
      if (this.town.length >= 3) {
        this.submitForm = 'Search Houses'
      }
      else if(this.town.length < 3){
        this.submitForm = 'Enter required field'
      }

    },
  },
}
</script>

<style></style>
