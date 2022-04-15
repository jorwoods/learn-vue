<template>
<div class="project">
  <div class="class">
    <h3 @click="handleDisplay">
      {{  project.title }}
    </h3>
  </div>
  <div class="details" v-if="showDetails">
    <p>
      {{ project.details }}
    </p>
  </div>
</div>
</template>

<script lang="ts">
import ProjectItem from "@/types/ProjectItem";
import { defineComponent, PropType, ref } from "@vue/runtime-core";

export default defineComponent({
  props:{
    project:{
      required: true,
      type: Object as PropType<ProjectItem>
    }
  },
  setup(props){
    let showDetails = ref(false)
    const handleDisplay = () => {
      showDetails.value = !showDetails.value
    }

    return { showDetails, handleDisplay}
  }
})
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
</style>
