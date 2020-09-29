const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            posts: ["post1", "post2"]
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        update_button() {
            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(reponse => (this.posts = reponse.data.bpi))
            .catch(error => console.log(error))
        },
        post_name() {
            axios.post('http://127.0.0.1:3000/post', {
                  title: 'foo',
                  content: 'bar',
                  authorEmail: 'cora@prisma.io',
                }).then(reponse => console.log(reponse))
        }
    }
})
