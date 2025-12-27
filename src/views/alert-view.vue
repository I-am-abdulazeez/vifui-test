<script setup lang="ts">
import { ref } from 'vue'
import {
  AlertRoot,
  AlertIcon,
  AlertContent,
  AlertHeader,
  AlertTitle,
  AlertDescription,
  AlertBody,
  AlertFooter,
  AlertClose,
  Button,
} from '@vifui/core'

type Color = 'brand' | 'neutral' | 'success' | 'warning' | 'danger'

const variants = ['primary', 'secondary', 'soft', 'outline'] as const
const colors = ['brand', 'neutral', 'success', 'warning', 'danger'] as const

const dismissibleStates = ref({
  alert1: true,
  alert2: true,
  alert3: true,
})

const collapsedStates = ref({
  alert1: false,
  alert2: false,
})

function getIconForColor(color: Color): string {
  const map: Record<Color, string> = {
    brand: 'lucide:info',
    success: 'lucide:check-circle',
    warning: 'lucide:alert-triangle',
    danger: 'lucide:x-circle',
    neutral: 'lucide:info',
  }
  return map[color]
}
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <div class="max-w-5xl mx-auto space-y-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Alert Component</h1>
        <p class="text-gray-600">
          Comprehensive testing of alert variants, colors, and interaction modes
        </p>
      </div>

      <!-- Variants -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Alert Variants</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div v-for="variant in variants" :key="variant">
            <p class="mb-3 text-sm font-medium capitalize text-gray-700">{{ variant }}</p>
            <AlertRoot :variant="variant" color="brand" class="max-w-md">
              <AlertIcon icon="lucide:info" />
              <AlertContent>
                <AlertHeader>
                  <AlertTitle
                    >{{ variant.charAt(0).toUpperCase() + variant.slice(1) }} Alert</AlertTitle
                  >
                  <AlertDescription>
                    This is a {{ variant }} alert with brand color.
                  </AlertDescription>
                </AlertHeader>
              </AlertContent>
            </AlertRoot>
          </div>
        </div>
      </section>

      <!-- Colors -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Colors</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div v-for="color in colors" :key="color">
            <p class="mb-3 text-sm font-medium capitalize text-gray-700">{{ color }}</p>
            <AlertRoot variant="primary" :color="color" class="max-w-md">
              <AlertIcon :icon="getIconForColor(color)" />
              <AlertContent>
                <AlertHeader>
                  <AlertTitle class="capitalize">{{ color }} Alert</AlertTitle>
                  <AlertDescription>
                    Example of primary variant with {{ color }} color.
                  </AlertDescription>
                </AlertHeader>
              </AlertContent>
            </AlertRoot>
          </div>
        </div>
      </section>

      <!-- With Body & Footer -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">With Body & Footer</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <AlertRoot variant="secondary" color="success" class="max-w-md">
            <AlertIcon icon="lucide:gift" />
            <AlertContent>
              <AlertHeader>
                <AlertTitle>Welcome Bonus!</AlertTitle>
                <AlertDescription>You've earned rewards for joining.</AlertDescription>
              </AlertHeader>
              <AlertBody>
                <div class="space-y-2">
                  <div class="flex justify-between">
                    <span>Bonus Credits</span>
                    <strong>₦50,000</strong>
                  </div>
                  <div class="flex justify-between">
                    <span>Free Trial Days</span>
                    <strong>30 days</strong>
                  </div>
                </div>
              </AlertBody>
              <AlertFooter>
                <Button size="sm" color="success">Claim Reward</Button>
              </AlertFooter>
            </AlertContent>
          </AlertRoot>

          <AlertRoot variant="soft" color="danger" class="max-w-md">
            <AlertIcon icon="lucide:alert-octagon" />
            <AlertContent>
              <AlertHeader>
                <AlertTitle>Delete Account</AlertTitle>
                <AlertDescription>This action cannot be undone.</AlertDescription>
              </AlertHeader>
              <AlertBody>
                <p>All your data will be permanently removed from our servers.</p>
              </AlertBody>
              <AlertFooter>
                <Button size="sm" variant="outline" color="neutral">Cancel</Button>
                <Button size="sm" color="danger">Delete</Button>
              </AlertFooter>
            </AlertContent>
          </AlertRoot>
        </div>
      </section>

      <!-- Dismissible -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Dismissible Alerts</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div>
            <AlertRoot
              v-model:visible="dismissibleStates.alert1"
              variant="primary"
              color="success"
              class="max-w-md"
            >
              <AlertIcon icon="lucide:check-circle" />
              <AlertContent>
                <AlertHeader>
                  <AlertTitle>Payment Successful!</AlertTitle>
                  <AlertDescription>Your payment has been processed.</AlertDescription>
                </AlertHeader>
              </AlertContent>
              <AlertClose @click="dismissibleStates.alert1 = false" />
            </AlertRoot>
            <Button
              v-if="!dismissibleStates.alert1"
              size="sm"
              class="mt-3"
              @click="dismissibleStates.alert1 = true"
            >
              Show Alert
            </Button>
          </div>

          <div>
            <AlertRoot
              v-model:visible="dismissibleStates.alert2"
              variant="soft"
              color="warning"
              class="max-w-md"
            >
              <AlertIcon icon="lucide:alert-triangle" />
              <AlertContent>
                <AlertHeader>
                  <AlertTitle>Low Storage Space</AlertTitle>
                  <AlertDescription>You're running out of storage.</AlertDescription>
                </AlertHeader>
              </AlertContent>
              <AlertClose @click="dismissibleStates.alert2 = false" />
            </AlertRoot>
            <Button
              v-if="!dismissibleStates.alert2"
              size="sm"
              class="mt-3"
              @click="dismissibleStates.alert2 = true"
            >
              Show Alert
            </Button>
          </div>
        </div>
      </section>

      <!-- Collapsible -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Collapsible Alerts</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <AlertRoot variant="outline" color="brand" class="max-w-md">
            <AlertIcon icon="lucide:info" />
            <AlertContent collapsible v-model:collapsed="collapsedStates.alert1">
              <AlertHeader>
                <AlertTitle>System Maintenance</AlertTitle>
                <AlertDescription>Click to expand details</AlertDescription>
              </AlertHeader>
              <AlertBody>
                <p class="mb-2">Service will be unavailable Sunday 2:00–6:00 AM EST.</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Duration: ~4 hours</li>
                  <li>Mobile app remains available</li>
                </ul>
              </AlertBody>
              <AlertFooter>
                <Button size="sm" color="brand">Set Reminder</Button>
              </AlertFooter>
            </AlertContent>
          </AlertRoot>

          <AlertRoot variant="soft" color="success" class="max-w-md">
            <AlertIcon icon="lucide:check-circle-2" />
            <AlertContent collapsible v-model:collapsed="collapsedStates.alert2">
              <AlertHeader>
                <AlertTitle>Update Available</AlertTitle>
                <AlertDescription>Version 2.0 is ready</AlertDescription>
              </AlertHeader>
              <AlertBody>
                <p class="font-medium mb-2">What's New:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Performance improvements</li>
                  <li>New dashboard design</li>
                  <li>Bug fixes</li>
                </ul>
              </AlertBody>
              <AlertFooter>
                <Button size="sm" variant="outline" color="neutral">Later</Button>
                <Button size="sm" color="success">Update Now</Button>
              </AlertFooter>
            </AlertContent>
          </AlertRoot>
        </div>
      </section>

      <!-- Real-World Examples -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Real-World Examples</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <!-- Cookie Consent -->
          <AlertRoot variant="outline" color="neutral" class="max-w-md">
            <AlertIcon icon="lucide:cookie" />
            <AlertContent>
              <AlertHeader>
                <AlertTitle>We Use Cookies</AlertTitle>
              </AlertHeader>
              <AlertBody>
                <p class="text-sm">We use cookies to improve your experience.</p>
              </AlertBody>
              <AlertFooter>
                <Button size="sm" variant="outline" color="neutral">Manage</Button>
                <Button size="sm" color="brand">Accept All</Button>
              </AlertFooter>
            </AlertContent>
          </AlertRoot>

          <!-- Security Alert -->
          <AlertRoot variant="secondary" color="danger" class="max-w-md">
            <AlertIcon icon="lucide:shield-alert" />
            <AlertContent>
              <AlertHeader>
                <AlertTitle>Unusual Activity Detected</AlertTitle>
              </AlertHeader>
              <AlertBody>
                <p class="text-sm mb-1">A new device signed in to your account.</p>
                <p class="text-xs opacity-80">Today at 3:45 PM</p>
              </AlertBody>
              <AlertFooter>
                <Button size="sm" variant="outline" color="neutral">Not Me</Button>
                <Button size="sm" color="danger">Secure Account</Button>
              </AlertFooter>
            </AlertContent>
          </AlertRoot>

          <!-- Promo Alert -->
          <AlertRoot variant="soft" color="brand" class="max-w-md">
            <AlertIcon icon="lucide:megaphone" />
            <AlertContent>
              <AlertHeader>
                <AlertTitle>Black Friday Sale!</AlertTitle>
                <AlertDescription>50% off all plans</AlertDescription>
              </AlertHeader>
              <AlertBody>
                <p class="text-sm">Limited time offer ends soon.</p>
              </AlertBody>
              <AlertFooter>
                <Button size="sm" color="brand">Claim Offer</Button>
              </AlertFooter>
            </AlertContent>
          </AlertRoot>
        </div>
      </section>
    </div>
  </div>
</template>
