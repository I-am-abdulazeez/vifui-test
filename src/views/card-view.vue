<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { Button, Badge } from '@vifui/core'
import { CardRoot, CardHeader, CardBody, CardFooter, CardMedia } from '@vifui/core'

const variants = ['elevated', 'outlined', 'flat', 'ghost'] as const
const sizes = ['sm', 'md', 'lg'] as const
const colors = ['neutral', 'brand', 'success', 'warning', 'danger'] as const

// Interactive states
const loadingCards = ref<Record<string, boolean>>({})

const toggleLoading = (cardId: string) => {
  loadingCards.value[cardId] = true
  setTimeout(() => {
    loadingCards.value[cardId] = false
  }, 3000)
}
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <div class="max-w-7xl mx-auto space-y-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Card Component</h1>
        <p class="text-gray-600">
          Comprehensive testing of all card variants, sizes, states, and real-world use cases
        </p>
      </div>

      <!-- Basic Variants -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Card Variants</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="variant in variants" :key="variant">
            <p class="mb-3 text-sm font-medium capitalize text-gray-700">
              {{ variant }}
            </p>
            <CardRoot :variant="variant">
              <CardHeader>
                <h3 class="font-semibold">{{ variant }} Card</h3>
              </CardHeader>
              <CardBody>
                This demonstrates the {{ variant }} variant styling with default configuration.
              </CardBody>
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
                <h3 class="font-semibold">{{ size.toUpperCase() }} Size</h3>
              </CardHeader>
              <CardBody>
                The {{ size }} size controls internal spacing and padding of card components.
              </CardBody>
            </CardRoot>
          </div>
        </div>
      </section>

      <!-- Hoverable Cards -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Hoverable Cards (Interactive)</h2>
        <p class="text-sm text-gray-600">Hover over these cards to see smooth animations</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardRoot hoverable variant="elevated">
            <CardHeader>
              <h3 class="font-semibold">Elevated Hover</h3>
            </CardHeader>
            <CardBody>
              This card lifts up smoothly on hover, creating depth and visual feedback.
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="soft">Explore</Button>
            </CardFooter>
          </CardRoot>

          <CardRoot hoverable variant="outlined">
            <CardHeader>
              <h3 class="font-semibold">Outlined Hover</h3>
            </CardHeader>
            <CardBody>
              The border color changes on hover, providing subtle interaction feedback.
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="outline">Discover</Button>
            </CardFooter>
          </CardRoot>

          <CardRoot hoverable variant="flat">
            <CardHeader>
              <h3 class="font-semibold">Flat Hover</h3>
            </CardHeader>
            <CardBody>
              A gentle shadow appears on hover, adding dimension to the flat design.
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="secondary">Learn More</Button>
            </CardFooter>
          </CardRoot>
        </div>
      </section>

      <!-- Cards with Media -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Cards with Media</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <!-- Square ratio -->
          <CardRoot hoverable>
            <CardMedia
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600"
              alt="Technology"
              ratio="square"
            />
            <CardHeader>
              <h3 class="font-semibold">Modern Tech Stack</h3>
            </CardHeader>
            <CardBody>
              Build scalable applications with cutting-edge technologies and best practices.
            </CardBody>
            <CardFooter>
              <Button size="sm" class="w-full">Get Started</Button>
            </CardFooter>
          </CardRoot>

          <!-- Auto ratio -->
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
            <CardBody>
              Create stunning interfaces that users love with modern design principles.
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="secondary" class="w-full"> View Portfolio </Button>
            </CardFooter>
          </CardRoot>

          <!-- Video ratio with gradient -->
          <CardRoot hoverable>
            <CardMedia ratio="video">
              <div
                class="h-full w-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500"
              />
            </CardMedia>
            <CardHeader>
              <h3 class="font-semibold">Creative Studio</h3>
            </CardHeader>
            <CardBody>
              Transform your ideas into reality with our creative design services.
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="soft" class="w-full">Contact Us</Button>
            </CardFooter>
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

      <!-- Full Height Cards -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Full Height Cards</h2>
        <p class="text-sm text-gray-600">
          Cards maintain equal heights with content distributed properly
        </p>
        <div class="grid grid-cols-3 gap-6 h-96">
          <CardRoot full-height variant="elevated">
            <CardHeader>
              <h3 class="font-semibold">Basic Plan</h3>
            </CardHeader>
            <CardBody>
              <p class="text-3xl font-bold mb-2">$9<span class="text-sm font-normal">/mo</span></p>
              <p class="text-sm text-gray-600">Perfect for individuals</p>
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="outline" class="w-full">Choose Plan</Button>
            </CardFooter>
          </CardRoot>

          <CardRoot full-height variant="elevated">
            <CardHeader>
              <h3 class="font-semibold">Pro Plan</h3>
            </CardHeader>
            <CardBody>
              <p class="text-3xl font-bold mb-2">$29<span class="text-sm font-normal">/mo</span></p>
              <p class="text-sm text-gray-600">
                Great for small teams with additional features and priority support included.
              </p>
            </CardBody>
            <CardFooter>
              <Button size="sm" class="w-full">Choose Plan</Button>
            </CardFooter>
          </CardRoot>

          <CardRoot full-height variant="elevated">
            <CardHeader>
              <h3 class="font-semibold">Enterprise</h3>
            </CardHeader>
            <CardBody>
              <p class="text-3xl font-bold mb-2">Custom</p>
              <p class="text-sm text-gray-600">
                Tailored solutions for large organizations with dedicated support, SLA, and custom
                integrations.
              </p>
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="soft" class="w-full">Contact Sales</Button>
            </CardFooter>
          </CardRoot>
        </div>
      </section>

      <!-- Card States -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Card States</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <!-- Normal -->
          <CardRoot>
            <CardHeader>
              <h3 class="font-semibold">Normal State</h3>
            </CardHeader>
            <CardBody> This card is fully interactive and ready for user interaction. </CardBody>
            <CardFooter>
              <Button size="sm">Click Me</Button>
            </CardFooter>
          </CardRoot>

          <!-- Disabled -->
          <CardRoot disabled>
            <CardHeader>
              <h3 class="font-semibold">Disabled State</h3>
            </CardHeader>
            <CardBody> This card is disabled and cannot be interacted with. </CardBody>
            <CardFooter>
              <Button size="sm" disabled>Disabled</Button>
            </CardFooter>
          </CardRoot>

          <!-- Loading -->
          <CardRoot :loading="loadingCards['demo']">
            <CardHeader>
              <h3 class="font-semibold">Loading State</h3>
            </CardHeader>
            <CardBody> Click the button to trigger the loading state with blur effect. </CardBody>
            <CardFooter>
              <Button size="sm" :disabled="loadingCards['demo']" @click="toggleLoading('demo')">
                {{ loadingCards['demo'] ? 'Loading...' : 'Trigger Loading' }}
              </Button>
            </CardFooter>
          </CardRoot>
        </div>
      </section>

      <!-- Loading State Showcase -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Loading State - Interactive Demo</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <CardRoot :loading="loadingCards['load1']">
            <CardMedia>
              <img
                src="https://images.unsplash.com/photo-1557821552-17105176677c?w=400"
                alt="Analytics"
                class="object-cover"
              />
            </CardMedia>
            <CardHeader>
              <h3 class="font-semibold">Analytics Dashboard</h3>
            </CardHeader>
            <CardBody>
              View comprehensive analytics and insights for your business metrics.
            </CardBody>
            <CardFooter>
              <Button
                size="sm"
                class="w-full"
                :disabled="loadingCards['load1']"
                @click="toggleLoading('load1')"
              >
                {{ loadingCards['load1'] ? 'Loading...' : 'Load Data' }}
              </Button>
            </CardFooter>
          </CardRoot>

          <CardRoot :loading="loadingCards['load2']" variant="outlined">
            <CardHeader>
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon icon="lucide:database" class="text-xl text-blue-600" />
                </div>
                <div>
                  <h3 class="font-semibold">Data Sync</h3>
                  <p class="text-xs text-gray-600">Last synced 2 hours ago</p>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              Synchronize your data across all connected platforms and services.
            </CardBody>
            <CardFooter>
              <Button
                size="sm"
                variant="outline"
                class="w-full"
                :disabled="loadingCards['load2']"
                @click="toggleLoading('load2')"
              >
                {{ loadingCards['load2'] ? 'Syncing...' : 'Sync Now' }}
              </Button>
            </CardFooter>
          </CardRoot>

          <CardRoot :loading="loadingCards['load3']" variant="flat" color="brand">
            <CardHeader>
              <h3 class="font-semibold">Export Report</h3>
            </CardHeader>
            <CardBody> Generate and download comprehensive reports in PDF or CSV format. </CardBody>
            <CardFooter>
              <Button
                size="sm"
                variant="soft"
                class="w-full"
                :disabled="loadingCards['load3']"
                @click="toggleLoading('load3')"
              >
                {{ loadingCards['load3'] ? 'Exporting...' : 'Export' }}
              </Button>
            </CardFooter>
          </CardRoot>
        </div>
      </section>

      <!-- E-commerce Product Cards -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">E-commerce Product Cards</h2>
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
                <h4 class="font-semibold text-sm">Classic Sunglasses</h4>
                <Badge color="success" size="xs">New</Badge>
              </div>
              <p class="text-xs text-gray-600 mb-3">UV protection, polarized</p>
              <div class="flex items-center justify-between">
                <span class="text-lg font-bold">$89</span>
                <div class="flex items-center gap-1 text-xs">
                  <Icon icon="lucide:star" class="text-yellow-400" />
                  <span class="font-medium">4.7</span>
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
                <h4 class="font-semibold text-sm">Luxury Watch</h4>
                <Badge color="danger" size="xs">-20%</Badge>
              </div>
              <p class="text-xs text-gray-600 mb-3">Automatic, waterproof</p>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="text-lg font-bold">$399</span>
                  <span class="text-xs text-gray-500 line-through">$499</span>
                </div>
                <div class="flex items-center gap-1 text-xs">
                  <Icon icon="lucide:star" class="text-yellow-400" />
                  <span class="font-medium">4.9</span>
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
                <h4 class="font-semibold text-sm">Pro Headphones</h4>
                <Badge color="warning" size="xs">Hot</Badge>
              </div>
              <p class="text-xs text-gray-600 mb-3">Noise cancelling, 40hr</p>
              <div class="flex items-center justify-between">
                <span class="text-lg font-bold">$249</span>
                <div class="flex items-center gap-1 text-xs">
                  <Icon icon="lucide:star" class="text-yellow-400" />
                  <span class="font-medium">4.8</span>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="outline" class="w-full">View Details</Button>
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
                <h4 class="font-semibold text-sm">Smart Speaker</h4>
                <Badge color="brand" size="xs">Best</Badge>
              </div>
              <p class="text-xs text-gray-600 mb-3">Voice assistant, WiFi</p>
              <div class="flex items-center justify-between">
                <span class="text-lg font-bold">$129</span>
                <div class="flex items-center gap-1 text-xs">
                  <Icon icon="lucide:star" class="text-yellow-400" />
                  <span class="font-medium">4.6</span>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="secondary" class="w-full">Learn More</Button>
            </CardFooter>
          </CardRoot>
        </div>
      </section>

      <!-- Team Member Cards -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Team Member Cards</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <CardRoot hoverable class="text-center">
            <CardBody>
              <img
                src="https://github.com/shadcn.png"
                alt="Team member"
                class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 class="font-semibold mb-1">Alex Johnson</h4>
              <p class="text-sm text-gray-600 mb-3">CEO & Founder</p>
              <div class="flex justify-center gap-2">
                <Button size="sm" variant="ghost" :isIconOnly="true">
                  <Icon icon="lucide:twitter" />
                </Button>
                <Button size="sm" variant="ghost" :isIconOnly="true">
                  <Icon icon="lucide:linkedin" />
                </Button>
                <Button size="sm" variant="ghost" :isIconOnly="true">
                  <Icon icon="lucide:github" />
                </Button>
              </div>
            </CardBody>
          </CardRoot>

          <CardRoot hoverable class="text-center">
            <CardBody>
              <img
                src="https://github.com/vercel.png"
                alt="Team member"
                class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 class="font-semibold mb-1">Sarah Chen</h4>
              <p class="text-sm text-gray-600 mb-3">Head of Design</p>
              <div class="flex justify-center gap-2">
                <Button size="sm" variant="ghost" :isIconOnly="true">
                  <Icon icon="lucide:twitter" />
                </Button>
                <Button size="sm" variant="ghost" :isIconOnly="true">
                  <Icon icon="lucide:linkedin" />
                </Button>
                <Button size="sm" variant="ghost" :isIconOnly="true">
                  <Icon icon="lucide:dribbble" />
                </Button>
              </div>
            </CardBody>
          </CardRoot>

          <CardRoot hoverable class="text-center">
            <CardBody>
              <img
                src="https://github.com/favorodera.png"
                alt="Team member"
                class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 class="font-semibold mb-1">Marcus Ray</h4>
              <p class="text-sm text-gray-600 mb-3">Lead Developer</p>
              <div class="flex justify-center gap-2">
                <Button size="sm" variant="ghost" :isIconOnly="true">
                  <Icon icon="lucide:twitter" />
                </Button>
                <Button size="sm" variant="ghost" :isIconOnly="true">
                  <Icon icon="lucide:linkedin" />
                </Button>
                <Button size="sm" variant="ghost" :isIconOnly="true">
                  <Icon icon="lucide:github" />
                </Button>
              </div>
            </CardBody>
          </CardRoot>

          <CardRoot hoverable class="text-center">
            <CardBody>
              <img
                src="https://github.com/nuxt.png"
                alt="Team member"
                class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 class="font-semibold mb-1">Emily Stone</h4>
              <p class="text-sm text-gray-600 mb-3">Product Manager</p>
              <div class="flex justify-center gap-2">
                <Button size="sm" variant="ghost" :isIconOnly="true">
                  <Icon icon="lucide:twitter" />
                </Button>
                <Button size="sm" variant="ghost" :isIconOnly="true">
                  <Icon icon="lucide:linkedin" />
                </Button>
                <Button size="sm" variant="ghost" :isIconOnly="true">
                  <Icon icon="lucide:mail" />
                </Button>
              </div>
            </CardBody>
          </CardRoot>
        </div>
      </section>

      <!-- Feature Cards -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Feature Highlight Cards</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardRoot hoverable variant="flat" color="brand">
            <CardBody>
              <div class="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <Icon icon="lucide:zap" class="text-2xl text-white" />
              </div>
              <h3 class="font-semibold mb-2">Lightning Fast</h3>
              <p class="text-sm text-gray-600">
                Optimized performance ensures your application runs at maximum speed.
              </p>
            </CardBody>
          </CardRoot>

          <CardRoot hoverable variant="flat" color="success">
            <CardBody>
              <div class="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
                <Icon icon="lucide:shield-check" class="text-2xl text-white" />
              </div>
              <h3 class="font-semibold mb-2">Secure by Default</h3>
              <p class="text-sm text-gray-600">
                Built-in security features protect your data and users from threats.
              </p>
            </CardBody>
          </CardRoot>

          <CardRoot hoverable variant="flat" color="warning">
            <CardBody>
              <div class="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center mb-4">
                <Icon icon="lucide:palette" class="text-2xl text-white" />
              </div>
              <h3 class="font-semibold mb-2">Fully Customizable</h3>
              <p class="text-sm text-gray-600">
                Tailor every aspect to match your brand and design requirements.
              </p>
            </CardBody>
          </CardRoot>
        </div>
      </section>

      <!-- Cards as Links -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Cards as Links</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardRoot hoverable href="https://github.com" target="_blank">
            <CardBody>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center">
                  <Icon icon="mdi:github" class="text-2xl text-white" />
                </div>
                <div>
                  <h4 class="font-semibold">GitHub Repository</h4>
                  <p class="text-xs text-gray-600">View source code</p>
                </div>
              </div>
            </CardBody>
          </CardRoot>

          <CardRoot hoverable href="https://twitter.com" target="_blank">
            <CardBody>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                  <Icon icon="mdi:twitter" class="text-2xl text-white" />
                </div>
                <div>
                  <h4 class="font-semibold">Twitter Updates</h4>
                  <p class="text-xs text-gray-600">Follow for news</p>
                </div>
              </div>
            </CardBody>
          </CardRoot>

          <CardRoot hoverable href="https://discord.com" target="_blank">
            <CardBody>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center">
                  <Icon icon="ic:baseline-discord" class="text-2xl text-white" />
                </div>
                <div>
                  <h4 class="font-semibold">Discord Community</h4>
                  <p class="text-xs text-gray-600">Join discussions</p>
                </div>
              </div>
            </CardBody>
          </CardRoot>
        </div>
      </section>

      <!-- Stat Cards -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Statistics Cards</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <CardRoot variant="flat" color="brand">
            <CardBody>
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-gray-600">Total Users</p>
                <Icon icon="lucide:users" class="text-blue-500" />
              </div>
              <p class="text-3xl font-bold mb-1">24,583</p>
              <p class="text-xs text-green-600 flex items-center gap-1">
                <Icon icon="lucide:trending-up" />
                <span>+12.5% from last month</span>
              </p>
            </CardBody>
          </CardRoot>

          <CardRoot variant="flat" color="success">
            <CardBody>
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-gray-600">New Signups</p>
                <Icon icon="lucide:user-plus" class="text-green-500" />
              </div>
              <p class="text-3xl font-bold mb-1">1,245</p>
              <p class="text-xs text-green-600 flex items-center gap-1">
                <Icon icon="lucide:trending-up" />
                <span>+9.8% from last week</span>
              </p>
            </CardBody>
          </CardRoot>
          <CardRoot variant="flat" color="success">
            <CardBody>
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-gray-600">Revenue</p>
                <Icon icon="lucide:dollar-sign" class="text-green-500" />
              </div>
              <p class="text-3xl font-bold mb-1">$89,432</p>
              <p class="text-xs text-green-600 flex items-center gap-1">
                <Icon icon="lucide:trending-up" />
                <span>+8.2% from last month</span>
              </p>
            </CardBody>
          </CardRoot>
          <CardRoot variant="flat" color="warning">
            <CardBody>
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-gray-600">Active Projects</p>
                <Icon icon="lucide:folder" class="text-orange-500" />
              </div>
              <p class="text-3xl font-bold mb-1">156</p>
              <p class="text-xs text-orange-600 flex items-center gap-1">
                <Icon icon="lucide:arrow-right" />
                <span>23 completed this week</span>
              </p>
            </CardBody>
          </CardRoot>

          <CardRoot variant="flat" color="danger">
            <CardBody>
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-gray-600">Issues</p>
                <Icon icon="lucide:alert-circle" class="text-red-500" />
              </div>
              <p class="text-3xl font-bold mb-1">12</p>
              <p class="text-xs text-red-600 flex items-center gap-1">
                <Icon icon="lucide:trending-down" />
                <span>-5 from yesterday</span>
              </p>
            </CardBody>
          </CardRoot>
        </div>
      </section>
    </div>
  </div>
</template>
