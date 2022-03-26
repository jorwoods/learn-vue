<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" />
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
    const posts = ref([
      {title: 'welcome to the blog', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolore ipsum laborum quas? Amet necessitatibus perferendis repellendus ab quis, sequi officiis quibusdam beatae accusantium eius nisi asperiores modi quod vitae.' , id: 1},
      {title: 'top 5 CSS tips', body: 'Lorem ipsum', id: 2},
    ])

    return { posts }
  }
}
</script>
