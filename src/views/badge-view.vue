<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { Badge } from '@vifui/core'

const variants = ['solid', 'soft', 'outline', 'flat'] as const
const colors = ['neutral', 'brand', 'success', 'warning', 'danger'] as const
const sizes = ['xs', 'sm', 'md', 'lg'] as const

const tags = ref([
  { id: 1, text: 'Design', color: 'brand' as const },
  { id: 2, text: 'Development', color: 'success' as const },
  { id: 3, text: 'Marketing', color: 'warning' as const },
])

const removeTag = (id: number) => {
  tags.value = tags.value.filter((t) => t.id !== id)
}
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <div class="max-w-5xl mx-auto space-y-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Badge Component</h1>
        <p class="text-gray-600">
          Comprehensive testing of badge variants, colors, sizes, and features
        </p>
      </div>

      <!-- Variants -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Badge Variants</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="flex flex-wrap gap-3">
            <Badge v-for="variant in variants" :key="variant" :variant="variant">
              {{ variant.charAt(0).toUpperCase() + variant.slice(1) }}
            </Badge>
          </div>
        </div>
      </section>

      <!-- Colors -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Colors</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
          <div v-for="variant in variants" :key="variant">
            <p class="mb-2 text-sm font-medium capitalize text-gray-700">{{ variant }}</p>
            <div class="flex flex-wrap gap-3">
              <Badge v-for="color in colors" :key="color" :variant="variant" :color="color">
                {{ color.charAt(0).toUpperCase() + color.slice(1) }}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Sizes</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="flex flex-wrap items-center gap-3">
            <Badge v-for="size in sizes" :key="size" :size="size">
              {{ size.toUpperCase() }}
            </Badge>
          </div>
        </div>
      </section>

      <!-- With Icons -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">With Icons</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
          <div>
            <p class="mb-2 text-sm font-medium text-gray-700">Start Icon</p>
            <div class="flex flex-wrap gap-3">
              <Badge :startIcon="Icon" color="success">
                <Icon icon="lucide:check" />
                Verified
              </Badge>
              <Badge variant="soft" :startIcon="Icon" color="warning">
                <Icon icon="lucide:alert-triangle" />
                Warning
              </Badge>
              <Badge variant="outline" :startIcon="Icon" color="brand">
                <Icon icon="lucide:star" />
                Featured
              </Badge>
            </div>
          </div>

          <div>
            <p class="mb-2 text-sm font-medium text-gray-700">End Icon</p>
            <div class="flex flex-wrap gap-3">
              <Badge :endIcon="Icon" color="brand">
                Next
                <Icon icon="lucide:arrow-right" />
              </Badge>
              <Badge variant="soft" :endIcon="Icon" color="success">
                External
                <Icon icon="lucide:external-link" />
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <!-- With Dot Indicator -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">With Dot Indicator</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="flex flex-wrap gap-3">
            <Badge dot color="success">Online</Badge>
            <Badge dot color="warning">Away</Badge>
            <Badge dot color="danger">Offline</Badge>
            <Badge dot color="neutral">Idle</Badge>
          </div>
        </div>
      </section>

      <!-- Rounded / Pill -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Rounded (Pill Shape)</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="flex flex-wrap gap-3">
            <Badge rounded>Rounded</Badge>
            <Badge rounded variant="soft" color="success">Success</Badge>
            <Badge rounded variant="outline" color="warning">Warning</Badge>
            <Badge rounded dot color="brand">Online</Badge>
          </div>
        </div>
      </section>

      <!-- Removable -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Removable Badges</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
          <div>
            <p class="mb-2 text-sm font-medium text-gray-700">Click X to remove</p>
            <div class="flex flex-wrap gap-3">
              <Badge
                v-for="tag in tags"
                :key="tag.id"
                removable
                variant="soft"
                :color="tag.color"
                @remove="removeTag(tag.id)"
              >
                {{ tag.text }}
              </Badge>
            </div>
          </div>

          <div>
            <p class="mb-2 text-sm font-medium text-gray-700">Different Variants</p>
            <div class="flex flex-wrap gap-3">
              <Badge removable color="brand">Solid</Badge>
              <Badge removable variant="soft" color="success">Soft</Badge>
              <Badge removable variant="outline" color="warning">Outline</Badge>
            </div>
          </div>
        </div>
      </section>

      <!-- Real-World Example -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Real-World Example: Task Card</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 max-w-md">
          <div class="flex items-start justify-between mb-3">
            <h3 class="font-semibold text-gray-900">Redesign Landing Page</h3>
            <Badge dot color="warning" size="sm">In Progress</Badge>
          </div>
          <p class="text-sm text-gray-600 mb-4">Update hero section and CTA buttons</p>

          <div class="flex flex-wrap gap-2 mb-4">
            <Badge variant="soft" color="brand" size="xs">Design</Badge>
            <Badge variant="soft" color="success" size="xs">Frontend</Badge>
            <Badge variant="outline" color="neutral" size="xs">
              <Icon icon="lucide:zap" />
              High Priority
            </Badge>
          </div>

          <div class="flex items-center justify-between pt-3 border-t border-gray-100">
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full bg-linear-to-br from-blue-400 to-purple-500"></div>
              <span class="text-sm text-gray-700">Alex Johnson</span>
            </div>
            <Badge variant="soft" color="neutral" size="xs">Due: 2d</Badge>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
