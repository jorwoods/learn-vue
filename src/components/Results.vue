<template>
  <p>Reaction time: {{ score }}ms {{ rank }}</p>
</template>

<script>
export default {
  props: ['score'],
  data () {
    return {
      rank: null
    }
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "🐱‍👤"
    } else if (this.score < 600) {
      this.rank = "👍"
    } else {
      this.rank = "🐌"
    }
  }
}
</script>

<style>

</style>
