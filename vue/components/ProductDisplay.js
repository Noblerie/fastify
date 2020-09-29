app.component('product-display', {
    props: {
      premium: {
        type: Boolean,
        required: true
      }
    },
    template:
    /*html*/
    `<div class="product-display">
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
    </div>`,
    data() {
      return {
          reviews: []
      }
    },
    methods: {
        addReview(review) {
          this.reviews.push(review)
        }
    }
  })