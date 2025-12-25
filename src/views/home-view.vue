<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button } from '@vifui/core'
import { useRouter } from 'vue-router'

const router = useRouter()

const components = [
  {
    name: 'Button',
    route: '/button',
    icon: 'bx:joystick-button',
    description: 'Interactive buttons with multiple variants, colors, sizes, and loading states',
    status: 'Ready',
  },
  {
    name: 'Checkbox',
    route: '/checkbox',
    icon: 'gravity-ui:check',
    description: 'Customizable checkboxes with different colors and sizes',
    status: 'Ready',
  },
  {
    name: 'Accordion',
    route: '/accordion',
    icon: 'gravity-ui:chevron-down',
    description: 'Expandable accordions with multiple style variants',
    status: 'Coming Soon',
  },
  {
    name: 'Card',
    route: '/card',
    icon: 'gravity-ui:square-dashed',
    description: 'Flexible card components with hover effects',
    status: 'Ready',
  },
]

const navigateTo = (route: string) => {
  if (route) {
    router.push(route)
  }
}
</script>

<template>
  <div class="min-h-screen">
    <div class="max-w-7xl mx-auto px-8 py-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 mb-6">
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center">
            <Icon icon="gravity-ui:cube" class="text-white text-3xl" />
          </div>
        </div>
        <h1 class="text-6xl font-bold mb-4 text-gray-800">VifUI Testing Ground</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          A comprehensive testing environment for VifUI components. Test every variant, color, size,
          and state in one place.
        </p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Icon icon="gravity-ui:layers" class="text-blue-600 text-xl" />
            </div>
            <span class="text-3xl font-bold text-gray-900">4</span>
          </div>
          <p class="text-gray-600">Components</p>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Icon icon="gravity-ui:palette" class="text-purple-600 text-xl" />
            </div>
            <span class="text-3xl font-bold text-gray-900">50+</span>
          </div>
          <p class="text-gray-600">Variants Tested</p>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Icon icon="gravity-ui:rocket" class="text-green-600 text-xl" />
            </div>
            <span class="text-3xl font-bold text-gray-900">100%</span>
          </div>
          <p class="text-gray-600">Coverage Goal</p>
        </div>
      </div>

      <!-- Components Grid -->
      <div>
        <h2 class="text-3xl font-bold mb-8 text-gray-900">Available Components</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="component in components"
            :key="component.name"
            class="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-sm transition-all duration-300 cursor-pointer group"
            :class="{ 'opacity-60 cursor-not-allowed': component.status !== 'Ready' }"
            @click="component.status === 'Ready' ? navigateTo(component.route) : null"
          >
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center gap-4">
                <div
                  class="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform"
                >
                  <Icon :icon="component.icon" class="text-white text-2xl" />
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-1">{{ component.name }}</h3>
                  <span
                    class="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                    :class="{
                      'bg-green-100 text-green-700': component.status === 'Ready',
                      'bg-amber-100 text-amber-700': component.status === 'Coming Soon',
                    }"
                  >
                    {{ component.status }}
                  </span>
                </div>
              </div>
              <Icon
                v-if="component.status === 'Ready'"
                icon="gravity-ui:arrow-right"
                class="text-gray-400 text-xl group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
              />
            </div>
            <p class="text-gray-600 leading-relaxed">{{ component.description }}</p>
          </div>
        </div>
      </div>

      <!-- Quick Info -->
      <div class="mt-16 rounded-2xl p-8 text-white">
        <div class="flex items-start gap-6">
          <div class="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center shrink-0">
            <Icon icon="bx:bulb" class="text-2xl text-white" />
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-2 text-gray-700">Testing Made Easy</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Each component page includes comprehensive examples of all variants, colors, sizes,
              and states. Interactive demos let you test functionality in real-time.
            </p>
            <div class="flex gap-3">
              <Button variant="soft" size="sm" @click="navigateTo('/button')">
                <Icon icon="gravity-ui:book" />
                View Docs
              </Button>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-16 text-center text-gray-500">
        <p>Built by VifUI Team</p>
      </div>
    </div>
  </div>
</template>
