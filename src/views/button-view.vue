<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { Button, Spinner } from '@vifui/core'
const isLoading = ref(false)

const variants = [
  { value: 'primary', label: 'Primary' },
  { value: 'secondary', label: 'Secondary' },
  { value: 'soft', label: 'Soft' },
  { value: 'ghost', label: 'Ghost' },
  { value: 'outline', label: 'Outline' },
  { value: 'danger', label: 'Danger' },
] as const

const colors = [
  { value: 'neutral', label: 'Neutral' },
  { value: 'brand', label: 'Brand' },
  { value: 'success', label: 'Success' },
  { value: 'warning', label: 'Warning' },
  { value: 'danger', label: 'Danger' },
] as const

const sizes = [
  { value: 'xs', label: 'X-small' },
  { value: 'sm', label: 'Small' },
  { value: 'md', label: 'Medium' },
  { value: 'lg', label: 'Large' },
  { value: 'xl', label: 'X-Large' },
] as const

const colorVariants = [
  { variant: 'primary', label: 'Primary Variant with Colors' },
  { variant: 'soft', label: 'Soft Variant with Colors' },
  { variant: 'outline', label: 'Outline Variant with Colors' },
  { variant: 'shadow', label: 'Shadow Variant with Colors' },
] as const

const spinnerTypes = [
  { value: 'default', variant: 'primary', color: 'neutral' },
  { value: 'waves', variant: 'secondary', color: 'brand' },
  { value: 'corners', variant: 'soft', color: 'danger' },
  { value: 'border', variant: 'outline', color: 'warning' },
  { value: 'points', variant: 'primary', color: 'success' },
  { value: 'square', variant: 'secondary', color: 'brand' },
  { value: 'gradient', variant: 'soft', color: 'brand' },
  { value: 'rectangle', variant: 'primary', color: 'brand' },
  { value: 'circles', variant: 'secondary', color: 'brand' },
  { value: 'square-rotate', variant: 'soft', color: 'brand' },
  { value: 'scale', variant: 'primary', color: 'brand' },
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

const loadingStates = ref(
  spinnerTypes.reduce(
    (acc, { value }) => {
      acc[value] = false
      return acc
    },
    {} as Record<string, boolean>,
  ),
)

const handlePress = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 4500)
}

const toggleLoading = (type: string) => {
  loadingStates.value[type] = true
  setTimeout(() => {
    loadingStates.value[type] = false
  }, 3000)
}
</script>

