<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProject :project="project" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import loadProjects from "@/func/getProjects";
import ProjectItem from "@/types/ProjectItem";
import SingleProject from "@/components/SingleProject.vue"

export default defineComponent({
  name: "HomeView",
  components: { SingleProject },
  setup() {

    let { projects, error, load } = loadProjects();

    load()

    projects = ref(projects)

    return { projects }
  },
});
</script>
