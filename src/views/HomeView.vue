<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
    </div>
    <div v-else>Loading...</div>
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '../components/PostList.vue'
import { ref } from 'vue'


export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts")
        console.log(data)

        if (!data.ok){
          throw Error("no data available")
        }

        posts.value = await data.json()


      } catch (err) {
        // update the error ref's value with the content of the error message
        error.value = err.message
        console.log(error.value)
      }
    }

    load()

    const showPosts = ref(true)

    return { posts, showPosts, error }
  }
}
</script>
