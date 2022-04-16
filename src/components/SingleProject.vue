<template>
  <div class="project" :class="{ complete: project?.complete }">
    <div class="actions">
      <h3 @click="handleDisplay">
        {{ project.title }}
      </h3>
      <div class="icons">
        <span class="material-icons">edit</span>
        <span class="material-icons" @click="deleteProject">delete</span>
        <span class="material-icons tick" @click="toggleComplete">done</span>
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <p>
        {{ project.details }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, PropType, ref, inject } from 'vue'

import ProjectItem from "@/types/ProjectItem";

const emit = defineEmits(['delete', 'complete'])
const props = defineProps({
  project: Object as PropType<ProjectItem>
})

const showDetails = ref(false)
const database_url = inject('database_url')

const handleDisplay = () => {
  showDetails.value = !showDetails.value
}


const deleteProject = () => {
  fetch([database_url, props?.project?.id].join("/"), { method: "DELETE" })
    .then(() => emit('delete', props?.project?.id))
    .catch(err => console.log(err.message))
}

const toggleComplete = () => {
  fetch([database_url, props?.project?.id].join("/"), {
    method: "PATCH",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ complete: !props?.project?.complete })
  })
    .then(() => {
      emit('complete', props?.project?.id)
    }).catch(err => console.log(err))
}

</script>

<style>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}

h3 {
  cursor: pointer;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.material-icons {
  font-size: 24px;
  margin-left: 19px;
  color: #bbb;
  cursor: pointer;
}

.material-icons:hover {
  color: #777;
}

.project.complete {
  border-left: 4px solid #00ce89;
}
.project.complete .tick {
  color: #00ce89;
}
</style>
