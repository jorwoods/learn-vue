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
import { onMounted, ref, useAttrs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ProjectItem from "@/types/ProjectItem"

const router = useRouter()
const route = useRoute()
const attrs = useAttrs()
const database_url = "http://localhost:3000/projects"
const uri = [database_url, route.params.id].join("/")

const title = ref('')
const details = ref('')

onMounted(() => {

  fetch(uri)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      title.value = data.title
      details.value = data.details
    })
})

const hanldeSubmit = () => {
  fetch(uri, {
    method: "PATCH",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      title: title.value,
      details: details.value
    })
  }).then(() => {
    router.push({ name: "home" })
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
