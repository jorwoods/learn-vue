<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref } from "vue";
import loadProjects from "@/func/getProjects";
import ProjectItem from "@/types/ProjectItem";
import SingleProject from "@/components/SingleProject.vue"

export default defineComponent({
  name: "HomeView",
  components: { SingleProject },
  setup() {

    const database_url = inject("database_url") as string

    let { projects, error, load } = loadProjects(database_url);

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

    return { handleComplete, handleDelete, projects }
  },
});
</script>
