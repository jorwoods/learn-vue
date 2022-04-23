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
import { projectFirestore } from '@/firebase/config';
import updateProject from '@/composables/updateProject';
import getProject from '@/composables/getProject';

const router = useRouter()
const route = useRoute()
const attrs = useAttrs()

const title = ref('')
const details = ref('')

onMounted(() => {

  const { project, error, load } = getProject(route.params.id as string)
  load().then(() => {
    title.value = project?.value?.title!
    details.value = project?.value?.details!
  })

})

const hanldeSubmit = async () => {
  const body = {
    title: title.value,
    details: details.value,
    updated_at: new Date(),
  }
  const {updateError, update} = updateProject(route.params.id as string)
  update(body)

  router.push({name: "home"})

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
