<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import BackButton from './components/back-button.vue'
const route = useRoute()
</script>

<template>
  <div v-if="route.name !== 'home'" class="max-w-7xl mx-auto py-6">
    <BackButton />
  </div>
  <RouterView />
</template>

<style scoped></style>
