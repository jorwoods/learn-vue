<template>
  <nav class="filter-nav">
    <button :class="{ active: currentFilter === 'all'}" @click="updateFilter('all')">View All</button>
    <button :class="{ active: currentFilter === 'completed'}" @click="updateFilter('completed')">Completed</button>
    <button :class="{ active: currentFilter === 'ongoing'}" @click="updateFilter('ongoing')">View ongoing</button>
  </nav>
</template>


<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue'

const emits = defineEmits(["filterChange"])
const props = defineProps(['currentFilter'])

const updateFilter = (filterBy: string) => {
  emits('filterChange', filterBy)
}


</script>


<style>
 .filter-nav button {
   background: none;
   border: none;
   color: #bbb;
   outline: none;
   font-size: 12px;
   text-transform: uppercase;
   margin-right: 10px;
   letter-spacing: 1px;
   font-weight: bold;
   cursor: pointer;
 }

 .filter-nav button.active {
   color: #555;
 }
</style>
