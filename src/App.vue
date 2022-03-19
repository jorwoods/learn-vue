<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <teleport to="div#modals" v-if="showModal">
    <!-- Below only works after it has been imported and registered as a component -->
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up now!</a>
        <a href="#">more info</a>
      </template>
      <h1>Giveaway!</h1>
      <p>Grab your swag for half price!</p>
    </Modal>
  </teleport>
  <teleport to="div#modals" v-if="showModal2">
    <Modal @close="toggleModal2">
      <template v-slot:links>
        <a href="#">Sign up now!</a>
        <a href="#">more info</a>
      </template>
      <h1>More information!</h1>
      <p>Terms and conditions may apply.</p>
    </Modal>
  </teleport>
  <button @click.alt="toggleModal">open modal (alt)</button>
  <button @click="toggleModal2">open modal 2</button>
</template>

<script>

// challenge
// - create an extra button to open a different Modal
// - use the same modal component but pass in a different template (slot)
// - use a different method (e.g. toggleModalTwo) and data (e.g. showModalTwo)



import Modal from "./components/Modal.vue";

export default {
  name: "App",
  data() {
    return {
      title: "My First Vue App :)",
      header: "Sign up for the Giveaway!",
      text: "Grab your swag for half price!",
      showModal: false,
      showModal2: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },

    toggleModal() {
      this.showModal = !this.showModal;
    },

    toggleModal2() {
      this.showModal2 = !this.showModal2;
    },
  },
};
</script>

<style>
#app, #modals {
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
