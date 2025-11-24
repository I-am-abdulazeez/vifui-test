<script setup lang="ts">
import { Button, CheckboxRoot, CheckboxIndicator, CheckboxLabel } from '@vifui/core'
import { ref } from 'vue'

const singleChecked = ref(false)
</script>

<template>
  <h1 class="text-2xl text-red-400">You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

  <Button variant="soft" color="danger" size="sm">VifUI Button</Button>

  <div class="mt-4">
    <CheckboxRoot v-model="singleChecked" color="danger" size="sm">
      <CheckboxIndicator />
      <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
    </CheckboxRoot>
  </div>
</template>

<style scoped></style>
