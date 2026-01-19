<script setup lang="ts">
import { ref } from 'vue'
import { Skeleton, CardRoot, CardHeader, CardBody, Button } from '@vifui/core'

const presets = ['default', 'circle', 'rectangle', 'square'] as const
const presetModel = ref<(typeof presets)[number]>('default')

const showContent = ref(false)
const toggleContent = () => {
  showContent.value = !showContent.value
}
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <div class="max-w-6xl mx-auto space-y-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Skeleton Component</h1>
        <p class="text-gray-600">
          Comprehensive testing of skeleton loading states and real-world use cases
        </p>
      </div>

      <!-- Basic Usage -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Basic Usage</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid grid-cols-1 max-w-md mx-auto gap-6">
            <div v-for="preset in presets" :key="preset" class="space-y-2">
              <p class="text-xs font-medium capitalize text-gray-600">{{ preset }}</p>
              <Skeleton
                :preset="preset"
                class="w-32"
                :class="[
                  preset === 'default'
                    ? 'h-4'
                    : preset === 'circle'
                      ? 'h-32'
                      : preset === 'rectangle'
                        ? 'h-20'
                        : 'h-32',
                ]"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Presets -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Presets</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="preset in presets" :key="preset" class="space-y-3">
              <p class="text-sm font-semibold capitalize text-gray-900">{{ preset }}</p>
              <div class="flex items-center justify-center bg-gray-50 p-6 rounded-lg">
                <Skeleton
                  :preset="preset"
                  :class="[
                    preset === 'default'
                      ? 'w-32 h-4'
                      : preset === 'circle'
                        ? 'size-20'
                        : preset === 'rectangle'
                          ? 'w-32 h-16'
                          : 'size-20',
                  ]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Sizes</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-8">
          <div class="space-y-3">
            <p class="text-sm font-semibold text-gray-900">Text Lines</p>
            <div class="space-y-2 max-w-md">
              <Skeleton class="h-3 w-full" />
              <Skeleton class="h-4 w-full" />
              <Skeleton class="h-5 w-3/4" />
              <Skeleton class="h-6 w-1/2" />
            </div>
          </div>

          <div class="space-y-3">
            <p class="text-sm font-semibold text-gray-900">Avatars</p>
            <div class="flex gap-3">
              <Skeleton preset="circle" class="size-8" />
              <Skeleton preset="circle" class="size-10" />
              <Skeleton preset="circle" class="size-12" />
              <Skeleton preset="circle" class="size-16" />
            </div>
          </div>

          <div class="space-y-3">
            <p class="text-sm font-semibold text-gray-900">Buttons</p>
            <div class="flex gap-3">
              <Skeleton class="h-8 w-20 rounded-md" />
              <Skeleton class="h-9 w-24 rounded-md" />
              <Skeleton class="h-10 w-28 rounded-md" />
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive Settings -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Interactive Settings</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid md:grid-cols-[1fr_300px] gap-8">
            <div class="flex flex-col items-center justify-center">
              <p class="text-sm text-gray-600 mb-4">Preview</p>
              <Skeleton
                :preset="presetModel"
                class="w-64"
                :class="[
                  presetModel === 'default'
                    ? 'h-6'
                    : presetModel === 'circle'
                      ? 'h-64'
                      : presetModel === 'rectangle'
                        ? 'h-32'
                        : 'h-64',
                ]"
              />
            </div>

            <CardRoot>
              <CardHeader>
                <h3 class="text-sm font-semibold text-gray-900">Skeleton Settings</h3>
              </CardHeader>

              <CardBody class="grid grid-cols-1 gap-4">
                <div class="space-y-2">
                  <p class="text-xs font-medium text-gray-600">Presets</p>
                  <div class="flex flex-wrap gap-2">
                    <Button
                      v-for="preset in presets"
                      :key="preset"
                      size="xs"
                      @click="presetModel = preset"
                      :color="presetModel === preset ? 'brand' : 'neutral'"
                      :variant="presetModel === preset ? 'primary' : 'soft'"
                      class="capitalize"
                    >
                      {{ preset }}
                    </Button>
                  </div>
                </div>
              </CardBody>
            </CardRoot>
          </div>
        </div>
      </section>

      <!-- Real World Examples -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Real World Examples</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-12">
          <!-- Social Media Post -->
          <div class="space-y-4">
            <h3 class="text-base font-semibold text-gray-900">Social Media Post</h3>
            <div class="max-w-md mx-auto">
              <CardRoot>
                <CardBody class="p-4 space-y-4">
                  <div class="flex items-center gap-3">
                    <Skeleton preset="circle" class="size-10" />
                    <div class="space-y-2 flex-1">
                      <Skeleton class="h-4 w-3/4" />
                      <Skeleton class="h-3 w-1/2" />
                    </div>
                  </div>

                  <Skeleton preset="rectangle" class="aspect-video w-full rounded-md" />

                  <div class="space-y-2">
                    <Skeleton class="h-3 w-full" />
                    <Skeleton class="h-3 w-full" />
                    <Skeleton class="h-3 w-2/3" />
                  </div>

                  <div class="flex justify-between items-center pt-2">
                    <div class="flex gap-2">
                      <Skeleton class="size-8 rounded-full" />
                      <Skeleton class="size-8 rounded-full" />
                      <Skeleton class="size-8 rounded-full" />
                    </div>
                    <Skeleton class="h-8 w-16 rounded-sm" />
                  </div>
                </CardBody>
              </CardRoot>
            </div>
          </div>

          <!-- User Profile -->
          <div class="space-y-4">
            <h3 class="text-base font-semibold text-gray-900">User Profile</h3>
            <CardRoot class="max-w-2xl mx-auto">
              <CardBody class="p-6">
                <div class="flex items-start gap-6">
                  <Skeleton preset="circle" class="size-24" />
                  <div class="flex-1 space-y-4">
                    <div class="space-y-2">
                      <Skeleton class="h-6 w-48" />
                      <Skeleton class="h-4 w-32" />
                    </div>
                    <div class="space-y-2">
                      <Skeleton class="h-3 w-full" />
                      <Skeleton class="h-3 w-full" />
                      <Skeleton class="h-3 w-3/4" />
                    </div>
                    <div class="flex gap-3">
                      <Skeleton class="h-9 w-24 rounded-md" />
                      <Skeleton class="h-9 w-24 rounded-md" />
                    </div>
                  </div>
                </div>

                <div class="mt-6 pt-6 border-t border-gray-200">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="text-center space-y-2">
                      <Skeleton class="h-6 w-16 mx-auto" />
                      <Skeleton class="h-3 w-20 mx-auto" />
                    </div>
                    <div class="text-center space-y-2">
                      <Skeleton class="h-6 w-16 mx-auto" />
                      <Skeleton class="h-3 w-20 mx-auto" />
                    </div>
                    <div class="text-center space-y-2">
                      <Skeleton class="h-6 w-16 mx-auto" />
                      <Skeleton class="h-3 w-20 mx-auto" />
                    </div>
                  </div>
                </div>
              </CardBody>
            </CardRoot>
          </div>

          <!-- Product Card -->
          <div class="space-y-4">
            <h3 class="text-base font-semibold text-gray-900">Product Card</h3>
            <CardRoot class="max-w-sm mx-auto">
              <CardBody class="p-4 space-y-4">
                <Skeleton preset="square" class="w-full aspect-square rounded-lg" />

                <div class="space-y-2">
                  <Skeleton class="h-5 w-3/4" />
                  <Skeleton class="h-4 w-1/2" />
                </div>

                <div class="flex items-center gap-2">
                  <Skeleton preset="circle" class="size-5" />
                  <Skeleton class="h-3 w-20" />
                  <Skeleton class="h-3 w-16 ml-auto" />
                </div>

                <div class="space-y-2">
                  <Skeleton class="h-3 w-full" />
                  <Skeleton class="h-3 w-full" />
                  <Skeleton class="h-3 w-4/5" />
                </div>

                <div class="flex gap-2 pt-2">
                  <Skeleton class="h-10 flex-1 rounded-md" />
                  <Skeleton class="size-10 rounded-md" />
                </div>
              </CardBody>
            </CardRoot>
          </div>
        </div>
      </section>

      <!-- Comment Thread -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Comment Thread</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="max-w-2xl mx-auto space-y-4">
            <CardRoot v-for="i in 3" :key="i">
              <CardBody class="p-4">
                <div class="flex gap-3">
                  <Skeleton preset="circle" class="size-10 shrink-0" />
                  <div class="flex-1 space-y-2">
                    <div class="flex items-center gap-2">
                      <Skeleton class="h-4 w-32" />
                      <Skeleton class="h-3 w-16" />
                    </div>
                    <div class="space-y-2">
                      <Skeleton class="h-3 w-full" />
                      <Skeleton class="h-3 w-full" />
                      <Skeleton class="h-3 w-3/4" />
                    </div>
                    <div class="flex gap-4 pt-2">
                      <Skeleton class="h-6 w-12 rounded-sm" />
                      <Skeleton class="h-6 w-12 rounded-sm" />
                      <Skeleton class="h-6 w-12 rounded-sm" />
                    </div>
                  </div>
                </div>
              </CardBody>
            </CardRoot>
          </div>
        </div>
      </section>

      <!-- Data Table -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Data Table</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <CardRoot class="max-w-4xl mx-auto">
            <CardBody class="p-6">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <Skeleton class="h-6 w-32" />
                  <Skeleton class="h-9 w-24 rounded-md" />
                </div>

                <div class="border border-gray-200 rounded-lg overflow-hidden">
                  <div class="grid grid-cols-4 gap-4 bg-gray-50 p-4">
                    <Skeleton class="h-4 w-20" />
                    <Skeleton class="h-4 w-24" />
                    <Skeleton class="h-4 w-16" />
                    <Skeleton class="h-4 w-20" />
                  </div>
                  <div
                    v-for="i in 5"
                    :key="i"
                    class="grid grid-cols-4 gap-4 p-4 border-t border-gray-200"
                  >
                    <div class="flex items-center gap-2">
                      <Skeleton preset="circle" class="size-8" />
                      <Skeleton class="h-3 w-20" />
                    </div>
                    <Skeleton class="h-3 w-32" />
                    <Skeleton class="h-6 w-16 rounded-full" />
                    <Skeleton class="h-8 w-20 rounded-sm" />
                  </div>
                </div>

                <div class="flex justify-between items-center">
                  <Skeleton class="h-4 w-32" />
                  <div class="flex gap-2">
                    <Skeleton class="size-8 rounded-sm" />
                    <Skeleton class="size-8 rounded-sm" />
                    <Skeleton class="size-8 rounded-sm" />
                  </div>
                </div>
              </div>
            </CardBody>
          </CardRoot>
        </div>
      </section>

      <!-- Dashboard Stats -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Dashboard Stats</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <CardRoot v-for="i in 3" :key="i">
              <CardBody class="p-6 space-y-4">
                <div class="flex items-center justify-between">
                  <Skeleton class="h-4 w-24" />
                  <Skeleton preset="circle" class="size-8" />
                </div>
                <Skeleton class="h-8 w-32" />
                <div class="flex items-center gap-2">
                  <Skeleton class="h-3 w-12 rounded-full" />
                  <Skeleton class="h-3 w-20" />
                </div>
              </CardBody>
            </CardRoot>
          </div>
        </div>
      </section>

      <!-- Before/After Toggle -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Before/After Toggle</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="max-w-md mx-auto space-y-4">
            <div class="flex justify-center">
              <Button @click="toggleContent" size="sm">
                {{ showContent ? 'Show Skeleton' : 'Show Content' }}
              </Button>
            </div>

            <CardRoot>
              <CardBody class="p-4">
                <template v-if="!showContent">
                  <div class="space-y-4">
                    <div class="flex items-center gap-3">
                      <Skeleton preset="circle" class="size-12" />
                      <div class="space-y-2 flex-1">
                        <Skeleton class="h-4 w-3/4" />
                        <Skeleton class="h-3 w-1/2" />
                      </div>
                    </div>
                    <div class="space-y-2">
                      <Skeleton class="h-3 w-full" />
                      <Skeleton class="h-3 w-full" />
                      <Skeleton class="h-3 w-2/3" />
                    </div>
                  </div>
                </template>

                <template v-else>
                  <div class="space-y-4">
                    <div class="flex items-center gap-3">
                      <div
                        class="size-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold"
                      >
                        JD
                      </div>
                      <div>
                        <p class="font-semibold text-sm text-gray-900">John Doe</p>
                        <p class="text-xs text-gray-600">Software Engineer</p>
                      </div>
                    </div>
                    <p class="text-sm text-gray-900">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                      incididunt ut labore.
                    </p>
                  </div>
                </template>
              </CardBody>
            </CardRoot>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
