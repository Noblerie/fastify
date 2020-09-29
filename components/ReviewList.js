app.component('review-list', {
    props: {
      reviews: {
        type: Array,
        required: true
      }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3 v-for="(review, index) in reviews" :key="index">{{ review.name }}</h3>
    </div>
    <template>
  <div id="app">{{data}}</div>
  </template>
  <script>
  const axios = require("axios");
  export default {
  name: "App",
  data() {
    return {
      data: {}
    };
  },
  beforeMount(){
    this.getName();
  },
  methods: {
    async getName(){
      const { data } = await axios.get("https://api.agify.io/?name={{ review.name }}");
      this.data = data;
    }
  }
  };
  </script>
  `
  })