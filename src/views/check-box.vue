<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import {
  CheckboxRoot,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxGroup,
  CheckboxGroupItem,
  Button,
} from '@vifui/core'

const sizes = ['sm', 'md', 'lg'] as const
const colors = ['brand', 'success', 'warning', 'danger', 'neutral'] as const

// States
const singleChecked = ref(false)
const indeterminateChecked = ref<boolean | 'indeterminate'>('indeterminate')
const selectedFruits = ref(['apple'])
const termsAccepted = ref(false)

// Select all pattern
const allItems = ['item1', 'item2', 'item3']
const selectedItems = ref(['item1'])

const selectAllState = computed<boolean | 'indeterminate'>(() => {
  if (selectedItems.value.length === 0) return false
  if (selectedItems.value.length === allItems.length) return true
  return 'indeterminate'
})

function toggleSelectAll() {
  if (selectedItems.value.length === allItems.length) {
    selectedItems.value = []
  } else {
    selectedItems.value = [...allItems]
  }
}
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <div class="max-w-5xl mx-auto space-y-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Checkbox Component</h1>
        <p class="text-gray-600">
          Comprehensive testing of checkbox variants, colors, sizes, and states
        </p>
      </div>

      <!-- Basic Usage -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Basic Usage</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <CheckboxRoot v-model="singleChecked">
            <CheckboxIndicator />
            <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
          </CheckboxRoot>
          <div class="text-sm text-gray-600 mt-4">
            Checked: <strong>{{ singleChecked }}</strong>
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Sizes</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
          <div v-for="size in sizes" :key="size" class="flex items-center gap-3">
            <CheckboxRoot :size="size">
              <CheckboxIndicator />
              <CheckboxLabel>{{ size.toUpperCase() }} size checkbox</CheckboxLabel>
            </CheckboxRoot>
          </div>
        </div>
      </section>

      <!-- Colors -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Colors</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
          <div v-for="color in colors" :key="color" class="flex items-center gap-3">
            <CheckboxRoot :color="color" :model-value="true">
              <CheckboxIndicator />
              <CheckboxLabel class="capitalize">{{ color }} checkbox</CheckboxLabel>
            </CheckboxRoot>
          </div>
        </div>
      </section>

      <!-- States -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Checkbox States</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
          <div>
            <p class="mb-2 text-sm font-medium text-gray-700">Checked</p>
            <CheckboxRoot :model-value="true">
              <CheckboxIndicator />
              <CheckboxLabel>Checked state</CheckboxLabel>
            </CheckboxRoot>
          </div>

          <div>
            <p class="mb-2 text-sm font-medium text-gray-700">Unchecked</p>
            <CheckboxRoot :model-value="false">
              <CheckboxIndicator />
              <CheckboxLabel>Unchecked state</CheckboxLabel>
            </CheckboxRoot>
          </div>

          <div>
            <p class="mb-2 text-sm font-medium text-gray-700">Indeterminate</p>
            <CheckboxRoot v-model="indeterminateChecked">
              <CheckboxIndicator>
                <template #default="{ indeterminateIcon, checkedIcon }">
                  <Icon v-if="indeterminateChecked === 'indeterminate'" :icon="indeterminateIcon" />
                  <Icon v-else-if="indeterminateChecked" :icon="checkedIcon" />
                </template>
              </CheckboxIndicator>
              <CheckboxLabel>Indeterminate state</CheckboxLabel>
            </CheckboxRoot>
            <Button size="sm" class="mt-2" @click="indeterminateChecked = 'indeterminate'">
              Reset to Indeterminate
            </Button>
          </div>

          <div>
            <p class="mb-2 text-sm font-medium text-gray-700">Disabled</p>
            <div class="space-y-2">
              <CheckboxRoot :model-value="false" disabled>
                <CheckboxIndicator />
                <CheckboxLabel>Disabled unchecked</CheckboxLabel>
              </CheckboxRoot>
              <CheckboxRoot :model-value="true" disabled>
                <CheckboxIndicator />
                <CheckboxLabel>Disabled checked</CheckboxLabel>
              </CheckboxRoot>
            </div>
          </div>
        </div>
      </section>

      <!-- Checkbox Group -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Checkbox Group</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <p class="mb-4 text-sm font-medium text-gray-700">Select your favorite fruits</p>
          <CheckboxGroup v-model="selectedFruits" orientation="vertical">
            <CheckboxGroupItem>
              <CheckboxRoot value="apple">
                <CheckboxIndicator />
                <CheckboxLabel>Apple</CheckboxLabel>
              </CheckboxRoot>
            </CheckboxGroupItem>
            <CheckboxGroupItem>
              <CheckboxRoot value="banana">
                <CheckboxIndicator />
                <CheckboxLabel>Banana</CheckboxLabel>
              </CheckboxRoot>
            </CheckboxGroupItem>
            <CheckboxGroupItem>
              <CheckboxRoot value="orange">
                <CheckboxIndicator />
                <CheckboxLabel>Orange</CheckboxLabel>
              </CheckboxRoot>
            </CheckboxGroupItem>
          </CheckboxGroup>
          <div class="text-sm text-gray-600 mt-4">
            Selected: <strong>{{ selectedFruits.join(', ') || 'None' }}</strong>
          </div>
        </div>
      </section>

      <!-- Select All Pattern -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Select All Pattern (Indeterminate)</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="rounded-lg border border-gray-200 p-4">
            <div class="mb-4 flex items-center gap-3 border-b pb-3">
              <CheckboxRoot :model-value="selectAllState" @update:model-value="toggleSelectAll">
                <CheckboxIndicator>
                  <template #default="{ indeterminateIcon, checkedIcon }">
                    <Icon v-if="selectAllState === 'indeterminate'" :icon="indeterminateIcon" />
                    <Icon v-else-if="selectAllState" :icon="checkedIcon" />
                  </template>
                </CheckboxIndicator>
                <CheckboxLabel class="font-semibold">Select All</CheckboxLabel>
              </CheckboxRoot>
            </div>
            <CheckboxGroup v-model="selectedItems" orientation="vertical">
              <CheckboxGroupItem v-for="item in allItems" :key="item">
                <CheckboxRoot :value="item">
                  <CheckboxIndicator />
                  <CheckboxLabel class="capitalize">{{ item }}</CheckboxLabel>
                </CheckboxRoot>
              </CheckboxGroupItem>
            </CheckboxGroup>
          </div>
          <div class="text-sm text-gray-600 mt-4">
            Selected: <strong>{{ selectedItems.length }} of {{ allItems.length }}</strong>
          </div>
        </div>
      </section>

      <!-- Real World Example -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Real-World Example: Form</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 max-w-md">
          <h3 class="mb-4 text-lg font-semibold">Create Account</h3>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <CheckboxRoot v-model="termsAccepted" class="mt-0.5">
                <CheckboxIndicator />
                <CheckboxLabel class="text-sm leading-relaxed">
                  I agree to the
                  <a href="#" class="text-blue-600 underline">Terms of Service</a>
                  and
                  <a href="#" class="text-blue-600 underline">Privacy Policy</a>
                </CheckboxLabel>
              </CheckboxRoot>
            </div>
            <Button :disabled="!termsAccepted" class="w-full">Create Account</Button>
          </div>
        </div>
      </section>

      <!-- Custom Icons -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Custom Icons</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-3">
          <CheckboxRoot :model-value="true" color="success">
            <CheckboxIndicator checked-icon="lucide:thumbs-up" />
            <CheckboxLabel>Like this</CheckboxLabel>
          </CheckboxRoot>
          <CheckboxRoot :model-value="true" color="danger">
            <CheckboxIndicator checked-icon="lucide:heart" />
            <CheckboxLabel>Add to favorites</CheckboxLabel>
          </CheckboxRoot>
          <CheckboxRoot :model-value="true" color="warning">
            <CheckboxIndicator checked-icon="lucide:star" />
            <CheckboxLabel>Mark as important</CheckboxLabel>
          </CheckboxRoot>
        </div>
      </section>
    </div>
  </div>
</template>
