<template>
  <div class="home">
    <h1>
      Home
    </h1>
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">Add one to age.</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'


export default {
  name: 'HomeView',
  components: {
  },
  setup() {
    console.log("setup")
    const name = ref('mario')
    const age = ref(30)

    const handleClick = () => {
      name.value = 'luigi'
    }

    return {
      name,
      age,
      handleClick,
    }
  },
}
</script>
