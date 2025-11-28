<script setup lang="ts">
import {
  Button,
  CheckboxRoot,
  CheckboxIndicator,
  CheckboxLabel,
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  AccordionIndicator,
  AccordionBody,
  CardRoot,
  CardHeader,
  CardBody,
} from '@vifui/core'
import { ref } from 'vue'
import { useTheme } from '@/composables/use-theme'

const singleChecked = ref(false)
const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <div class="min-h-screen p-8 transition-colors">
    <!-- Header Section -->
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h1 class="text-4xl font-bold mb-2">VifUI Components</h1>
          <p class="">
            A beautiful component library for Vue 3. Visit
            <a
              href="https://vuejs.org/"
              target="_blank"
              rel="noopener"
              class="text-blue-600 hover:underline font-medium"
            >
              vuejs.org
            </a>
            to learn more.
          </p>
        </div>
        <Button @click="toggleTheme" variant="soft" size="sm">
          {{ isDark ? '☀️ Light Mode' : '🌙 Dark Mode' }}
        </Button>
      </div>

      <!-- Buttons Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Buttons</h2>
        <div class="flex flex-wrap gap-3">
          <Button variant="soft" color="danger" size="sm">Danger Button</Button>
          <Button variant="primary" color="brand" size="sm">Primary Button</Button>
          <Button variant="outline" color="success" size="sm">Success Button</Button>
        </div>
      </section>

      <!-- Checkbox Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Checkboxes</h2>
        <div class="rounded-lg p-6">
          <CheckboxRoot v-model="singleChecked" color="danger" size="sm">
            <CheckboxIndicator />
            <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
          </CheckboxRoot>
        </div>
      </section>

      <!-- Accordion Variants Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Accordion Variants</h2>

        <div class="space-y-6">
          <!-- Default Accordion -->
          <div>
            <h3 class="text-lg font-medium mb-3">Default</h3>
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
                    VifUI is a modern Vue 3 component library inspired by Vuesax, built with
                    Tailwind CSS and focused on beautiful, accessible components.
                  </AccordionBody>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionHeader>
                  <AccordionTrigger>
                    Why choose VifUI?
                    <AccordionIndicator />
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionBody>
                    VifUI brings back the beloved Vuesax aesthetics with modern technologies, full
                    TypeScript support, and extensive customization options.
                  </AccordionBody>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionHeader>
                  <AccordionTrigger>
                    How to get started?
                    <AccordionIndicator />
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionBody>
                    Install VifUI via npm, import the components you need, and start building
                    beautiful interfaces in minutes.
                  </AccordionBody>
                </AccordionContent>
              </AccordionItem>
            </AccordionRoot>
          </div>

          <!-- Bordered Accordion -->
          <div>
            <h3 class="text-lg font-medium mb-3">Bordered</h3>
            <AccordionRoot variant="bordered">
              <AccordionItem value="item-1">
                <AccordionHeader>
                  <AccordionTrigger>
                    Installation
                    <AccordionIndicator />
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionBody>
                    Run
                    <code class="rounded px-2 py-1 text-sm">npm install @vifui/core</code>
                    to install VifUI in your project.
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
                    Configure your Tailwind CSS to include VifUI's preset and start using
                    components.
                  </AccordionBody>
                </AccordionContent>
              </AccordionItem>
            </AccordionRoot>
          </div>

          <!-- Shadow Accordion -->
          <div>
            <h3 class="text-lg font-medium mb-3">Shadow</h3>
            <AccordionRoot variant="shadow">
              <AccordionItem value="item-1">
                <AccordionHeader>
                  <AccordionTrigger>
                    Beautiful Shadows
                    <AccordionIndicator />
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionBody>
                    The shadow variant adds elegant depth to your accordion, perfect for modern
                    interfaces.
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
                    Every interaction is smooth and delightful, inspired by Vuesax's attention to
                    detail.
                  </AccordionBody>
                </AccordionContent>
              </AccordionItem>
            </AccordionRoot>
          </div>

          <!-- Flat Accordion -->
          <div>
            <h3 class="text-lg font-medium mb-3">Flat</h3>
            <AccordionRoot variant="flat">
              <AccordionItem value="item-1">
                <AccordionHeader>
                  <AccordionTrigger>
                    Subtle Background
                    <AccordionIndicator />
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionBody>
                    The flat variant provides a subtle background for a clean, minimal look.
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
                    Use the flat variant inside cards or colored sections for optimal contrast.
                  </AccordionBody>
                </AccordionContent>
              </AccordionItem>
            </AccordionRoot>
          </div>
        </div>
      </section>

      <!-- Cards Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Interactive Cards</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardRoot hoverable variant="elevated">
            <CardHeader>
              <h3 class="text-xl font-semibold">Elevated Card</h3>
            </CardHeader>
            <CardBody>
              This card lifts up on hover with smooth animation, just like Vuesax.
            </CardBody>
          </CardRoot>

          <CardRoot hoverable variant="outlined">
            <CardHeader>
              <h3 class="text-xl font-semibold">Outlined Card</h3>
            </CardHeader>
            <CardBody> Outlined cards show border color change on hover. </CardBody>
          </CardRoot>

          <CardRoot hoverable variant="flat">
            <CardHeader>
              <h3 class="text-xl font-semibold">Flat Card</h3>
            </CardHeader>
            <CardBody> Flat cards get subtle shadow on hover. </CardBody>
          </CardRoot>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
