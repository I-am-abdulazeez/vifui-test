<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { Button, Spinner } from '@vifui/core'

const variants = ['primary', 'secondary', 'soft', 'ghost', 'outline', 'danger'] as const
const colors = ['neutral', 'brand', 'success', 'warning', 'danger'] as const
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

const spinnerTypes = [
  'default',
  'waves',
  'corners',
  'border',
  'points',
  'square',
  'gradient',
  'rectangle',
  'circles',
  'square-rotate',
  'scale',
] as const

const standaloneSpinners = [
  'default',
  'waves',
  'corners',
  'border',
  'points',
  'square',
  'gradient',
  'rectangle',
  'circles',
  'square-rotate',
  'scale',
  'material',
] as const

const isLoading = ref(false)
const loadingStates = ref<Record<string, boolean>>({})

const handlePress = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}

const toggleLoading = (id: string) => {
  loadingStates.value[id] = true
  setTimeout(() => {
    loadingStates.value[id] = false
  }, 3000)
}
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <div class="max-w-5xl mx-auto space-y-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Button Component</h1>
        <p class="text-gray-600">
          Comprehensive testing of button variants, colors, sizes, and states
        </p>
      </div>

      <!-- Variants -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Button Variants</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="flex gap-3 flex-wrap">
            <Button v-for="variant in variants" :key="variant" :variant="variant">
              {{ variant.charAt(0).toUpperCase() + variant.slice(1) }}
            </Button>
          </div>
        </div>
      </section>

      <!-- Colors -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Colors (Primary Variant)</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="flex gap-3 flex-wrap">
            <Button v-for="color in colors" :key="color" :color="color" variant="primary">
              {{ color.charAt(0).toUpperCase() + color.slice(1) }}
            </Button>
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Sizes</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Text Buttons</p>
            <div class="flex items-center gap-3 flex-wrap">
              <Button v-for="size in sizes" :key="size" :size="size">
                {{ size.toUpperCase() }}
              </Button>
            </div>
          </div>

          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">With Icons</p>
            <div class="flex items-center gap-3 flex-wrap">
              <Button v-for="size in sizes" :key="size" :size="size" variant="secondary">
                <Icon icon="gravity-ui:plus" />
                {{ size.toUpperCase() }}
              </Button>
            </div>
          </div>

          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Icon Only</p>
            <div class="flex items-center gap-3 flex-wrap">
              <Button
                v-for="size in sizes"
                :key="size"
                :isIconOnly="true"
                :size="size"
                variant="soft"
              >
                <Icon icon="gravity-ui:ellipsis" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <!-- With Icons -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Buttons with Icons</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="flex gap-3 flex-wrap">
            <Button>
              <Icon icon="gravity-ui:globe" />
              Search
            </Button>
            <Button variant="secondary">
              <Icon icon="gravity-ui:plus" />
              Add Member
            </Button>
            <Button variant="soft">
              <Icon icon="gravity-ui:envelope" />
              Email
            </Button>
            <Button variant="danger">
              <Icon icon="gravity-ui:trash-bin" />
              Delete
            </Button>
          </div>
        </div>
      </section>

      <!-- Loading States -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Loading States</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Interactive Demo</p>
            <Button variant="soft" :isPending="isLoading" @click="handlePress">
              <Icon v-if="!isLoading" icon="gravity-ui:paperclip" />
              {{ isLoading ? 'Uploading...' : 'Upload File' }}
            </Button>
          </div>

          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">
              Different Spinner Types (Click to Test)
            </p>
            <div class="grid grid-cols-3 md:grid-cols-4 gap-3">
              <Button
                v-for="spinnerType in spinnerTypes"
                :key="spinnerType"
                variant="primary"
                :isPending="loadingStates[spinnerType]"
                :spinnerType="spinnerType"
                @click="toggleLoading(spinnerType)"
              >
                {{ spinnerType.charAt(0).toUpperCase() + spinnerType.slice(1) }}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <!-- Standalone Spinners -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Standalone Spinners</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid grid-cols-4 md:grid-cols-6 gap-8">
            <div
              v-for="spinnerType in standaloneSpinners"
              :key="spinnerType"
              class="flex flex-col items-center gap-2"
            >
              <Spinner :type="spinnerType" size="lg" />
              <span class="text-xs text-gray-600">{{ spinnerType }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Real World Example -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Real-World Example: Product Card</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 max-w-sm">
          <div class="mb-4">
            <div
              class="h-32 w-full rounded-lg bg-linear-to-br from-red-500 to-orange-600 mb-4"
            ></div>
            <h3 class="text-xl font-bold mb-1">Premium Headphones</h3>
            <p class="text-sm text-gray-600 mb-2">Active noise cancellation, 40hr battery</p>
            <div class="flex items-baseline gap-2 mb-4">
              <span class="text-2xl font-bold">$299</span>
              <span class="text-sm text-gray-500 line-through">$399</span>
            </div>
          </div>
          <div class="space-y-2">
            <Button size="lg" class="w-full">
              <Icon icon="gravity-ui:cart-plus" />
              Add to Cart
            </Button>
            <div class="flex gap-2">
              <Button variant="soft" size="sm" class="flex-1">
                <Icon icon="gravity-ui:heart" />
                Wishlist
              </Button>
              <Button variant="outline" size="sm" class="flex-1">
                <Icon icon="gravity-ui:eye" />
                Details
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
