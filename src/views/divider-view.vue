<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Divider } from '@vifui/core'

const variants = ['solid', 'dashed', 'dotted'] as const
const sizes = ['xs', 'sm', 'md', 'lg'] as const
const colors = ['neutral', 'brand', 'success', 'warning', 'danger'] as const
const labelPositions = ['start', 'center', 'end'] as const
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <div class="max-w-5xl mx-auto space-y-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Divider Component</h1>
        <p class="text-gray-600">
          Comprehensive testing of divider variants, sizes, colors, and orientations
        </p>
      </div>

      <!-- Orientation -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Orientation</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Horizontal</p>
            <Divider />
          </div>

          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Vertical</p>
            <div class="flex h-24 items-center gap-4">
              <span>Item A</span>
              <Divider orientation="vertical" />
              <span>Item B</span>
              <Divider orientation="vertical" />
              <span>Item C</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Variants -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Variants</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div v-for="variant in variants" :key="variant">
            <p class="mb-3 text-sm font-medium capitalize text-gray-700">{{ variant }}</p>
            <Divider :variant="variant">{{ variant }}</Divider>
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Sizes</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div v-for="size in sizes" :key="size">
            <p class="mb-3 text-sm font-medium uppercase text-gray-700">{{ size }}</p>
            <Divider :size="size">{{ size.toUpperCase() }}</Divider>
          </div>
        </div>
      </section>

      <!-- Colors -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Colors</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div v-for="color in colors" :key="color">
            <p class="mb-3 text-sm font-medium capitalize text-gray-700">{{ color }}</p>
            <Divider :color="color">{{ color }}</Divider>
          </div>
        </div>
      </section>

      <!-- Label Positions -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Label Positions</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div v-for="position in labelPositions" :key="position">
            <p class="mb-3 text-sm font-medium capitalize text-gray-700">{{ position }}</p>
            <Divider :label-position="position">
              {{ position.charAt(0).toUpperCase() + position.slice(1) }} Label
            </Divider>
          </div>
        </div>
      </section>

      <!-- Vertical with Label -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Vertical with Label</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="flex h-40 items-center gap-6">
            <div class="text-center">
              <p class="text-2xl font-bold">Section 1</p>
              <p class="text-sm text-gray-600">Content here</p>
            </div>
            <Divider orientation="vertical" label-position="center">Settings</Divider>
            <div class="text-center">
              <p class="text-2xl font-bold">Section 2</p>
              <p class="text-sm text-gray-600">More content</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Real-World Example: Profile Card -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Real-World Example: Profile Card</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="max-w-md mx-auto">
            <!-- Header -->
            <div class="flex items-center gap-4">
              <div class="h-16 w-16 rounded-full bg-linear-to-br from-blue-500 to-purple-600"></div>
              <div>
                <h3 class="text-lg font-bold text-gray-900">Olamide Olanrewaju</h3>
                <p class="text-sm text-gray-600">Senior Product Designer</p>
              </div>
            </div>

            <Divider variant="solid" color="neutral" class="my-4" />

            <!-- Stats -->
            <div class="flex items-center justify-around">
              <div class="text-center">
                <div class="text-2xl font-bold text-gray-900">124</div>
                <div class="text-xs text-gray-600">Projects</div>
              </div>
              <Divider orientation="vertical" size="md" color="neutral" class="h-12" />
              <div class="text-center">
                <div class="text-2xl font-bold text-gray-900">1.2K</div>
                <div class="text-xs text-gray-600">Followers</div>
              </div>
              <Divider orientation="vertical" size="md" color="neutral" class="h-12" />
              <div class="text-center">
                <div class="text-2xl font-bold text-gray-900">856</div>
                <div class="text-xs text-gray-600">Following</div>
              </div>
            </div>

            <Divider variant="dashed" color="neutral" class="my-4">Bio</Divider>

            <!-- Bio -->
            <p class="text-sm text-gray-700">
              Passionate about creating beautiful, user-friendly interfaces.
            </p>

            <Divider variant="dotted" color="brand" class="my-4">Skills</Divider>

            <!-- Skills -->
            <div class="flex flex-wrap gap-2">
              <span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                UI Design
              </span>
              <span
                class="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700"
              >
                Prototyping
              </span>
              <span class="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                User Research
              </span>
            </div>

            <Divider variant="solid" color="success" size="sm" class="my-4" />

            <!-- Contact -->
            <div class="space-y-2">
              <div class="flex items-center gap-2 text-sm text-gray-700">
                <Icon icon="gravity-ui:envelope" class="text-gray-400" />
                <span>olamide.ola@example.com</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-700">
                <Icon icon="gravity-ui:globe" class="text-gray-400" />
                <span>www.olamide.design</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
