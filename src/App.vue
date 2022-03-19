<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
  <!-- Below only works after it has been imported and registered as a component -->
  <Modal theme="sale" @close="toggleModal">
    <template v-slot:links>
      <a href="#">Sign up now!</a>
      <a href="#">more info</a>
    </template>
    <h1>Giveaway!</h1>
    <p>Grab your swag for half price!</p>
  </Modal>
  </div>
  <button @click.alt="toggleModal">open modal (alt)</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data () {
    return {
      title: 'My First Vue App :)',
      header: "Sign up for the Giveaway!",
      text: "Grab your swag for half price!",
      showModal: false,
    }
  },
  components: {
    Modal
  },
  methods: {
    handleClick () {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },

    toggleModal () {
      this.showModal = ! this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding: 10px;
}
</style>
