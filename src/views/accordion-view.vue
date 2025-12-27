<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  AccordionIndicator,
  AccordionBody,
} from '@vifui/core'

const controlledValue = ref('item-1')
const multipleValue = ref(['item-1', 'item-3'])
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <div class="max-w-5xl mx-auto space-y-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Accordion Component</h1>
        <p class="text-gray-600">
          Comprehensive testing of all accordion variants, sizes, and interaction modes
        </p>
      </div>

      <!-- Variants -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Accordion Variants</h2>

        <div class="space-y-6">
          <!-- Default -->
          <div class="bg-white rounded-lg border border-gray-200 p-6">
            <p class="mb-4 text-sm font-medium text-gray-700">Default</p>
            <div class="max-w-2xl">
              <AccordionRoot>
                <AccordionItem value="item-1">
                  <AccordionHeader>
                    <AccordionTrigger>
                      What is VifUI?
                      <AccordionIndicator />
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <AccordionBody>
                      A modern Vue 3 component library inspired by Vuesax with beautiful aesthetics.
                    </AccordionBody>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionHeader>
                    <AccordionTrigger>
                      Key Features
                      <AccordionIndicator />
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <AccordionBody>
                      Built with Tailwind CSS, TypeScript support, and accessible components.
                    </AccordionBody>
                  </AccordionContent>
                </AccordionItem>
              </AccordionRoot>
            </div>
          </div>

          <!-- Bordered -->
          <div class="bg-white rounded-lg border border-gray-200 p-6">
            <p class="mb-4 text-sm font-medium text-gray-700">Bordered</p>
            <div class="max-w-2xl">
              <AccordionRoot variant="bordered">
                <AccordionItem value="item-1">
                  <AccordionHeader>
                    <AccordionTrigger>
                      Installation Guide
                      <AccordionIndicator />
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <AccordionBody>
                      Run
                      <code class="px-2 py-1 bg-gray-100 rounded text-sm"
                        >npm install @vifui/core</code
                      >
                      to get started.
                    </AccordionBody>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionHeader>
                    <AccordionTrigger>
                      Configuration
                      <AccordionIndicator />
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <AccordionBody>
                      Add VifUI preset to your Tailwind config and import components.
                    </AccordionBody>
                  </AccordionContent>
                </AccordionItem>
              </AccordionRoot>
            </div>
          </div>

          <!-- Shadow -->
          <div class="bg-white rounded-lg border border-gray-200 p-6">
            <p class="mb-4 text-sm font-medium text-gray-700">Shadow</p>
            <div class="max-w-2xl">
              <AccordionRoot variant="shadow">
                <AccordionItem value="item-1">
                  <AccordionHeader>
                    <AccordionTrigger>
                      Elegant Depth
                      <AccordionIndicator />
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <AccordionBody>
                      Shadow variant adds beautiful depth perfect for modern interfaces.
                    </AccordionBody>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionHeader>
                    <AccordionTrigger>
                      Smooth Animations
                      <AccordionIndicator />
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <AccordionBody>
                      Every interaction is smooth and delightful with optimized animations.
                    </AccordionBody>
                  </AccordionContent>
                </AccordionItem>
              </AccordionRoot>
            </div>
          </div>

          <!-- Flat -->
          <div class="bg-white rounded-lg border border-gray-200 p-6">
            <p class="mb-4 text-sm font-medium text-gray-700">Flat</p>
            <div class="max-w-2xl">
              <AccordionRoot variant="flat">
                <AccordionItem value="item-1">
                  <AccordionHeader>
                    <AccordionTrigger>
                      Clean Minimal Look
                      <AccordionIndicator />
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <AccordionBody>
                      Flat variant provides subtle background for clean designs.
                    </AccordionBody>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionHeader>
                    <AccordionTrigger>
                      Perfect for Cards
                      <AccordionIndicator />
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <AccordionBody>
                      Works great inside cards or colored sections for optimal contrast.
                    </AccordionBody>
                  </AccordionContent>
                </AccordionItem>
              </AccordionRoot>
            </div>
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Sizes</h2>

        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <!-- Small -->
          <div>
            <p class="mb-3 text-sm font-medium uppercase text-gray-700">Small</p>
            <div class="max-w-2xl">
              <AccordionRoot variant="bordered" size="sm">
                <AccordionItem value="item-1">
                  <AccordionHeader>
                    <AccordionTrigger>
                      Compact Design
                      <AccordionIndicator />
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <AccordionBody>
                      Perfect for dense information displays and limited space.
                    </AccordionBody>
                  </AccordionContent>
                </AccordionItem>
              </AccordionRoot>
            </div>
          </div>

          <!-- Medium -->
          <div>
            <p class="mb-3 text-sm font-medium uppercase text-gray-700">Medium (Default)</p>
            <div class="max-w-2xl">
              <AccordionRoot variant="bordered" size="md">
                <AccordionItem value="item-1">
                  <AccordionHeader>
                    <AccordionTrigger>
                      Balanced Size
                      <AccordionIndicator />
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <AccordionBody>
                      Default size with good balance between readability and space.
                    </AccordionBody>
                  </AccordionContent>
                </AccordionItem>
              </AccordionRoot>
            </div>
          </div>

          <!-- Large -->
          <div>
            <p class="mb-3 text-sm font-medium uppercase text-gray-700">Large</p>
            <div class="max-w-2xl">
              <AccordionRoot variant="bordered" size="lg">
                <AccordionItem value="item-1">
                  <AccordionHeader>
                    <AccordionTrigger>
                      Spacious Layout
                      <AccordionIndicator />
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <AccordionBody>
                      Extra breathing room ideal for mobile and touch interfaces.
                    </AccordionBody>
                  </AccordionContent>
                </AccordionItem>
              </AccordionRoot>
            </div>
          </div>
        </div>
      </section>

      <!-- Controlled Mode -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Controlled Mode (v-model)</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="max-w-2xl space-y-4">
            <div class="bg-blue-50 rounded-lg p-4">
              <p class="text-sm font-medium text-blue-900">
                Active Item:
                <code class="bg-blue-100 px-2 py-1 rounded">{{ controlledValue }}</code>
              </p>
            </div>
            <AccordionRoot v-model="controlledValue" variant="shadow">
              <AccordionItem value="item-1">
                <AccordionHeader>
                  <AccordionTrigger>
                    First Section
                    <AccordionIndicator />
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionBody>
                    Watch the active item value change as you interact with different sections.
                  </AccordionBody>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionHeader>
                  <AccordionTrigger>
                    Second Section
                    <AccordionIndicator />
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionBody>
                    State is tracked allowing programmatic control of the accordion.
                  </AccordionBody>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionHeader>
                  <AccordionTrigger>
                    Third Section
                    <AccordionIndicator />
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionBody>
                    You can set initial values or change them programmatically.
                  </AccordionBody>
                </AccordionContent>
              </AccordionItem>
            </AccordionRoot>
          </div>
        </div>
      </section>

      <!-- Multiple Expansion -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Multiple Expansion Mode</h2>
        <div class="max-w-2xl space-y-4">
          <div class="bg-purple-50 rounded-lg p-4">
            <p class="text-sm font-medium text-purple-900">
              Active Items:
              <code class="bg-purple-100 px-2 py-1 rounded">{{
                JSON.stringify(multipleValue)
              }}</code>
            </p>
          </div>
          <AccordionRoot v-model="multipleValue" type="multiple" variant="bordered">
            <AccordionItem value="item-1">
              <AccordionHeader>
                <AccordionTrigger>
                  Features Overview
                  <AccordionIndicator />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionBody>
                  Multiple items can be open simultaneously for easy comparison.
                </AccordionBody>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionHeader>
                <AccordionTrigger>
                  Pricing Plans
                  <AccordionIndicator />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionBody>
                  Keep multiple sections open to compare different options side by side.
                </AccordionBody>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionHeader>
                <AccordionTrigger>
                  Documentation
                  <AccordionIndicator />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionBody>
                  Great for docs where users might reference multiple sections at once.
                </AccordionBody>
              </AccordionContent>
            </AccordionItem>
          </AccordionRoot>
        </div>
      </section>

      <!-- Custom Icons -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Custom Icons</h2>
        <div class="max-w-2xl">
          <AccordionRoot variant="flat">
            <AccordionItem value="item-1">
              <AccordionHeader>
                <AccordionTrigger>
                  <div class="flex items-center gap-2">
                    <Icon icon="lucide:star" class="text-yellow-500" />
                    <span>Premium Features</span>
                  </div>
                  <AccordionIndicator icon="lucide:plus" />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionBody>
                  Use any Iconify icon for both content and indicator customization.
                </AccordionBody>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionHeader>
                <AccordionTrigger>
                  <div class="flex items-center gap-2">
                    <Icon icon="lucide:zap" class="text-orange-500" />
                    <span>Performance</span>
                  </div>
                  <AccordionIndicator icon="lucide:chevron-right" />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionBody>
                  Optimized animations and efficient rendering for smooth experience.
                </AccordionBody>
              </AccordionContent>
            </AccordionItem>
          </AccordionRoot>
        </div>
      </section>

      <!-- Disabled State -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Disabled State</h2>
        <div class="max-w-2xl">
          <AccordionRoot variant="shadow">
            <AccordionItem value="item-1">
              <AccordionHeader>
                <AccordionTrigger>
                  Available Item
                  <AccordionIndicator />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionBody>
                  This item is fully interactive and can be toggled normally.
                </AccordionBody>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" :disabled="true">
              <AccordionHeader>
                <AccordionTrigger>
                  Disabled Item
                  <AccordionIndicator />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionBody> This content is not accessible. </AccordionBody>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionHeader>
                <AccordionTrigger>
                  Another Available Item
                  <AccordionIndicator />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionBody>
                  Individual items can be disabled while others remain active.
                </AccordionBody>
              </AccordionContent>
            </AccordionItem>
          </AccordionRoot>
        </div>
      </section>

      <!-- FAQ Example -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Real-World Example: FAQ</h2>
        <div class="max-w-3xl">
          <div class="mb-6">
            <h3 class="text-xl font-bold text-gray-900">Frequently Asked Questions</h3>
            <p class="text-gray-600">Common questions about VifUI</p>
          </div>
          <AccordionRoot variant="bordered" size="lg">
            <AccordionItem value="faq-1">
              <AccordionHeader>
                <AccordionTrigger>
                  <div class="flex items-center gap-3">
                    <Icon icon="lucide:help-circle" class="text-blue-500" />
                    <span>Is VifUI free to use?</span>
                  </div>
                  <AccordionIndicator />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionBody>
                  Yes! VifUI is open-source under MIT license. Free for personal and commercial use.
                </AccordionBody>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionHeader>
                <AccordionTrigger>
                  <div class="flex items-center gap-3">
                    <Icon icon="lucide:package" class="text-green-500" />
                    <span>Does it work with Nuxt 3?</span>
                  </div>
                  <AccordionIndicator />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionBody>
                  Absolutely! Built for Vue 3 and works seamlessly with Nuxt 3. Just install and
                  import.
                </AccordionBody>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionHeader>
                <AccordionTrigger>
                  <div class="flex items-center gap-3">
                    <Icon icon="lucide:accessibility" class="text-purple-500" />
                    <span>Is it accessible?</span>
                  </div>
                  <AccordionIndicator />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionBody>
                  Yes! Built following WAI-ARIA guidelines with keyboard navigation and screen
                  reader support.
                </AccordionBody>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-4">
              <AccordionHeader>
                <AccordionTrigger>
                  <div class="flex items-center gap-3">
                    <Icon icon="lucide:palette" class="text-orange-500" />
                    <span>Can I customize styling?</span>
                  </div>
                  <AccordionIndicator />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionBody>
                  Definitely! Uses CSS variables and Tailwind, easy to customize colors, spacing,
                  and animations.
                </AccordionBody>
              </AccordionContent>
            </AccordionItem>
          </AccordionRoot>
        </div>
      </section>
    </div>
  </div>
</template>
