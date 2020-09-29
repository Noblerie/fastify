app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" class="bg-gray-500 px-20 py-20 rounded-full shadow-lg" @submit.prevent="onSubmit">
      <h3>TEST</h3>
      <label for="name">Name:</label>
      <input class="bg-gray-200" id="name" v-model="name">

      <input class="button" class="bg-gray-600 rounded pt-1 pb-1 px-1 py-1" type="submit" value="Submit">

    </form>`,
    data() {
      return {
        name: '',
        review: '',
        rating: null,
        // solution
        recommend: null
        // solution
      }
    },
    methods: {
      onSubmit() {
        if (this.name === '') {
          alert('Review is incomplete. Please fill out every field.')
          return
        }

        let productReview = {
          name: this.name

        }
        this.$emit('review-submitted', productReview)

        this.name = ''
        this.review = ''
        this.rating = null
        this.recommend = null // solution

      }
    }
  })