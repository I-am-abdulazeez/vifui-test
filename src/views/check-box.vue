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
import BackButton from '@/components/back-button.vue'

const sizes = ['sm', 'md', 'lg'] as const
const colors = ['brand', 'success', 'warning', 'danger', 'neutral'] as const

// Single checkbox states
const singleChecked = ref(false)
const indeterminateChecked = ref<boolean | 'indeterminate'>('indeterminate')
const termsAccepted = ref(false)
const newsletter = ref(true)

// Checkbox group states
const selectedFruits = ref(['apple', 'banana'])
const selectedFeatures = ref<string[]>([])
const selectedPermissions = ref(['read', 'write'])

// Indeterminate demo
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
  <div class="min-h-screen p-8">
    <div class="max-w-7xl mx-auto space-y-12">
      <BackButton />
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Checkbox Component</h1>
        <p class="text-gray-600">
          Comprehensive testing of all checkbox variants, colors, sizes, and states
        </p>
      </div>

      <!-- Basic Usage -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Basic Usage</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="flex items-center gap-4">
            <CheckboxRoot v-model="singleChecked">
              <CheckboxIndicator />
              <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
            </CheckboxRoot>
          </div>
          <div class="text-sm text-gray-600 mt-4">
            Checked: <strong>{{ singleChecked }}</strong>
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Sizes</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div v-for="size in sizes" :key="size">
            <p class="mb-3 text-sm font-medium uppercase text-gray-700">
              {{ size }}
            </p>
            <div class="flex items-center gap-3">
              <CheckboxRoot :size="size">
                <CheckboxIndicator />
                <CheckboxLabel>{{ size.toUpperCase() }} size</CheckboxLabel>
              </CheckboxRoot>
            </div>
          </div>
        </div>
      </section>

      <!-- Colors -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Colors</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div v-for="color in colors" :key="color">
            <p class="mb-3 text-sm font-medium capitalize text-gray-700">
              {{ color }}
            </p>
            <div class="flex items-center gap-3">
              <CheckboxRoot :color="color" :model-value="true">
                <CheckboxIndicator />
                <CheckboxLabel class="capitalize"> {{ color }} checkbox </CheckboxLabel>
              </CheckboxRoot>
            </div>
          </div>
        </div>
      </section>

      <!-- Color Matrix -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Color Matrix (All Combinations)</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-8">
          <div v-for="size in sizes" :key="size">
            <p class="mb-4 text-sm font-medium uppercase text-gray-700">{{ size }} size</p>
            <div class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
              <div v-for="color in colors" :key="color" class="flex items-center gap-2">
                <CheckboxRoot :color="color" :size="size" :model-value="true">
                  <CheckboxIndicator />
                  <CheckboxLabel class="capitalize text-xs">
                    {{ color }}
                  </CheckboxLabel>
                </CheckboxRoot>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- States -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">States</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <!-- Unchecked -->
          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Unchecked</p>
            <div class="flex items-center gap-3">
              <CheckboxRoot :model-value="false">
                <CheckboxIndicator />
                <CheckboxLabel>Unchecked state</CheckboxLabel>
              </CheckboxRoot>
            </div>
          </div>

          <!-- Checked -->
          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Checked</p>
            <div class="flex items-center gap-3">
              <CheckboxRoot :model-value="true">
                <CheckboxIndicator />
                <CheckboxLabel>Checked state</CheckboxLabel>
              </CheckboxRoot>
            </div>
          </div>

          <!-- Indeterminate -->
          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Indeterminate</p>
            <div class="flex items-center gap-3">
              <CheckboxRoot v-model="indeterminateChecked">
                <CheckboxIndicator>
                  <template #default="{ indeterminateIcon, checkedIcon }">
                    <Icon
                      v-if="indeterminateChecked === 'indeterminate'"
                      :icon="indeterminateIcon"
                    />
                    <Icon v-else-if="indeterminateChecked" :icon="checkedIcon" />
                  </template>
                </CheckboxIndicator>
                <CheckboxLabel>Indeterminate state</CheckboxLabel>
              </CheckboxRoot>
            </div>
            <Button size="sm" class="mt-3" @click="indeterminateChecked = 'indeterminate'">
              Set Indeterminate
            </Button>
          </div>

          <!-- Disabled Unchecked -->
          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Disabled (Unchecked)</p>
            <div class="flex items-center gap-3">
              <CheckboxRoot :model-value="false" disabled>
                <CheckboxIndicator />
                <CheckboxLabel>Disabled unchecked</CheckboxLabel>
              </CheckboxRoot>
            </div>
          </div>

          <!-- Disabled Checked -->
          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Disabled (Checked)</p>
            <div class="flex items-center gap-3">
              <CheckboxRoot :model-value="true" disabled>
                <CheckboxIndicator />
                <CheckboxLabel>Disabled checked</CheckboxLabel>
              </CheckboxRoot>
            </div>
          </div>
        </div>
      </section>

      <!-- Checkbox Group - Vertical -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Checkbox Group (Vertical)</h2>
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

            <CheckboxGroupItem>
              <CheckboxRoot value="grape">
                <CheckboxIndicator />
                <CheckboxLabel>Grape</CheckboxLabel>
              </CheckboxRoot>
            </CheckboxGroupItem>
          </CheckboxGroup>

          <div class="text-sm text-gray-600 mt-4">
            Selected: <strong>{{ selectedFruits.join(', ') || 'None' }}</strong>
          </div>
        </div>
      </section>

      <!-- Checkbox Group - Horizontal -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Checkbox Group (Horizontal)</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <p class="mb-4 text-sm font-medium text-gray-700">Select features to enable</p>
          <CheckboxGroup v-model="selectedFeatures" orientation="horizontal">
            <CheckboxGroupItem>
              <CheckboxRoot value="analytics" color="brand">
                <CheckboxIndicator />
                <CheckboxLabel>Analytics</CheckboxLabel>
              </CheckboxRoot>
            </CheckboxGroupItem>

            <CheckboxGroupItem>
              <CheckboxRoot value="notifications" color="success">
                <CheckboxIndicator />
                <CheckboxLabel>Notifications</CheckboxLabel>
              </CheckboxRoot>
            </CheckboxGroupItem>

            <CheckboxGroupItem>
              <CheckboxRoot value="darkMode" color="neutral">
                <CheckboxIndicator />
                <CheckboxLabel>Dark Mode</CheckboxLabel>
              </CheckboxRoot>
            </CheckboxGroupItem>
          </CheckboxGroup>

          <div class="text-sm text-gray-600 mt-4">
            Selected: <strong>{{ selectedFeatures.join(', ') || 'None' }}</strong>
          </div>
        </div>
      </section>

      <!-- Indeterminate with Select All -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Indeterminate (Select All Pattern)</h2>
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
            Selected:
            <strong>{{ selectedItems.length }} of {{ allItems.length }}</strong>
          </div>
        </div>
      </section>

      <!-- Real World Examples -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Real World Examples</h2>
        <div class="grid gap-8 md:grid-cols-2 items-start">
          <!-- Terms and Conditions -->
          <div class="rounded-lg border border-gray-200 p-6">
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

              <div class="flex items-start gap-3">
                <CheckboxRoot v-model="newsletter" color="success" class="mt-0.5">
                  <CheckboxIndicator />
                  <CheckboxLabel class="text-sm leading-relaxed">
                    Subscribe to our newsletter for updates and special offers
                  </CheckboxLabel>
                </CheckboxRoot>
              </div>

              <Button :disabled="!termsAccepted" class="w-full"> Create Account </Button>
            </div>
          </div>

          <!-- Permissions -->
          <div class="rounded-lg border border-gray-200 p-6">
            <h3 class="mb-4 text-lg font-semibold">User Permissions</h3>
            <CheckboxGroup v-model="selectedPermissions" orientation="vertical">
              <CheckboxGroupItem>
                <CheckboxRoot value="read" color="brand">
                  <CheckboxIndicator />
                  <div class="flex-1 text-left">
                    <CheckboxLabel class="font-medium">Read Access</CheckboxLabel>
                    <p class="text-xs text-gray-600 ml-2">View files and folders</p>
                  </div>
                </CheckboxRoot>
              </CheckboxGroupItem>

              <CheckboxGroupItem>
                <CheckboxRoot value="write" color="success">
                  <CheckboxIndicator />
                  <div class="flex-1 text-left">
                    <CheckboxLabel class="font-medium">Write Access</CheckboxLabel>
                    <p class="text-xs text-gray-600 ml-2">Create and edit content</p>
                  </div>
                </CheckboxRoot>
              </CheckboxGroupItem>

              <CheckboxGroupItem>
                <CheckboxRoot value="delete" color="danger">
                  <CheckboxIndicator />
                  <div class="flex-1 text-left">
                    <CheckboxLabel class="font-medium">Delete Access</CheckboxLabel>
                    <p class="text-xs text-gray-600 ml-2">Remove files permanently</p>
                  </div>
                </CheckboxRoot>
              </CheckboxGroupItem>

              <CheckboxGroupItem>
                <CheckboxRoot value="admin" color="warning">
                  <CheckboxIndicator />
                  <div class="flex-1 text-left">
                    <CheckboxLabel class="font-medium">Admin Access</CheckboxLabel>
                    <p class="text-xs text-gray-600 ml-2">Full system control</p>
                  </div>
                </CheckboxRoot>
              </CheckboxGroupItem>
            </CheckboxGroup>

            <Button class="mt-4 w-full" size="sm">Save Permissions</Button>
          </div>

          <!-- Preferences -->
          <div class="rounded-lg border border-gray-200 p-6">
            <h3 class="mb-4 text-lg font-semibold">Notification Preferences</h3>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <CheckboxRoot :model-value="true" color="brand" class="mt-0.5">
                  <CheckboxIndicator />
                  <div class="flex-1">
                    <CheckboxLabel class="font-medium">Email Notifications</CheckboxLabel>
                    <p class="text-xs text-gray-600">Receive updates via email</p>
                  </div>
                </CheckboxRoot>
              </div>

              <div class="flex items-start gap-3">
                <CheckboxRoot :model-value="true" color="success" class="mt-0.5">
                  <CheckboxIndicator />
                  <div class="flex-1">
                    <CheckboxLabel class="font-medium">Push Notifications</CheckboxLabel>
                    <p class="text-xs text-gray-600">Get instant alerts on your device</p>
                  </div>
                </CheckboxRoot>
              </div>

              <div class="flex items-start gap-3">
                <CheckboxRoot :model-value="false" class="mt-0.5">
                  <CheckboxIndicator />
                  <div class="flex-1">
                    <CheckboxLabel class="font-medium">SMS Notifications</CheckboxLabel>
                    <p class="text-xs text-gray-600">Receive text messages</p>
                  </div>
                </CheckboxRoot>
              </div>
            </div>
          </div>

          <!-- Task List -->
          <div class="rounded-lg border border-gray-200 p-6">
            <h3 class="mb-4 text-lg font-semibold">Today's Tasks</h3>
            <div class="space-y-3">
              <div class="flex items-center gap-3 rounded p-2 hover:bg-gray-50">
                <CheckboxRoot :model-value="true" color="success" size="sm">
                  <CheckboxIndicator />
                  <CheckboxLabel class="flex-1 text-sm line-through opacity-60">
                    Review pull requests
                  </CheckboxLabel>
                </CheckboxRoot>
              </div>

              <div class="flex items-center gap-3 rounded p-2 hover:bg-gray-50">
                <CheckboxRoot :model-value="false" size="sm">
                  <CheckboxIndicator />
                  <CheckboxLabel class="flex-1 text-sm"> Update documentation </CheckboxLabel>
                </CheckboxRoot>
              </div>

              <div class="flex items-center gap-3 rounded p-2 hover:bg-gray-50">
                <CheckboxRoot :model-value="false" size="sm">
                  <CheckboxIndicator />
                  <CheckboxLabel class="flex-1 text-sm"> Deploy to production </CheckboxLabel>
                </CheckboxRoot>
              </div>

              <div class="flex items-center gap-3 rounded p-2 hover:bg-gray-50">
                <CheckboxRoot :model-value="false" color="warning" size="sm">
                  <CheckboxIndicator />
                  <CheckboxLabel class="flex-1 text-sm">
                    Fix critical bug
                    <span class="ml-2 text-xs text-orange-600">High Priority</span>
                  </CheckboxLabel>
                </CheckboxRoot>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Custom Icons -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Custom Icons</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
          <div class="flex items-center gap-3">
            <CheckboxRoot :model-value="true" color="success">
              <CheckboxIndicator checked-icon="lucide:thumbs-up" />
              <CheckboxLabel>Like this</CheckboxLabel>
            </CheckboxRoot>
          </div>

          <div class="flex items-center gap-3">
            <CheckboxRoot :model-value="true" color="danger">
              <CheckboxIndicator checked-icon="lucide:heart" />
              <CheckboxLabel>Add to favorites</CheckboxLabel>
            </CheckboxRoot>
          </div>

          <div class="flex items-center gap-3">
            <CheckboxRoot :model-value="true" color="warning">
              <CheckboxIndicator checked-icon="lucide:star" />
              <CheckboxLabel>Mark as important</CheckboxLabel>
            </CheckboxRoot>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
