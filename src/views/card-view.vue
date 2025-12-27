<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { Button, Badge } from '@vifui/core'
import { CardRoot, CardHeader, CardBody, CardFooter, CardMedia } from '@vifui/core'

const variants = ['elevated', 'outlined', 'flat', 'ghost'] as const
const sizes = ['sm', 'md', 'lg'] as const
const colors = ['neutral', 'brand', 'success', 'warning', 'danger'] as const

const loadingCard = ref(false)

const toggleLoading = () => {
  loadingCard.value = true
  setTimeout(() => {
    loadingCard.value = false
  }, 3000)
}
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <div class="max-w-5xl mx-auto space-y-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Card Component</h1>
        <p class="text-gray-600">
          Comprehensive testing of card variants, sizes, states, and use cases
        </p>
      </div>

      <!-- Variants -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Card Variants</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="variant in variants" :key="variant">
            <p class="mb-3 text-sm font-medium capitalize text-gray-700">{{ variant }}</p>
            <CardRoot :variant="variant">
              <CardHeader>
                <h3 class="font-semibold">{{ variant }} Card</h3>
              </CardHeader>
              <CardBody> This is the {{ variant }} variant with default styling. </CardBody>
            </CardRoot>
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Card Sizes</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="size in sizes" :key="size">
            <p class="mb-3 text-sm font-medium uppercase text-gray-700">{{ size }}</p>
            <CardRoot :size="size" variant="outlined">
              <CardHeader>
                <h3 class="font-semibold">{{ size.toUpperCase() }}</h3>
              </CardHeader>
              <CardBody> Controls internal padding and spacing. </CardBody>
            </CardRoot>
          </div>
        </div>
      </section>

      <!-- Hoverable -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Hoverable Cards</h2>
        <p class="text-sm text-gray-600">Hover over these cards to see animations</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardRoot hoverable variant="elevated">
            <CardHeader>
              <h3 class="font-semibold">Elevated Hover</h3>
            </CardHeader>
            <CardBody> Lifts up smoothly on hover creating depth. </CardBody>
          </CardRoot>

          <CardRoot hoverable variant="outlined">
            <CardHeader>
              <h3 class="font-semibold">Outlined Hover</h3>
            </CardHeader>
            <CardBody> Border color changes on hover. </CardBody>
          </CardRoot>

          <CardRoot hoverable variant="flat">
            <CardHeader>
              <h3 class="font-semibold">Flat Hover</h3>
            </CardHeader>
            <CardBody> Gentle shadow appears on hover. </CardBody>
          </CardRoot>
        </div>
      </section>

      <!-- With Media -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Cards with Media</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardRoot hoverable>
            <CardMedia
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600"
              alt="Technology"
              ratio="square"
            />
            <CardHeader>
              <h3 class="font-semibold">Modern Tech</h3>
            </CardHeader>
            <CardBody> Build scalable applications with cutting-edge technologies. </CardBody>
          </CardRoot>

          <CardRoot hoverable>
            <CardMedia ratio="auto">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600"
                alt="Design"
                class="object-cover"
              />
            </CardMedia>
            <CardHeader>
              <h3 class="font-semibold">UI/UX Design</h3>
            </CardHeader>
            <CardBody> Create stunning interfaces users love. </CardBody>
          </CardRoot>

          <CardRoot hoverable>
            <CardMedia ratio="video">
              <div
                class="h-full w-full bg-linear-to-br from-purple-500 via-pink-500 to-orange-500"
              />
            </CardMedia>
            <CardHeader>
              <h3 class="font-semibold">Creative Studio</h3>
            </CardHeader>
            <CardBody> Transform ideas into reality. </CardBody>
          </CardRoot>
        </div>
      </section>

      <!-- Colored Cards -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Colored Cards</h2>
        <div class="space-y-6">
          <div>
            <p class="mb-4 text-sm font-medium text-gray-700">Outlined Variant</p>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
              <CardRoot
                v-for="color in colors"
                :key="`outlined-${color}`"
                variant="outlined"
                :color="color"
              >
                <CardBody class="text-center">
                  <Icon icon="lucide:palette" class="mx-auto mb-2 text-2xl text-current" />
                  <p class="text-sm font-medium capitalize">{{ color }}</p>
                </CardBody>
              </CardRoot>
            </div>
          </div>

          <div>
            <p class="mb-4 text-sm font-medium text-gray-700">Flat Variant</p>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
              <CardRoot
                v-for="color in colors"
                :key="`flat-${color}`"
                variant="flat"
                :color="color"
              >
                <CardBody class="text-center">
                  <Icon icon="lucide:sparkles" class="mx-auto mb-2 text-2xl text-current" />
                  <p class="text-sm font-medium capitalize">{{ color }}</p>
                </CardBody>
              </CardRoot>
            </div>
          </div>
        </div>
      </section>

      <!-- Full Height -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Full Height Cards</h2>
        <p class="text-sm text-gray-600">Cards maintain equal heights in grid layouts</p>
        <div class="grid grid-cols-3 gap-6 h-96">
          <CardRoot full-height variant="elevated">
            <CardHeader>
              <h3 class="font-semibold">Basic</h3>
            </CardHeader>
            <CardBody>
              <p class="text-2xl font-bold mb-2">
                ₦10,000
                <span class="text-sm font-normal">/mo</span>
              </p>
              <p class="text-sm text-gray-600">For individuals</p>
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="outline" class="w-full">Choose</Button>
            </CardFooter>
          </CardRoot>

          <CardRoot full-height variant="elevated">
            <CardHeader>
              <h3 class="font-semibold">Pro</h3>
            </CardHeader>
            <CardBody>
              <p class="text-2xl font-bold mb-2">
                ₦29,000
                <span class="text-sm font-normal">/mo</span>
              </p>
              <p class="text-sm text-gray-600">For teams with additional features.</p>
            </CardBody>
            <CardFooter>
              <Button size="sm" class="w-full">Choose</Button>
            </CardFooter>
          </CardRoot>

          <CardRoot full-height variant="elevated">
            <CardHeader>
              <h3 class="font-semibold">Enterprise</h3>
            </CardHeader>
            <CardBody>
              <p class="text-2xl font-bold mb-2">Custom</p>
              <p class="text-sm text-gray-600">Tailored solutions for organizations.</p>
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="soft" class="w-full">Contact</Button>
            </CardFooter>
          </CardRoot>
        </div>
      </section>

      <!-- States -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Card States</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardRoot>
            <CardHeader>
              <h3 class="font-semibold">Normal</h3>
            </CardHeader>
            <CardBody> Fully interactive card. </CardBody>
            <CardFooter>
              <Button size="sm">Click Me</Button>
            </CardFooter>
          </CardRoot>

          <CardRoot disabled>
            <CardHeader>
              <h3 class="font-semibold">Disabled</h3>
            </CardHeader>
            <CardBody> Cannot be interacted with. </CardBody>
            <CardFooter>
              <Button size="sm" disabled>Disabled</Button>
            </CardFooter>
          </CardRoot>

          <CardRoot :loading="loadingCard">
            <CardHeader>
              <h3 class="font-semibold">Loading</h3>
            </CardHeader>
            <CardBody> Shows blur effect when loading. </CardBody>
            <CardFooter>
              <Button size="sm" :disabled="loadingCard" @click="toggleLoading">
                {{ loadingCard ? 'Loading...' : 'Load' }}
              </Button>
            </CardFooter>
          </CardRoot>
        </div>
      </section>

      <!-- Real-World Examples -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Real-World Examples</h2>

        <div class="space-y-6">
          <!-- Product Cards -->
          <div>
            <p class="mb-4 text-sm font-medium text-gray-700">E-commerce Products</p>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
              <CardRoot hoverable>
                <CardMedia ratio="square">
                  <img
                    src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400"
                    alt="Product"
                    class="object-cover"
                  />
                </CardMedia>
                <CardBody>
                  <div class="flex items-start justify-between mb-2">
                    <h4 class="font-semibold text-sm">Sunglasses</h4>
                    <Badge color="success" size="xs">New</Badge>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-lg font-bold">₦89,000</span>
                    <div class="flex items-center gap-1 text-xs">
                      <Icon icon="lucide:star" class="text-yellow-400" />
                      <span>4.7</span>
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button size="sm" variant="soft" class="w-full">Add to Cart</Button>
                </CardFooter>
              </CardRoot>

              <CardRoot hoverable>
                <CardMedia ratio="square">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
                    alt="Product"
                    class="object-cover"
                  />
                </CardMedia>
                <CardBody>
                  <div class="flex items-start justify-between mb-2">
                    <h4 class="font-semibold text-sm">Watch</h4>
                    <Badge color="danger" size="xs">-20%</Badge>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-lg font-bold">
                      ₦199,000
                      <span class="text-sm font-normal line-through text-gray-500">₦249,000</span>
                    </span>
                    <div class="flex items-center gap-1 text-xs">
                      <Icon icon="lucide:star" class="text-yellow-400" />
                      <span>4.9</span>
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button size="sm" class="w-full">Buy Now</Button>
                </CardFooter>
              </CardRoot>

              <CardRoot hoverable>
                <CardMedia ratio="square">
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
                    alt="Product"
                    class="object-cover"
                  />
                </CardMedia>
                <CardBody>
                  <div class="flex items-start justify-between mb-2">
                    <h4 class="font-semibold text-sm">Headphones</h4>
                    <Badge color="warning" size="xs">Hot</Badge>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-lg font-bold">
                      ₦249,000
                      <span class="text-sm font-normal line-through text-gray-500">₦299,000</span>
                    </span>
                    <div class="flex items-center gap-1 text-xs">
                      <Icon icon="lucide:star" class="text-yellow-400" />
                      <span>4.8</span>
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button size="sm" variant="outline" class="w-full">Details</Button>
                </CardFooter>
              </CardRoot>

              <CardRoot hoverable>
                <CardMedia ratio="square">
                  <img
                    src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400"
                    alt="Product"
                    class="object-cover"
                  />
                </CardMedia>
                <CardBody>
                  <div class="flex items-start justify-between mb-2">
                    <h4 class="font-semibold text-sm">Speaker</h4>
                    <Badge color="brand" size="xs">Best</Badge>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-lg font-bold"> ₦129,000 </span>
                    <div class="flex items-center gap-1 text-xs">
                      <Icon icon="lucide:star" class="text-yellow-400" />
                      <span>4.6</span>
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button size="sm" variant="secondary" class="w-full">Learn More</Button>
                </CardFooter>
              </CardRoot>
            </div>
          </div>

          <!-- Feature Cards -->
          <div>
            <p class="mb-4 text-sm font-medium text-gray-700">Feature Highlights</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CardRoot hoverable variant="flat" color="brand">
                <CardBody>
                  <div
                    class="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4"
                  >
                    <Icon icon="lucide:zap" class="text-2xl text-white" />
                  </div>
                  <h3 class="font-semibold mb-2">Lightning Fast</h3>
                  <p class="text-sm text-gray-600">Optimized performance for maximum speed.</p>
                </CardBody>
              </CardRoot>

              <CardRoot hoverable variant="flat" color="success">
                <CardBody>
                  <div
                    class="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4"
                  >
                    <Icon icon="lucide:shield-check" class="text-2xl text-white" />
                  </div>
                  <h3 class="font-semibold mb-2">Secure</h3>
                  <p class="text-sm text-gray-600">Built-in security protects your data.</p>
                </CardBody>
              </CardRoot>

              <CardRoot hoverable variant="flat" color="warning">
                <CardBody>
                  <div
                    class="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center mb-4"
                  >
                    <Icon icon="lucide:palette" class="text-2xl text-white" />
                  </div>
                  <h3 class="font-semibold mb-2">Customizable</h3>
                  <p class="text-sm text-gray-600">Tailor every aspect to your needs.</p>
                </CardBody>
              </CardRoot>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
