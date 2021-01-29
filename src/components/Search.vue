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
        ></b-form-input>

        <!-- This will only be shown if the preceding input has an invalid state -->
        <b-form-invalid-feedback id="input-live-feedback">
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
        placeholder="Enter an adress"
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
      <label for="max-price-input">Maximum Price Range</label>
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
    postcode: function(newValue) {
      let postcode = this.postcode.toString().length
      this.postcodeLimit = 7 - postcode
      console.log(newValue)
    },
  },
}
</script>

<style></style>
