<template>
  <div class="backdrop" @click.self="closeModal">
    <!-- Conditional classes. Key is the class that we may want to bind. Value is the boolean -->
    <div class="modal" :class="{ sale : theme === 'sale' }">
      <slot>Default content</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['theme'],
  methods: {
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  .modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }
  h1 {
    color: #03cfb4;
    border: none;
    padding: 0;
  }
  .modal.sale{
    background: crimson;
    color: white;
  }
  .modal.sale h1 {
    color: white;
  }
</style>
