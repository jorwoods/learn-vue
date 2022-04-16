<template>
  <div class="home">
    <FilterNav @filterChange="currentFilter = $event" :currentFilter="currentFilter" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, inject, computed, onMounted, ref } from "vue";
import loadProjects from "@/func/getProjects";
import ProjectItem from "@/types/ProjectItem";
import SingleProject from "@/components/SingleProject.vue"
import FilterNav from "@/components/FilterNav.vue"

const database_url = inject("database_url") as string

let { projects, error, load } = loadProjects(database_url);

let currentFilter = ref("all")

load()

projects = ref(projects)

const handleDelete = (id: number) => {
  projects.value = projects.value.filter((project) => {
    return project.id != id
  })
}

const handleComplete = (id: number) => {
  let p = projects.value.find(project => project.id === id)
  p!.complete = !p?.complete
}

const filteredProjects = computed(() => {
  if (currentFilter.value === 'completed'){
    return projects.value.filter((project) => project.complete)
  }
  else if (currentFilter.value === 'ongoing') {
    return projects.value.filter((project) => !project.complete)
  }
  return projects.value.filter(p => true)
})

</script>
