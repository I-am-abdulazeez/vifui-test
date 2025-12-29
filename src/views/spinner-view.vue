<script setup lang="ts">
import { ref } from 'vue'
import { Spinner, Button } from '@vifui/core'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
const colors = ['current', 'primary', 'secondary', 'success', 'warning', 'danger', 'white'] as const
const types = [
  'default',
  'border',
  'point',
  'points',
  'radius',
  'corners',
  'scale',
  'waves',
  'square',
  'gradient',
  'rectangle',
  'circles',
  'square-rotate',
  'material',
] as const

const isLoading = ref(false)

const simulateLoading = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <div class="max-w-6xl mx-auto space-y-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Spinner Component</h1>
        <p class="text-gray-600">
          Comprehensive testing of spinner animations, sizes, colors, and loading states
        </p>
      </div>

      <!-- Basic Usage -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Basic Usage</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="flex items-center justify-center py-8">
            <Spinner />
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Sizes</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div v-for="size in sizes" :key="size" class="flex flex-col gap-3">
              <p class="text-sm font-medium uppercase text-gray-700">{{ size }}</p>
              <div class="flex items-center justify-center py-4 bg-gray-50 rounded-lg">
                <Spinner :size="size" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Colors -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Colors</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            <div v-for="color in colors" :key="color" class="flex flex-col gap-3">
              <p class="text-sm font-medium capitalize text-gray-700">{{ color }}</p>
              <div
                class="flex items-center justify-center py-4 rounded-lg"
                :class="color === 'white' ? 'bg-gray-900' : 'bg-gray-50'"
              >
                <Spinner :color="color" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Animation Types -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Animation Types</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div v-for="type in types" :key="type" class="flex flex-col gap-3">
              <p class="text-sm font-medium capitalize text-gray-700">
                {{ type.replace('-', ' ') }}
              </p>
              <div class="flex items-center justify-center py-6 bg-gray-50 rounded-lg">
                <Spinner :type="type" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Types with Colors -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Types × Colors</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-8">
          <div v-for="type in types.slice(0, 5)" :key="type">
            <p class="mb-4 text-sm font-semibold capitalize text-gray-700">
              {{ type.replace('-', ' ') }} Animation
            </p>
            <div class="grid grid-cols-3 md:grid-cols-7 gap-4">
              <div v-for="color in colors" :key="color" class="flex flex-col items-center gap-2">
                <div
                  class="flex items-center justify-center w-full h-20 rounded-lg"
                  :class="color === 'white' ? 'bg-gray-900' : 'bg-gray-50'"
                >
                  <Spinner :type="type" :color="color" size="md" />
                </div>
                <span class="text-xs capitalize text-gray-600">{{ color }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Size Comparison per Type -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Size Comparison</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-8">
          <div v-for="type in types.slice(0, 3)" :key="type">
            <p class="mb-4 text-sm font-semibold capitalize text-gray-700">
              {{ type.replace('-', ' ') }} - All Sizes
            </p>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div v-for="size in sizes" :key="size" class="flex flex-col items-center gap-2">
                <div class="flex items-center justify-center w-full h-24 rounded-lg bg-gray-50">
                  <Spinner :type="type" :size="size" />
                </div>
                <span class="text-xs uppercase text-gray-600">{{ size }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Real World Examples -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Real World Examples</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid gap-8 md:grid-cols-2">
            <!-- Loading Button -->
            <div class="rounded-lg border border-gray-200 p-6">
              <h3 class="mb-4 text-base font-semibold text-gray-900">Loading Button</h3>
              <div class="flex flex-col gap-4">
                <Button :disabled="isLoading" @click="simulateLoading">
                  <Spinner v-if="isLoading" size="sm" color="white" class="mr-2" />
                  {{ isLoading ? 'Loading...' : 'Submit Form' }}
                </Button>

                <Button variant="outline" :disabled="isLoading">
                  <Spinner v-if="isLoading" size="sm" color="current" class="mr-2" />
                  {{ isLoading ? 'Processing...' : 'Save Draft' }}
                </Button>
              </div>
            </div>

            <!-- Loading Card -->
            <div class="rounded-lg border border-gray-200 p-6">
              <h3 class="mb-4 text-base font-semibold text-gray-900">Loading Card</h3>
              <div
                v-if="isLoading"
                class="flex flex-col items-center justify-center gap-3 rounded-lg bg-gray-50 py-12"
              >
                <Spinner type="material" size="lg" />
                <p class="text-sm text-gray-600">Loading content...</p>
              </div>
              <div v-else class="rounded-lg bg-gray-50 p-4">
                <p class="text-sm text-gray-900">
                  Content loaded successfully! Click the button above to see the loading state.
                </p>
              </div>
            </div>

            <!-- Overlay Loader -->
            <div class="rounded-lg border border-gray-200 p-6">
              <h3 class="mb-4 text-base font-semibold text-gray-900">Overlay Loader</h3>
              <div class="relative">
                <div
                  v-if="isLoading"
                  class="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm"
                >
                  <div class="flex flex-col items-center gap-2">
                    <Spinner type="gradient" size="lg" />
                    <p class="text-sm font-medium text-gray-900">Please wait...</p>
                  </div>
                </div>
                <div class="rounded-lg bg-gray-50 p-6">
                  <p class="mb-2 font-semibold text-gray-900">Your Content</p>
                  <p class="text-sm text-gray-600">
                    This content will be covered by an overlay spinner when loading.
                  </p>
                </div>
              </div>
            </div>

            <!-- Inline Loading -->
            <div class="rounded-lg border border-gray-200 p-6">
              <h3 class="mb-4 text-base font-semibold text-gray-900">Inline Loading</h3>
              <div class="space-y-3">
                <div class="flex items-center gap-2">
                  <Spinner v-if="isLoading" size="xs" type="points" />
                  <span class="text-sm text-gray-900">
                    {{ isLoading ? 'Fetching data...' : 'Data loaded' }}
                  </span>
                </div>
                <div class="flex items-center gap-2">
                  <Spinner v-if="isLoading" size="xs" type="border" color="success" />
                  <span class="text-sm text-gray-900">
                    {{ isLoading ? 'Syncing...' : 'Sync complete' }}
                  </span>
                </div>
                <div class="flex items-center gap-2">
                  <Spinner v-if="isLoading" size="xs" type="corners" color="warning" />
                  <span class="text-sm text-gray-900">
                    {{ isLoading ? 'Processing...' : 'Process complete' }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- On Dark Background -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">On Dark Background</h2>
        <div class="bg-gray-900 rounded-lg p-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div
              v-for="type in ['default', 'border', 'material', 'gradient'] as const"
              :key="type"
              class="flex flex-col items-center gap-3"
            >
              <div class="flex items-center justify-center py-6 w-full">
                <Spinner :type="type" color="white" size="lg" />
              </div>
              <span class="text-xs capitalize text-gray-400">{{ type }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Accessibility -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Accessibility</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="mb-4">
            <h3 class="text-base font-semibold text-gray-900 mb-2">Screen Reader Labels</h3>
            <p class="text-sm text-gray-600">
              All spinners include proper ARIA labels for screen readers.
            </p>
          </div>

          <div class="grid gap-4 md:grid-cols-3">
            <div class="flex flex-col items-center gap-2 rounded-lg bg-gray-50 p-4">
              <Spinner label="Loading page content" />
              <p class="text-xs text-gray-600">Default label</p>
            </div>

            <div class="flex flex-col items-center gap-2 rounded-lg bg-gray-50 p-4">
              <Spinner label="Uploading files" type="material" />
              <p class="text-xs text-gray-600">Custom label</p>
            </div>

            <div class="flex flex-col items-center gap-2 rounded-lg bg-gray-50 p-4">
              <Spinner label="Processing request" type="gradient" />
              <p class="text-xs text-gray-600">Descriptive label</p>
            </div>
          </div>
        </div>
      </section>

      <!-- All Animation Types Showcase -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">All 14 Animation Types</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid grid-cols-3 md:grid-cols-5 gap-6">
            <div v-for="type in types" :key="type" class="flex flex-col items-center gap-3">
              <div class="flex items-center justify-center w-full h-24 rounded-lg bg-gray-50">
                <Spinner :type="type" size="lg" />
              </div>
              <p class="text-xs font-medium capitalize text-center text-gray-700">
                {{ type.replace('-', ' ') }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
