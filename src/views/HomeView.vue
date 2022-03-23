<template>
  <div class="home">
    <h1>
      Home
    </h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update Ninja Two</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive } from 'vue'


export default {
  name: 'HomeView',
  components: {
  },
  setup() {
    console.log("setup")
    const ninjaOne = ref({name: "mario", age: 30})
    // Primitive values do not work with reactive.
    const ninjaTwo = reactive({name: "luigi", age: 35})

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }

    const updateNinjaTwo = () => {
      ninjaTwo.age = 40
    }

    return {ninjaOne, ninjaTwo, updateNinjaOne, updateNinjaTwo}
  },
}
</script>
