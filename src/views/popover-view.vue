<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverContent,
  PopoverPortal,
  PopoverClose,
  PopoverArrow,
  PopoverTitle,
  PopoverDescription,
  Button,
  AvatarRoot,
  AvatarImage,
  AvatarFallback,
  CardRoot,
  CardHeader,
  CardBody,
} from '@vifui/core'

const placements = ['top', 'right', 'bottom', 'left'] as const
const placementModel = ref<'top' | 'right' | 'bottom' | 'left'>('top')

const alignments = [
  { label: 'Start', value: 'start' },
  { label: 'Center', value: 'center' },
  { label: 'End', value: 'end' },
] as const
const alignmentModel = ref<'start' | 'center' | 'end'>('center')

const arrowModel = ref(false)
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <div class="max-w-6xl mx-auto space-y-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Popover Component</h1>
        <p class="text-gray-600">
          Comprehensive testing of popover placements, alignments, and real-world use cases
        </p>
      </div>

      <!-- Basic Usage -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Basic Usage</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="flex justify-center items-center min-h-[300px]">
            <PopoverRoot>
              <PopoverTrigger as-child>
                <Button variant="outline">Check Profile</Button>
              </PopoverTrigger>

              <PopoverPortal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverClose />
                  <PopoverTitle>Profile</PopoverTitle>
                  <PopoverDescription>Manage your profile settings</PopoverDescription>

                  <div class="grid grid-cols-[auto_1fr] items-center gap-2">
                    <AvatarRoot variant="ringed" ring-color="brand" size="sm">
                      <AvatarImage src="https://github.com/favorodera.png" />
                      <AvatarFallback>FE</AvatarFallback>
                    </AvatarRoot>

                    <div>
                      <p class="font-semibold text-sm">Favour Emeka</p>
                      <p class="text-xs text-gray-600">Frontend Web Developer</p>
                    </div>
                  </div>
                </PopoverContent>
              </PopoverPortal>
            </PopoverRoot>
          </div>
        </div>
      </section>

      <!-- Placements -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Placements</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 min-h-[300px]">
            <div v-for="placement in placements" :key="placement" class="flex flex-col gap-4">
              <p class="text-sm font-medium capitalize text-gray-700">{{ placement }}</p>
              <div class="flex justify-center items-center flex-1">
                <PopoverRoot>
                  <PopoverTrigger as-child>
                    <Button variant="outline" size="sm">{{ placement }}</Button>
                  </PopoverTrigger>

                  <PopoverPortal>
                    <PopoverContent :side="placement" :side-offset="5">
                      <PopoverArrow />
                      <PopoverClose />
                      <PopoverTitle>{{ placement }} Popover</PopoverTitle>
                      <PopoverDescription
                        >This popover opens to the {{ placement }}</PopoverDescription
                      >
                    </PopoverContent>
                  </PopoverPortal>
                </PopoverRoot>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Alignments -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Alignments</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid gap-6 md:grid-cols-3 min-h-[300px]">
            <div v-for="align in alignments" :key="align.value" class="flex flex-col gap-4">
              <p class="text-sm font-medium text-gray-700">{{ align.label }}</p>
              <div class="flex justify-center items-center flex-1">
                <PopoverRoot>
                  <PopoverTrigger as-child>
                    <Button variant="outline" size="sm">{{ align.label }}</Button>
                  </PopoverTrigger>

                  <PopoverPortal>
                    <PopoverContent side="bottom" :align="align.value" :side-offset="5">
                      <PopoverArrow />
                      <PopoverClose />
                      <PopoverTitle>{{ align.label }} Aligned</PopoverTitle>
                      <PopoverDescription>Aligned to the {{ align.value }}</PopoverDescription>
                    </PopoverContent>
                  </PopoverPortal>
                </PopoverRoot>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive Controls -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Interactive Controls</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid md:grid-cols-[1fr_300px] gap-6 min-h-[300px]">
            <div class="flex justify-center items-center">
              <PopoverRoot>
                <PopoverTrigger as-child>
                  <Button variant="outline">Check Profile</Button>
                </PopoverTrigger>

                <PopoverPortal>
                  <PopoverContent :side="placementModel" :side-offset="5" :align="alignmentModel">
                    <PopoverArrow v-if="arrowModel" />
                    <PopoverClose />
                    <PopoverTitle>Profile</PopoverTitle>
                    <PopoverDescription>Manage your profile settings</PopoverDescription>

                    <div class="grid grid-cols-[auto_1fr] items-center gap-2">
                      <AvatarRoot variant="ringed" ring-color="brand" size="sm">
                        <AvatarImage src="https://github.com/favorodera.png" />
                        <AvatarFallback>FE</AvatarFallback>
                      </AvatarRoot>

                      <div>
                        <p class="font-semibold text-sm">Favour Emeka</p>
                        <p class="text-xs text-gray-600">Frontend Web Developer</p>
                      </div>
                    </div>
                  </PopoverContent>
                </PopoverPortal>
              </PopoverRoot>
            </div>

            <CardRoot>
              <CardHeader>
                <h3 class="text-sm font-semibold text-gray-900">Popover Settings</h3>
              </CardHeader>

              <CardBody class="grid grid-cols-1 gap-4">
                <div class="space-y-2">
                  <p class="text-xs font-medium text-gray-600">Placement</p>
                  <div class="flex gap-2 flex-wrap">
                    <Button
                      v-for="side in placements"
                      :key="side"
                      size="xs"
                      @click="placementModel = side"
                      :color="placementModel === side ? 'brand' : 'neutral'"
                      :variant="placementModel === side ? 'primary' : 'soft'"
                      class="uppercase"
                    >
                      {{ side }}
                    </Button>
                  </div>
                </div>

                <div class="space-y-2">
                  <p class="text-xs font-medium text-gray-600">Alignment</p>
                  <div class="flex gap-2 flex-wrap">
                    <Button
                      v-for="align in alignments"
                      :key="align.value"
                      size="xs"
                      @click="alignmentModel = align.value"
                      :color="alignmentModel === align.value ? 'brand' : 'neutral'"
                      :variant="alignmentModel === align.value ? 'primary' : 'soft'"
                      class="uppercase"
                    >
                      {{ align.label }}
                    </Button>
                  </div>
                </div>

                <div class="space-y-2">
                  <p class="text-xs font-medium text-gray-600">Arrow</p>
                  <div class="flex gap-2">
                    <Button
                      size="xs"
                      @click="arrowModel = !arrowModel"
                      :color="arrowModel ? 'brand' : 'neutral'"
                      :variant="arrowModel ? 'primary' : 'soft'"
                      class="uppercase"
                    >
                      {{ arrowModel ? 'Hide' : 'Show' }}
                    </Button>
                  </div>
                </div>
              </CardBody>
            </CardRoot>
          </div>
        </div>
      </section>

      <!-- With Arrow -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">With Arrow</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="flex justify-center items-center min-h-[200px]">
            <PopoverRoot>
              <PopoverTrigger as-child>
                <Button variant="outline">Show Arrow</Button>
              </PopoverTrigger>

              <PopoverPortal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverClose />
                  <PopoverTitle>With Arrow</PopoverTitle>
                  <PopoverDescription>This popover includes an arrow pointer</PopoverDescription>
                </PopoverContent>
              </PopoverPortal>
            </PopoverRoot>
          </div>
        </div>
      </section>

      <!-- Without Arrow -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Without Arrow</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="flex justify-center items-center min-h-[200px]">
            <PopoverRoot>
              <PopoverTrigger as-child>
                <Button variant="outline">No Arrow</Button>
              </PopoverTrigger>

              <PopoverPortal>
                <PopoverContent>
                  <PopoverClose />
                  <PopoverTitle>Without Arrow</PopoverTitle>
                  <PopoverDescription>This popover has no arrow pointer</PopoverDescription>
                </PopoverContent>
              </PopoverPortal>
            </PopoverRoot>
          </div>
        </div>
      </section>

      <!-- Real World Examples -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Real World Examples</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Profile Menu -->
            <div class="space-y-4">
              <h3 class="text-base font-semibold text-gray-900">Profile Menu</h3>
              <div class="flex justify-center items-center min-h-[200px]">
                <PopoverRoot>
                  <PopoverTrigger as-child>
                    <AvatarRoot variant="ringed" ring-color="brand" class="cursor-pointer">
                      <AvatarImage src="https://github.com/favorodera.png" />
                      <AvatarFallback>FE</AvatarFallback>
                    </AvatarRoot>
                  </PopoverTrigger>

                  <PopoverPortal>
                    <PopoverContent class="w-48" :side-offset="5">
                      <p class="text-sm font-semibold">Favour Emeka</p>
                      <p class="text-xs text-gray-600 mb-2">favour@email.com</p>

                      <div class="flex flex-col gap-1">
                        <Button size="sm" variant="ghost" class="justify-start">
                          <Icon icon="lucide:user" /> Profile
                        </Button>
                        <Button size="sm" variant="ghost" class="justify-start">
                          <Icon icon="lucide:settings" /> Settings
                        </Button>
                        <Button size="sm" variant="ghost" color="danger" class="justify-start">
                          <Icon icon="lucide:log-out" /> Logout
                        </Button>
                      </div>
                    </PopoverContent>
                  </PopoverPortal>
                </PopoverRoot>
              </div>
            </div>

            <!-- Form Help -->
            <div class="space-y-4">
              <h3 class="text-base font-semibold text-gray-900">Form Help</h3>
              <div class="flex justify-center items-center min-h-[200px]">
                <div class="flex items-center gap-2">
                  <span class="text-sm font-medium">Password</span>

                  <PopoverRoot>
                    <PopoverTrigger as-child>
                      <Button size="xs" variant="soft" is-icon-only>
                        <Icon icon="lucide:info" />
                      </Button>
                    </PopoverTrigger>

                    <PopoverPortal>
                      <PopoverContent class="w-56" :side-offset="5">
                        <p class="text-sm font-semibold mb-1">Password rules</p>
                        <ul class="text-xs text-gray-600 space-y-1">
                          <li>• At least 8 characters</li>
                          <li>• One number</li>
                          <li>• One symbol</li>
                        </ul>
                      </PopoverContent>
                    </PopoverPortal>
                  </PopoverRoot>
                </div>
              </div>
            </div>

            <!-- Action Menu -->
            <div class="space-y-4">
              <h3 class="text-base font-semibold text-gray-900">Action Menu</h3>
              <div class="flex justify-center items-center min-h-[200px]">
                <PopoverRoot>
                  <PopoverTrigger as-child>
                    <Button variant="outline" is-icon-only>
                      <Icon icon="lucide:more-vertical" />
                    </Button>
                  </PopoverTrigger>

                  <PopoverPortal>
                    <PopoverContent class="w-40" :side-offset="5">
                      <div class="flex flex-col gap-1">
                        <Button size="sm" variant="ghost" class="justify-start">
                          <Icon icon="lucide:edit" /> Edit
                        </Button>
                        <Button size="sm" variant="ghost" class="justify-start">
                          <Icon icon="lucide:copy" /> Duplicate
                        </Button>
                        <Button size="sm" variant="ghost" class="justify-start">
                          <Icon icon="lucide:archive" /> Archive
                        </Button>
                        <Button size="sm" variant="ghost" color="danger" class="justify-start">
                          <Icon icon="lucide:trash-2" /> Delete
                        </Button>
                      </div>
                    </PopoverContent>
                  </PopoverPortal>
                </PopoverRoot>
              </div>
            </div>

            <!-- Color Picker -->
            <div class="space-y-4">
              <h3 class="text-base font-semibold text-gray-900">Color Picker</h3>
              <div class="flex justify-center items-center min-h-[200px]">
                <PopoverRoot>
                  <PopoverTrigger as-child>
                    <Button variant="outline" size="sm">
                      <div class="w-4 h-4 rounded bg-blue-500 mr-2"></div>
                      Choose Color
                    </Button>
                  </PopoverTrigger>

                  <PopoverPortal>
                    <PopoverContent class="w-56" :side-offset="5">
                      <PopoverTitle>Select Color</PopoverTitle>
                      <PopoverDescription>Pick a color for your theme</PopoverDescription>
                      <div class="grid grid-cols-5 gap-2 mt-3">
                        <button
                          v-for="color in [
                            'red',
                            'blue',
                            'green',
                            'yellow',
                            'purple',
                            'pink',
                            'indigo',
                            'orange',
                            'teal',
                            'gray',
                          ]"
                          :key="color"
                          :class="`w-full h-8 rounded bg-${color}-500 hover:ring-2 ring-${color}-600`"
                        ></button>
                      </div>
                    </PopoverContent>
                  </PopoverPortal>
                </PopoverRoot>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Rich Content -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Rich Content Example</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="flex justify-center items-center min-h-[200px]">
            <PopoverRoot>
              <PopoverTrigger as-child>
                <Button variant="outline">View Details</Button>
              </PopoverTrigger>

              <PopoverPortal>
                <PopoverContent class="w-80" :side-offset="5">
                  <PopoverClose />
                  <div class="space-y-3">
                    <div class="flex items-start gap-3">
                      <AvatarRoot size="lg">
                        <AvatarImage src="https://github.com/favorodera.png" />
                        <AvatarFallback>FE</AvatarFallback>
                      </AvatarRoot>
                      <div>
                        <p class="font-semibold text-sm">Favour Emeka</p>
                        <p class="text-xs text-gray-600">@favorodera</p>
                      </div>
                    </div>
                    <p class="text-sm text-gray-700">
                      Frontend developer passionate about building beautiful and accessible user
                      interfaces.
                    </p>
                    <div class="flex gap-4 text-xs text-gray-600">
                      <div><span class="font-semibold text-gray-900">1.2k</span> Followers</div>
                      <div><span class="font-semibold text-gray-900">456</span> Following</div>
                    </div>
                    <Button size="sm" class="w-full">Follow</Button>
                  </div>
                </PopoverContent>
              </PopoverPortal>
            </PopoverRoot>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
