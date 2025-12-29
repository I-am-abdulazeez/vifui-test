<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Badge, Button } from '@vifui/core'
import { useRouter } from 'vue-router'

const router = useRouter()

const components = [
  {
    name: 'Accordion',
    route: '/accordion',
    description: 'Expandable accordions with multiple style variants',
    status: 'Ready',
  },
  {
    name: 'Alert',
    route: '/alert',
    description: 'Notification alerts with multiple variants and actions',
    status: 'Ready',
  },
  {
    name: 'Avatar',
    route: '/avatar',
    description: 'User avatars with different shapes, sizes, and states',
    status: 'Ready',
  },
  {
    name: 'Badge',
    route: '/badge',
    description: 'Status badges with colors, icons, and removable options',
    status: 'Ready',
  },
  {
    name: 'Breadcrumb',
    route: '/breadcrumbs',
    description: 'Navigation breadcrumbs with custom separators',
    status: 'Ready',
  },
  {
    name: 'Button',
    route: '/button',
    description: 'Interactive buttons with multiple variants, colors, sizes, and loading states',
    status: 'Ready',
  },
  {
    name: 'Card',
    route: '/card',
    description: 'Flexible card components with hover effects',
    status: 'Ready',
  },
  {
    name: 'Checkbox',
    route: '/checkbox',
    description: 'Customizable checkboxes with different colors and sizes',
    status: 'Ready',
  },
  {
    name: 'Divider',
    route: '/divider',
    description: 'Content dividers with labels and orientations',
    status: 'Ready',
  },
  {
    name: 'List',
    route: '/list',
    description: 'Flexible lists with avatars, icons, and actions',
    status: 'Ready',
  },
  {
    name: 'Popover',
    route: '/popover',
    description: 'Contextual popovers with rich content and multiple placements',
    status: 'Ready',
  },
  {
    name: 'Spinner',
    route: '/spinner',
    description: 'Loading spinners with multiple animation types and colors',
    status: 'Ready',
  },
  {
    name: 'Switch',
    route: '/switch',
    description: 'Customizable switches with different colors and sizes',
    status: 'Ready',
  },
  {
    name: 'Tabs',
    route: '/tabs',
    description: 'Tabbed navigation with pill and link variants',
    status: 'Ready',
  },
  {
    name: 'Tooltip',
    route: '/tooltip',
    description: 'Contextual tooltips with rich content support',
    status: 'Ready',
  },
  {
    name: 'Upload',
    route: '/upload',
    description: 'File upload with drag-and-drop and validation',
    status: 'Ready',
  },
  {
    name: 'Dialog',
    route: '/dialog',
    description: 'Modal dialogs with various sizes and states',
    status: 'Coming Soon',
  },
  {
    name: 'Dropdown',
    route: '/dropdown',
    description: 'Dropdown menus with rich content and keyboard navigation',
    status: 'Coming Soon',
  },
  {
    name: 'Input',
    route: '/input',
    description: 'Text inputs with validation, icons, and different states',
    status: 'Coming Soon',
  },
  {
    name: 'Notification',
    route: '/notification',
    description: 'Toast notifications with multiple positions and actions',
    status: 'Coming Soon',
  },
  {
    name: 'Pagination',
    route: '/pagination',
    description: 'Page navigation with customizable styles',
    status: 'Coming Soon',
  },
  {
    name: 'Radio',
    route: '/radio',
    description: 'Radio buttons with different colors and sizes',
    status: 'Coming Soon',
  },
  {
    name: 'Select',
    route: '/select',
    description: 'Dropdown select with search and multi-select support',
    status: 'Coming Soon',
  },
  {
    name: 'Table',
    route: '/table',
    description: 'Data tables with sorting, filtering, and pagination',
    status: 'Coming Soon',
  },
  {
    name: 'Textarea',
    route: '/textarea',
    description: 'Multi-line text inputs with auto-resize support',
    status: 'Coming Soon',
  },
]

const stats = [
  {
    label: 'Components',
    value: components.length,
    icon: 'gravity-ui:layers',
    bg: 'bg-blue-100',
    color: 'text-blue-600',
  },
  {
    label: 'Variants Tested',
    value: '50+',
    icon: 'gravity-ui:palette',
    bg: 'bg-purple-100',
    color: 'text-purple-600',
  },
  {
    label: 'Components Ready',
    value: components.filter((c) => c.status === 'Ready').length,
    icon: 'gravity-ui:rocket',
    bg: 'bg-green-100',
    color: 'text-green-600',
  },
]

const navigateTo = (route: string) => {
  if (route) {
    router.push(route)
  }
}
</script>

<template>
  <div class="min-h-screen bg-linear-to-br from-gray-50 via-white to-purple-50">
    <div class="max-w-7xl mx-auto px-8 py-16">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 mb-6">
          <div
            class="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-800 rounded-2xl flex items-center justify-center"
          >
            <Icon icon="gravity-ui:cube" class="text-white text-3xl" />
          </div>
        </div>
        <h1 class="text-5xl font-bold mb-4">VifUI Testing Ground</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          A comprehensive testing environment for VifUI components. Test every variant, color, size,
          and state in one place.
        </p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
        >
          <div class="flex items-center gap-3 mb-2">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center" :class="stat.bg">
              <Icon :icon="stat.icon" class="text-xl" :class="stat.color" />
            </div>
            <span class="text-2xl font-bold text-gray-900">
              {{ stat.value }}
            </span>
          </div>
          <p class="text-gray-600 text-sm">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Components Grid -->
      <div>
        <h2 class="text-3xl font-bold mb-8 text-gray-900">Available Components</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div
            v-for="component in components"
            :key="component.name"
            class="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 cursor-pointer group"
            :class="{ 'opacity-60 cursor-not-allowed': component.status !== 'Ready' }"
            @click="component.status === 'Ready' ? navigateTo(component.route) : null"
          >
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center gap-4">
                <div>
                  <h3 class="text-xl font-bold text-gray-800 mb-1">{{ component.name }}</h3>
                  <Badge
                    variant="soft"
                    :color="component.status === 'Ready' ? 'success' : 'warning'"
                  >
                    {{ component.status }}
                  </Badge>
                </div>
              </div>
              <Icon
                v-if="component.status === 'Ready'"
                icon="gravity-ui:arrow-right"
                class="text-gray-400 text-xl group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
              />
            </div>
            <p class="text-gray-600 leading-relaxed text-sm">{{ component.description }}</p>
          </div>
        </div>
      </div>

      <!-- Quick Info -->
      <div class="mt-16 bg-gray-900 rounded-2xl p-8 text-white">
        <div class="flex items-start gap-6">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
            <Icon icon="bx:bulb" class="text-2xl" />
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-2">Testing Made Easy</h3>
            <p class="text-blue-50 leading-relaxed mb-4">
              Each component page includes comprehensive examples of all variants, colors, sizes,
              and states. Interactive demos let you test functionality in real-time.
            </p>
            <div class="flex gap-3">
              <Button variant="soft" size="sm" class="text-white" @click="navigateTo('/button')">
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
