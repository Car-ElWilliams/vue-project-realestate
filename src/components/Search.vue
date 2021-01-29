<template>
  <div>
    <b-container>
      <div role="group">
        <label for="input-live">Town:</label>
        <b-form-input
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
        v-model="text"
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
        v-model="text"
        size="lg"
        placeholder="Enter a maxium price"
      ></b-form-input>
      <b-button variant="warning" size="lg">{{ submitForm }}</b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: ['text', 'number', 'search', 'url', 'date'],
      name: '',
      town: '',
      text: '',
      postcode: '',
      postcodeLimit: 7,
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
