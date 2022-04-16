<template>
  <h1>Edit Project</h1>
  <form @submit.prevent="hanldeSubmit">
    <label>Title:</label>
    <input type="text" required v-model="title">
    <label>Details:</label>
    <textarea required v-model="details"></textarea>
    <button>Update Project</button>
  </form>
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ProjectItem from "@/types/ProjectItem"

const route = useRoute()

console.log(route);
console.log(route.params["id"]);

const title = ref('')
const details = ref('')

onMounted(() => {
  const database_url = "http://localhost:3000/projects"
  const uri = [database_url, route.params.id].join("/")
  fetch(uri)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      title.value = data.title
      details.value = data.details
    })
})

const hanldeSubmit = () => {

}

</script>


<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}

label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}

input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}

form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