<template>
  <div class="min-h-screen p-8">
    <div class="max-w-7xl mx-auto space-y-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Button Component</h1>
        <p class="text-gray-600">
          Comprehensive testing of all button variants, colors, sizes, and states
        </p>
      </div>

      <!-- Default Variants -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Default Variants</h2>
        <div class="flex gap-3 flex-wrap">
          <Button v-for="variant in variants" :key="variant.value" :variant="variant.value">
            {{ variant.label }}
          </Button>
        </div>
      </section>

      <!-- Colors -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Colors</h2>
        <div v-for="colorVariant in colorVariants" :key="colorVariant.variant" class="space-y-3">
          <p class="text-sm font-medium text-gray-700">
            {{ colorVariant.label }}
          </p>
          <div class="flex gap-3 flex-wrap">
            <Button
              v-for="color in colors"
              :key="color.value"
              :variant="colorVariant.variant"
              :color="color.value"
            >
              {{ color.label }}
            </Button>
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Sizes</h2>

        <div class="space-y-4">
          <p class="text-sm font-medium text-gray-700">Text Only</p>
          <div class="flex items-center gap-3 flex-wrap">
            <Button v-for="size in sizes" :key="size.value" :size="size.value">
              {{ size.label }}
            </Button>
          </div>
        </div>

        <div class="space-y-4">
          <p class="text-sm font-medium text-gray-700">With Icon</p>
          <div class="flex items-center gap-3 flex-wrap">
            <Button v-for="size in sizes" :key="size.value" :size="size.value" variant="secondary">
              <Icon icon="gravity-ui:plus" />
              {{ size.label }}
            </Button>
          </div>
        </div>

        <div class="space-y-4">
          <p class="text-sm font-medium text-gray-700">Icon Only</p>
          <div class="flex items-center gap-3 flex-wrap">
            <Button
              v-for="size in sizes"
              :key="size.value"
              :isIconOnly="true"
              :size="size.value"
              :variant="size.value === 'xs' ? 'shadow' : 'soft'"
            >
              <Icon icon="gravity-ui:ellipsis" />
            </Button>
          </div>
        </div>
      </section>

      <!-- With Icons -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">With Icons</h2>
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
      </section>

      <!-- Icon Only -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Icon Only</h2>
        <div class="flex gap-3 flex-wrap">
          <Button variant="soft" :isIconOnly="true" size="sm">
            <Icon icon="gravity-ui:ellipsis" />
          </Button>
          <Button variant="primary" :isIconOnly="true" size="md">
            <Icon icon="gravity-ui:heart" />
          </Button>
          <Button variant="outline" :isIconOnly="true" size="lg">
            <Icon icon="gravity-ui:gear" />
          </Button>
        </div>
      </section>

      <!-- Loading State -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Loading State (Click to Test)</h2>
        <div class="flex gap-3 flex-wrap">
          <Button variant="soft" :isPending="isLoading" @click="handlePress">
            <Icon v-if="!isLoading" icon="gravity-ui:paperclip" />
            {{ isLoading ? 'Uploading...' : 'Upload File' }}
          </Button>
        </div>
      </section>

      <!-- Loading Sizes -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Loading - Button Sizes with Spinners</h2>
        <div class="flex items-center gap-3 flex-wrap">
          <Button
            v-for="size in sizes"
            :key="size.value"
            variant="primary"
            :isPending="true"
            :size="size.value"
          >
            {{ size.label }} Loading
          </Button>
        </div>
      </section>

      <!-- All Spinner Types -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">All 11 Spinner Types (Click to Test)</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button
            v-for="spinner in spinnerTypes"
            :key="spinner.value"
            :variant="spinner.variant"
            :color="spinner.color"
            :isPending="loadingStates[spinner.value]"
            :spinnerType="spinner.value"
            @click="toggleLoading(spinner.value)"
          >
            {{ spinner.value.charAt(0).toUpperCase() + spinner.value.slice(1) }}
          </Button>
        </div>
      </section>

      <!-- Standalone Spinners -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Standalone Spinners - All Types</h2>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-8 p-6">
          <div
            v-for="spinnerType in standaloneSpinners"
            :key="spinnerType"
            class="flex flex-col items-center gap-3"
          >
            <Spinner :type="spinnerType" size="lg" />
            <span class="text-xs font-medium text-gray-600">{{ spinnerType }}</span>
          </div>
        </div>
      </section>

      <!-- Shadow Variant -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Shadow Variant</h2>
        <div class="flex gap-3 flex-wrap">
          <Button variant="shadow">Shadow Button</Button>
          <Button variant="shadow" size="lg">Large Shadow</Button>
          <Button variant="shadow" :isPending="true">Shadow Loading</Button>
        </div>
      </section>

      <!-- As Link -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">As Link</h2>
        <div class="flex gap-3 flex-wrap">
          <Button href="https://github.com" target="_blank"> GitHub Link </Button>
        </div>
      </section>

      <!-- Social Buttons -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Social Buttons</h2>
        <div class="flex w-full max-w-xs flex-col gap-3">
          <Button>
            <Icon icon="devicon:google" />
            Sign in with Google
          </Button>
          <Button>
            <Icon icon="mdi:github" />
            Sign in with GitHub
          </Button>
          <Button>
            <Icon icon="ion:logo-apple" />
            Sign in with Apple
          </Button>
          <Button>
            <Icon icon="typcn:social-linkedin" />
            Sign in with LinkedIn
          </Button>
        </div>
      </section>

      <!-- Real World Example -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Real World Example - E-commerce Actions</h2>
        <div class="w-full max-w-3xl">
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-gray-900">Product Details</h3>
            <p class="text-gray-600">Premium Wireless Headphones</p>
          </div>

          <div class="rounded-lg border border-gray-200 bg-white p-6">
            <div class="mb-6 flex items-start gap-4">
              <div class="h-32 w-32 rounded-lg bg-linear-to-br from-blue-500 to-purple-600"></div>
              <div class="flex-1">
                <h4 class="text-xl font-bold text-gray-900">SoundMax Pro X</h4>
                <p class="mt-1 text-sm text-gray-600">
                  Active noise cancellation, 40hr battery life
                </p>
                <div class="mt-3 flex items-baseline gap-2">
                  <span class="text-3xl font-bold text-gray-900">$299</span>
                  <span class="text-lg text-gray-500 line-through">$399</span>
                  <span
                    class="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700"
                  >
                    25% OFF
                  </span>
                </div>
              </div>
            </div>

            <div class="space-y-3">
              <div class="flex gap-3">
                <Button variant="primary" size="lg" class="flex-1">
                  <Icon icon="gravity-ui:cart-plus" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" :isIconOnly="true">
                  <Icon icon="gravity-ui:heart" />
                </Button>
              </div>

              <Button variant="secondary" size="lg" class="w-full">
                <Icon icon="gravity-ui:eye" />
                View Details
              </Button>

              <div class="flex gap-3">
                <Button variant="soft" color="success" class="flex-1">
                  <Icon icon="gravity-ui:check" />
                  In Stock
                </Button>
                <Button variant="soft" color="neutral" class="flex-1">
                  <Icon icon="gravity-ui:truck" />
                  Free Shipping
                </Button>
              </div>
            </div>
          </div>

          <div class="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <h4 class="mb-3 font-semibold text-amber-900">Quick Actions</h4>
            <div class="flex flex-wrap gap-2">
              <Button variant="ghost" color="warning" size="sm">
                <Icon icon="lucide:share" />
                Share
              </Button>
              <Button variant="ghost" color="warning" size="sm">
                <Icon icon="gravity-ui:bookmark" />
                Save for Later
              </Button>
              <Button variant="ghost" color="warning" size="sm">
                <Icon icon="gravity-ui:bell" />
                Price Alert
              </Button>
              <Button variant="ghost" color="danger" size="sm">
                <Icon icon="gravity-ui:circle-exclamation" />
                Report Issue
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
