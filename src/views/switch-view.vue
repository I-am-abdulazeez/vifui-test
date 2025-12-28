<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { SwitchRoot, SwitchThumb, SwitchIcon, Button } from '@vifui/core'

const sizes = ['xs', 'sm', 'md', 'lg'] as const
const colors = ['brand', 'success', 'warning', 'danger', 'neutral'] as const
const styleVariants = ['default', 'square', 'bordered', 'gradient', 'neon'] as const

const basicChecked = ref(false)
const sizeStates = ref<Record<string, boolean>>({
  xs: false,
  sm: true,
  md: false,
  lg: true,
})
const colorStates = ref<Record<string, boolean>>({
  brand: true,
  success: false,
  warning: true,
  danger: false,
  neutral: true,
})
const textChecked = ref(true)
const iconChecked = ref(false)
const loadingChecked = ref(false)
const formNotifications = ref(true)
const formMarketing = ref(false)
const formSecurity = ref(true)

const simulateLoading = ref(false)
const handleLoadingToggle = () => {
  simulateLoading.value = true
  setTimeout(() => {
    loadingChecked.value = !loadingChecked.value
    simulateLoading.value = false
  }, 1500)
}
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <div class="max-w-5xl mx-auto space-y-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Switch Component</h1>
        <p class="text-gray-600">
          Comprehensive testing of switch sizes, colors, styles, and states
        </p>
      </div>

      <!-- Basic Usage -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Basic Usage</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <label class="flex items-center gap-3 cursor-pointer">
            <SwitchRoot v-model="basicChecked">
              <SwitchThumb />
            </SwitchRoot>
            <span class="text-sm text-gray-900">
              {{ basicChecked ? 'Enabled' : 'Disabled' }}
            </span>
          </label>
          <p class="text-xs text-gray-600 mt-4">
            State: <strong>{{ basicChecked ? 'ON' : 'OFF' }}</strong>
          </p>
        </div>
      </section>

      <!-- Sizes -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Sizes</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div v-for="size in sizes" :key="size" class="flex flex-col gap-3">
              <p class="text-sm font-medium uppercase text-gray-700">{{ size }}</p>
              <label class="flex items-center gap-3 cursor-pointer">
                <SwitchRoot v-model="sizeStates[size]" :size="size">
                  <SwitchThumb />
                </SwitchRoot>
                <span class="text-xs text-gray-600">
                  {{ sizeStates[size] ? 'On' : 'Off' }}
                </span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <!-- Colors -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Colors</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div v-for="color in colors" :key="color" class="flex flex-col gap-3">
              <p class="text-sm font-medium capitalize text-gray-700">{{ color }}</p>
              <label class="flex items-center gap-3 cursor-pointer">
                <SwitchRoot v-model="colorStates[color]" :color="color">
                  <SwitchThumb />
                </SwitchRoot>
                <span class="text-xs text-gray-600">
                  {{ colorStates[color] ? 'Active' : 'Inactive' }}
                </span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <!-- Style Variants -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Style Variants</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div v-for="variant in styleVariants" :key="variant" class="flex flex-col gap-3">
              <p class="text-sm font-medium capitalize text-gray-700">{{ variant }}</p>
              <label class="flex items-center gap-3 cursor-pointer">
                <SwitchRoot :model-value="true" :type="variant" color="brand">
                  <SwitchThumb />
                </SwitchRoot>
                <span class="text-xs text-gray-600">On</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <!-- Style Variants × Colors -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Style Variants × Colors</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-8">
          <div v-for="variant in styleVariants.slice(1)" :key="variant">
            <p class="mb-4 text-sm font-semibold capitalize text-gray-700">{{ variant }} Style</p>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
              <label
                v-for="color in colors"
                :key="color"
                class="flex flex-col items-center gap-2 cursor-pointer"
              >
                <SwitchRoot :model-value="true" :type="variant" :color="color">
                  <SwitchThumb />
                </SwitchRoot>
                <span class="text-xs capitalize text-gray-600">{{ color }}</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <!-- With Text Labels -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">With Text Labels</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <p class="mb-3 text-sm font-medium text-gray-700">On/Off Labels</p>
              <label class="flex items-center gap-3 cursor-pointer">
                <SwitchRoot v-model="textChecked" text-on="ON" text-off="OFF" size="lg">
                  <SwitchThumb />
                </SwitchRoot>
                <span class="text-sm text-gray-600">Toggle with labels</span>
              </label>
            </div>

            <div>
              <p class="mb-3 text-sm font-medium text-gray-700">Custom Labels</p>
              <label class="flex items-center gap-3 cursor-pointer">
                <SwitchRoot
                  v-model="textChecked"
                  text-on="Yes"
                  text-off="No"
                  size="lg"
                  color="success"
                >
                  <SwitchThumb />
                </SwitchRoot>
                <span class="text-sm text-gray-600">Yes/No toggle</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <!-- With Icons -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">With Icons</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <p class="mb-3 text-sm font-medium text-gray-700">Check Icon</p>
              <label class="flex items-center gap-3 cursor-pointer">
                <SwitchRoot v-model="iconChecked" size="lg">
                  <SwitchThumb>
                    <SwitchIcon v-if="iconChecked">
                      <Icon icon="lucide:check" />
                    </SwitchIcon>
                  </SwitchThumb>
                </SwitchRoot>
                <span class="text-sm text-gray-600">
                  {{ iconChecked ? 'Checked' : 'Unchecked' }}
                </span>
              </label>
            </div>

            <div>
              <p class="mb-3 text-sm font-medium text-gray-700">X Icon</p>
              <label class="flex items-center gap-3 cursor-pointer">
                <SwitchRoot v-model="iconChecked" size="lg" color="danger">
                  <SwitchThumb>
                    <SwitchIcon v-if="!iconChecked">
                      <Icon icon="lucide:x" />
                    </SwitchIcon>
                  </SwitchThumb>
                </SwitchRoot>
                <span class="text-sm text-gray-600">
                  {{ iconChecked ? 'Active' : 'Inactive' }}
                </span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <!-- States -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">States</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid gap-6 md:grid-cols-3">
            <div>
              <p class="mb-3 text-sm font-medium text-gray-700">Disabled</p>
              <div class="flex flex-col gap-3">
                <label class="flex items-center gap-3">
                  <SwitchRoot :checked="false" disabled>
                    <SwitchThumb />
                  </SwitchRoot>
                  <span class="text-sm text-gray-600">Disabled (off)</span>
                </label>
                <label class="flex items-center gap-3">
                  <SwitchRoot :checked="true" disabled color="success">
                    <SwitchThumb />
                  </SwitchRoot>
                  <span class="text-sm text-gray-600">Disabled (on)</span>
                </label>
              </div>
            </div>

            <div>
              <p class="mb-3 text-sm font-medium text-gray-700">Loading</p>
              <label class="flex items-center gap-3 cursor-pointer">
                <SwitchRoot v-model="loadingChecked" :loading="simulateLoading" color="brand">
                  <SwitchThumb />
                </SwitchRoot>
                <span class="text-sm text-gray-600">
                  {{ simulateLoading ? 'Loading...' : loadingChecked ? 'On' : 'Off' }}
                </span>
              </label>
              <Button
                @click="handleLoadingToggle"
                :disabled="simulateLoading"
                size="sm"
                class="mt-3"
              >
                Simulate Loading
              </Button>
            </div>

            <div>
              <p class="mb-3 text-sm font-medium text-gray-700">Default Value</p>
              <label class="flex items-center gap-3 cursor-pointer">
                <SwitchRoot :default-checked="true" color="warning">
                  <SwitchThumb />
                </SwitchRoot>
                <span class="text-sm text-gray-600">Uncontrolled (default on)</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <!-- Real-World Examples -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Real-World Examples</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid gap-6 md:grid-cols-2">
            <!-- Settings Panel -->
            <div class="rounded-lg border border-gray-200 p-6">
              <h3 class="mb-4 text-base font-semibold text-gray-900">Notification Settings</h3>
              <div class="flex flex-col gap-4">
                <label class="flex items-center justify-between cursor-pointer">
                  <div class="flex flex-col">
                    <span class="text-sm font-medium text-gray-900">Push Notifications</span>
                    <span class="text-xs text-gray-600">Receive push notifications on device</span>
                  </div>
                  <SwitchRoot v-model="formNotifications" color="brand">
                    <SwitchThumb />
                  </SwitchRoot>
                </label>

                <label class="flex items-center justify-between cursor-pointer">
                  <div class="flex flex-col">
                    <span class="text-sm font-medium text-gray-900">Marketing Emails</span>
                    <span class="text-xs text-gray-600">Receive emails about new features</span>
                  </div>
                  <SwitchRoot v-model="formMarketing" color="success">
                    <SwitchThumb />
                  </SwitchRoot>
                </label>

                <label class="flex items-center justify-between cursor-pointer">
                  <div class="flex flex-col">
                    <span class="text-sm font-medium text-gray-900">Security Alerts</span>
                    <span class="text-xs text-gray-600">Important security updates</span>
                  </div>
                  <SwitchRoot v-model="formSecurity" color="danger">
                    <SwitchThumb />
                  </SwitchRoot>
                </label>
              </div>
            </div>

            <!-- Feature Toggles -->
            <div class="rounded-lg bg-gray-50 p-6">
              <h3 class="mb-4 text-base font-semibold text-gray-900">Feature Toggles</h3>
              <div class="flex flex-col gap-4">
                <label class="flex items-center justify-between cursor-pointer">
                  <div class="flex items-center gap-3">
                    <Icon icon="lucide:moon" class="h-5 w-5 text-gray-500" />
                    <span class="text-sm font-medium text-gray-900">Dark Mode</span>
                  </div>
                  <SwitchRoot :default-checked="true" color="neutral" size="sm">
                    <SwitchThumb />
                  </SwitchRoot>
                </label>

                <label class="flex items-center justify-between cursor-pointer">
                  <div class="flex items-center gap-3">
                    <Icon icon="lucide:zap" class="h-5 w-5 text-gray-500" />
                    <span class="text-sm font-medium text-gray-900">Performance Mode</span>
                  </div>
                  <SwitchRoot :default-checked="false" color="warning" size="sm">
                    <SwitchThumb />
                  </SwitchRoot>
                </label>

                <label class="flex items-center justify-between cursor-pointer">
                  <div class="flex items-center gap-3">
                    <Icon icon="lucide:shield" class="h-5 w-5 text-gray-500" />
                    <span class="text-sm font-medium text-gray-900">Two-Factor Auth</span>
                  </div>
                  <SwitchRoot :default-checked="true" color="success" size="sm">
                    <SwitchThumb />
                  </SwitchRoot>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
