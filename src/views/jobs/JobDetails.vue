<template>
  <h1>Job Details Page</h1>
  <!-- "id" below matches whatever the route parameter is called in index.js. Since it is :id in index.js, it is id here. -->
  <p>The job id is {{ id }}</p>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      // id: this.$route.params.id
    }
  }
}
</script>

<style>

</style>
