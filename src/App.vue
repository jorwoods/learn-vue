<template>
  <Navbar />
  <router-view/>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import Navbar from "@/components/Navbar.vue"

provide('database_url', "http://localhost:3000/projects")
</script>

<style>
body{
  background: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}

</style>
