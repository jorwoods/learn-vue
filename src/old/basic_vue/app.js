const app = Vue.createApp({
    // Expects to have a data function
    data () {
        // Which returns an object. The keys from that object are accessible in the DOM.
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
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
        }
    }
})

app.mount("#app")
