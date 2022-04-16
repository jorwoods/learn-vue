<template>
  <form @submit.prevent="hanldeSubmit">
    <label>Title:</label>
    <input type="text" required v-model="title">
    <label>Details:</label>
    <textarea required v-model="details"></textarea>
    <button>Add Project</button>
  </form>
</template>


<script setup lang="ts">
import { inject, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ProjectItem from "@/types/ProjectItem"

const title = ref('')
const details = ref('')

const router = useRouter()
const route = useRoute()

const hanldeSubmit = () => {
  console.log(title.value, details.value);
  const project: ProjectItem = {
    title: title.value,
    details: details.value,
    complete: false,
  }

  const database_url = "http://localhost:3000/projects" // inject("database_url") as string
  fetch(database_url, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(project)
  }).then(() => {
    router.push({name:"home"})
  }).catch(err => console.log(err))
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
