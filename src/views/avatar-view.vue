<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { AvatarRoot, AvatarImage, AvatarFallback, AvatarGroup } from '@vifui/core'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
const shapes = ['default', 'circle', 'square'] as const
const ringColors = ['brand', 'success', 'warning', 'danger', 'neutral'] as const

const userImage = 'https://github.com/favorodera.png'
const userName = 'Favour Emeka'
const userInitials = 'FE'
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <div class="max-w-5xl mx-auto space-y-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Avatar Component</h1>
        <p class="text-gray-600">
          Comprehensive testing of avatar variants, sizes, shapes, and states
        </p>
      </div>

      <!-- Sizes -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Sizes</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="flex items-end gap-6">
            <div v-for="size in sizes" :key="size" class="flex flex-col items-center gap-3">
              <span class="text-xs font-medium uppercase text-gray-700">{{ size }}</span>
              <AvatarRoot :size="size" shape="circle">
                <AvatarImage :src="userImage" :alt="userName" />
                <AvatarFallback>{{ userInitials }}</AvatarFallback>
              </AvatarRoot>
            </div>
          </div>
        </div>
      </section>

      <!-- Shapes -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Shapes</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div v-for="shape in shapes" :key="shape">
            <p class="mb-3 text-sm font-medium capitalize text-gray-700">{{ shape }}</p>
            <div class="flex items-end gap-6">
              <AvatarRoot v-for="size in sizes" :key="size" :size="size" :shape="shape">
                <AvatarImage :src="userImage" :alt="userName" />
                <AvatarFallback>{{ userInitials }}</AvatarFallback>
              </AvatarRoot>
            </div>
          </div>
        </div>
      </section>

      <!-- Variants -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Variants</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Flat (Default)</p>
            <div class="flex items-end gap-6">
              <AvatarRoot
                v-for="size in sizes"
                :key="size"
                variant="flat"
                :size="size"
                shape="circle"
              >
                <AvatarImage :src="userImage" :alt="userName" />
                <AvatarFallback>{{ userInitials }}</AvatarFallback>
              </AvatarRoot>
            </div>
          </div>

          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Ringed with Colors</p>
            <div class="flex items-end gap-6">
              <AvatarRoot
                v-for="color in ringColors"
                :key="color"
                variant="ringed"
                size="md"
                :ring-color="color"
                shape="circle"
              >
                <AvatarImage :src="userImage" :alt="userName" />
                <AvatarFallback>{{ userInitials }}</AvatarFallback>
              </AvatarRoot>
            </div>
          </div>
        </div>
      </section>

      <!-- Fallbacks -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Fallbacks</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Text Fallbacks</p>
            <div class="flex items-end gap-6">
              <AvatarRoot v-for="size in sizes" :key="size" :size="size" shape="circle">
                <AvatarImage src="" :alt="userName" />
                <AvatarFallback>{{ userInitials }}</AvatarFallback>
              </AvatarRoot>
            </div>
          </div>

          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Icon Fallbacks</p>
            <div class="flex items-end gap-6">
              <AvatarRoot size="xs" shape="circle">
                <AvatarImage src="" alt="" />
                <AvatarFallback><Icon icon="lucide:user" /></AvatarFallback>
              </AvatarRoot>
              <AvatarRoot size="sm" shape="circle">
                <AvatarImage src="" alt="" />
                <AvatarFallback><Icon icon="lucide:bot" /></AvatarFallback>
              </AvatarRoot>
              <AvatarRoot size="md" shape="circle">
                <AvatarImage src="" alt="" />
                <AvatarFallback><Icon icon="lucide:shield" /></AvatarFallback>
              </AvatarRoot>
              <AvatarRoot size="lg" shape="circle">
                <AvatarImage src="" alt="" />
                <AvatarFallback><Icon icon="lucide:star" /></AvatarFallback>
              </AvatarRoot>
              <AvatarRoot size="xl" shape="circle">
                <AvatarImage src="" alt="" />
                <AvatarFallback><Icon icon="lucide:heart" /></AvatarFallback>
              </AvatarRoot>
            </div>
          </div>
        </div>
      </section>

      <!-- States -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">States</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Loading State</p>
            <div class="flex items-end gap-6">
              <AvatarRoot v-for="size in sizes" :key="size" :size="size" shape="circle" loading>
                <AvatarImage :src="userImage" :alt="userName" />
                <AvatarFallback>{{ userInitials }}</AvatarFallback>
              </AvatarRoot>
            </div>
          </div>

          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Disabled State</p>
            <div class="flex items-end gap-6">
              <AvatarRoot v-for="size in sizes" :key="size" :size="size" shape="circle" disabled>
                <AvatarImage :src="userImage" :alt="userName" />
                <AvatarFallback>{{ userInitials }}</AvatarFallback>
              </AvatarRoot>
            </div>
          </div>
        </div>
      </section>

      <!-- Avatar Group -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Avatar Group</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Group with Max Count</p>
            <AvatarGroup :max="3">
              <AvatarRoot variant="ringed">
                <AvatarImage :src="userImage" :alt="userName" />
                <AvatarFallback>FE</AvatarFallback>
              </AvatarRoot>
              <AvatarRoot variant="ringed">
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </AvatarRoot>
              <AvatarRoot variant="ringed">
                <AvatarImage src="https://github.com/vercel.png" alt="Vercel" />
                <AvatarFallback>VC</AvatarFallback>
              </AvatarRoot>
              <AvatarRoot variant="ringed">
                <AvatarImage src="https://github.com/vuejs.png" alt="Vue" />
                <AvatarFallback>VU</AvatarFallback>
              </AvatarRoot>
            </AvatarGroup>
          </div>

          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Square Group</p>
            <AvatarGroup :max="3">
              <AvatarRoot shape="square">
                <AvatarImage :src="userImage" :alt="userName" />
                <AvatarFallback>FE</AvatarFallback>
              </AvatarRoot>
              <AvatarRoot shape="square">
                <AvatarImage src="" alt="" />
                <AvatarFallback>AB</AvatarFallback>
              </AvatarRoot>
              <AvatarRoot shape="square">
                <AvatarImage src="" alt="" />
                <AvatarFallback>CD</AvatarFallback>
              </AvatarRoot>
              <AvatarRoot shape="square">
                <AvatarImage src="" alt="" />
                <AvatarFallback>EF</AvatarFallback>
              </AvatarRoot>
            </AvatarGroup>
          </div>
        </div>
      </section>

      <!-- Real-World Example -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Real-World Example: User Profile</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="flex items-center gap-4">
            <AvatarRoot variant="ringed" size="xl" ring-color="brand" shape="circle">
              <AvatarImage :src="userImage" :alt="userName" />
              <AvatarFallback>{{ userInitials }}</AvatarFallback>
            </AvatarRoot>
            <div>
              <h3 class="font-semibold text-gray-900 text-lg">{{ userName }}</h3>
              <p class="text-sm text-gray-600">Software Engineer</p>
              <p class="text-xs text-gray-500 mt-1">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
