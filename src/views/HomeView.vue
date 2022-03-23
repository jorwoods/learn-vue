<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name"> {{ name }}</div>
    <button @click="handleClick">Stop Watching</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { computed, ref, watch, watchEffect } from 'vue'


export default {
  name: 'HomeView',
  setup() {
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])

    const stopWatch = watch(search, () => {
      console.log("watch function ran")
    })

    const stopWatchEffect = watchEffect(() => {
      console.log("watchEffect function ran", search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value))
    })

    const handleClick = () => {
      stopWatch()
      stopWatchEffect()
    }

    return { names, search, matchingNames, handleClick }
  }
}
</script>
