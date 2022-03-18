const app = Vue.createApp({
    // Expects to have a data function
    data () {
        // Which returns an object. The keys from that object are accessible in the DOM.
        return {
            showBooks: true,
            x: 0,
            y: 0,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss',  img: "assets/1.jpg", isFav: false},
                {title: 'the way of kings', author: 'brandon sanderson', img: "assets/2.jpg", isFav: false},
                {title: 'the final empire', author: 'brandon sanderson', img: "assets/3.jpg", isFav: false},
            ]
        }
    },
    methods: {
        // Can define methods (functions) to be available for use in the DOM.
        changeTitle (title) {
            console.log("changeTitle clicked")
            this.title = title
        },

        toggleShowBooks () {
            this.showBooks = !this.showBooks
        },

        handleEvent (event, data) {
            console.log(event, event.type)
            if (data) {
                console.log(data)
            }
        },

        handleMouseMove (e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },

        toggleFav (book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks () {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount("#app")
