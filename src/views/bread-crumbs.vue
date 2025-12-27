<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
  BreadcrumbRoot,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbCurrentLink,
  BreadcrumbSeparator,
} from '@vifui/core'

const sizes = ['sm', 'md', 'lg'] as const
const colors = ['neutral', 'brand', 'success', 'warning', 'danger'] as const
const alignments = ['left', 'center', 'right'] as const
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <div class="max-w-5xl mx-auto space-y-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Breadcrumb Component</h1>
        <p class="text-gray-600">
          Comprehensive testing of breadcrumb sizes, colors, separators, and alignments
        </p>
      </div>

      <!-- Sizes -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Sizes</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div v-for="size in sizes" :key="size">
            <p class="mb-3 text-sm font-medium uppercase text-gray-700">{{ size }}</p>
            <BreadcrumbRoot :size="size">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbCurrentLink>Components</BreadcrumbCurrentLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </BreadcrumbRoot>
          </div>
        </div>
      </section>

      <!-- Colors -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Colors</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div v-for="color in colors" :key="color">
            <p class="mb-3 text-sm font-medium capitalize text-gray-700">{{ color }}</p>
            <BreadcrumbRoot :color="color">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/products">Products</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbCurrentLink>Electronics</BreadcrumbCurrentLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </BreadcrumbRoot>
          </div>
        </div>
      </section>

      <!-- Alignment -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Alignment</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div v-for="align in alignments" :key="align">
            <p class="mb-3 text-sm font-medium capitalize text-gray-700">{{ align }}</p>
            <BreadcrumbRoot :align="align">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbCurrentLink>Breadcrumb</BreadcrumbCurrentLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </BreadcrumbRoot>
          </div>
        </div>
      </section>

      <!-- Custom Separators -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Custom Separators</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Slash</p>
            <BreadcrumbRoot>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator icon="lucide:slash" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator icon="lucide:slash" />
                <BreadcrumbItem>
                  <BreadcrumbCurrentLink>Breadcrumb</BreadcrumbCurrentLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </BreadcrumbRoot>
          </div>

          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Arrow Right</p>
            <BreadcrumbRoot>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator icon="lucide:arrow-right" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator icon="lucide:arrow-right" />
                <BreadcrumbItem>
                  <BreadcrumbCurrentLink>Breadcrumb</BreadcrumbCurrentLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </BreadcrumbRoot>
          </div>

          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Dot</p>
            <BreadcrumbRoot>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator icon="lucide:dot" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator icon="lucide:dot" />
                <BreadcrumbItem>
                  <BreadcrumbCurrentLink>Breadcrumb</BreadcrumbCurrentLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </BreadcrumbRoot>
          </div>
        </div>
      </section>

      <!-- With Icons -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">With Icons</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Links with Icons</p>
            <BreadcrumbRoot color="brand">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">
                    <Icon icon="lucide:home" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/products">
                    <Icon icon="lucide:package" />
                    Products
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbCurrentLink>
                    <Icon icon="lucide:laptop" />
                    Electronics
                  </BreadcrumbCurrentLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </BreadcrumbRoot>
          </div>

          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Icon Only Home</p>
            <BreadcrumbRoot>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">
                    <Icon icon="lucide:home" />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbCurrentLink>Components</BreadcrumbCurrentLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </BreadcrumbRoot>
          </div>
        </div>
      </section>

      <!-- Real-World Examples -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Real-World Examples</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-8">
          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">E-commerce</p>
            <div class="rounded-lg border border-gray-200 p-4">
              <BreadcrumbRoot size="sm" color="neutral">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">
                      <Icon icon="lucide:store" />
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator icon="lucide:chevron-right" />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/men">Men</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator icon="lucide:chevron-right" />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/men/clothing">Clothing</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator icon="lucide:chevron-right" />
                  <BreadcrumbItem>
                    <BreadcrumbCurrentLink>T-Shirts</BreadcrumbCurrentLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </BreadcrumbRoot>
              <div class="mt-4 border-t border-gray-200 pt-4">
                <h3 class="text-lg font-semibold">Men's T-Shirts</h3>
                <p class="mt-1 text-sm text-gray-600">Browse our collection</p>
              </div>
            </div>
          </div>

          <div>
            <p class="mb-3 text-sm font-medium text-gray-700">Documentation</p>
            <div class="rounded-lg border border-gray-200 p-4">
              <BreadcrumbRoot color="brand">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">
                      <Icon icon="lucide:book-open" />
                      Docs
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator icon="lucide:slash" />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator icon="lucide:slash" />
                  <BreadcrumbItem>
                    <BreadcrumbCurrentLink>Breadcrumb</BreadcrumbCurrentLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </BreadcrumbRoot>
              <div class="mt-6">
                <h1 class="text-2xl font-bold">Breadcrumb Component</h1>
                <p class="mt-2 text-sm text-gray-600">
                  Shows current page location within navigational hierarchy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
