const app = Vue.createApp({
    // Expects to have a data function
    data () {
        // Which returns an object. The keys from that object are accessible in the DOM.
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
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
        }
    }
})

app.mount("#app")
