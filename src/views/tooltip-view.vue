<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipArrow,
  Button,
  Badge,
  AvatarRoot,
  AvatarImage,
  AvatarFallback,
} from '@vifui/core'

const delays = [
  { label: 'Instant (0ms)', duration: 0 },
  { label: 'Short (300ms)', duration: 300 },
  { label: 'Long (700ms)', duration: 700 },
] as const
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <div class="max-w-5xl mx-auto space-y-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Tooltip Component</h1>
        <p class="text-gray-600">
          Comprehensive testing of tooltip placements, delays, and content types
        </p>
      </div>

      <!-- Basic Usage -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Basic Usage</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 flex justify-center">
          <TooltipProvider>
            <TooltipRoot>
              <TooltipTrigger as-child>
                <Button variant="soft" class="rounded-full">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
                <TooltipArrow />
              </TooltipContent>
            </TooltipRoot>
          </TooltipProvider>
        </div>
      </section>

      <!-- Placements -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Placements</h2>
        <div
          class="bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-center"
        >
          <TooltipProvider>
            <div class="grid grid-cols-3 gap-8 items-center">
              <!-- Empty top-left -->
              <div></div>

              <!-- Top -->
              <div class="flex justify-center">
                <TooltipRoot>
                  <TooltipTrigger as-child>
                    <Button variant="soft" class="rounded-full capitalize w-32">Top</Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" :avoid-collisions="false">
                    <p>Tooltip on top</p>
                    <TooltipArrow />
                  </TooltipContent>
                </TooltipRoot>
              </div>

              <!-- Empty top-right -->
              <div></div>

              <!-- Left -->
              <div class="flex justify-end">
                <TooltipRoot>
                  <TooltipTrigger as-child>
                    <Button variant="soft" class="rounded-full capitalize w-32">Left</Button>
                  </TooltipTrigger>
                  <TooltipContent side="left" :avoid-collisions="false">
                    <p>Tooltip on left</p>
                    <TooltipArrow />
                  </TooltipContent>
                </TooltipRoot>
              </div>

              <!-- Empty center -->
              <div></div>

              <!-- Right -->
              <div class="flex justify-start">
                <TooltipRoot>
                  <TooltipTrigger as-child>
                    <Button variant="soft" class="rounded-full capitalize w-32">Right</Button>
                  </TooltipTrigger>
                  <TooltipContent side="right" :avoid-collisions="false">
                    <p>Tooltip on right</p>
                    <TooltipArrow />
                  </TooltipContent>
                </TooltipRoot>
              </div>

              <!-- Empty bottom-left -->
              <div></div>

              <!-- Bottom -->
              <div class="flex justify-center">
                <TooltipRoot>
                  <TooltipTrigger as-child>
                    <Button variant="soft" class="rounded-full capitalize w-32">Bottom</Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" :avoid-collisions="false">
                    <p>Tooltip on bottom</p>
                    <TooltipArrow />
                  </TooltipContent>
                </TooltipRoot>
              </div>

              <!-- Empty bottom-right -->
              <div></div>
            </div>
          </TooltipProvider>
        </div>
      </section>

      <!-- Delays -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Delays</h2>
        <div
          class="bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center gap-4"
        >
          <TooltipProvider>
            <TooltipRoot
              v-for="delay in delays"
              :key="delay.label"
              :delay-duration="delay.duration"
            >
              <TooltipTrigger as-child>
                <Button variant="soft" class="rounded-full">{{ delay.label }}</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Opened after {{ delay.duration }}ms</p>
                <TooltipArrow />
              </TooltipContent>
            </TooltipRoot>
          </TooltipProvider>
        </div>
      </section>

      <!-- With/Without Arrow -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Arrow Variations</h2>
        <div
          class="bg-white rounded-lg border border-gray-200 p-6 flex flex-row items-center gap-8"
        >
          <div class="text-center space-y-3">
            <p class="text-sm font-medium text-gray-700">With Arrow</p>
            <TooltipProvider>
              <TooltipRoot>
                <TooltipTrigger as-child>
                  <Button variant="soft" class="rounded-full">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>I have an arrow</p>
                  <TooltipArrow />
                </TooltipContent>
              </TooltipRoot>
            </TooltipProvider>
          </div>

          <div class="text-center space-y-3">
            <p class="text-sm font-medium text-gray-700">Without Arrow</p>
            <TooltipProvider>
              <TooltipRoot>
                <TooltipTrigger as-child>
                  <Button variant="soft" class="rounded-full">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Clean look without arrow</p>
                </TooltipContent>
              </TooltipRoot>
            </TooltipProvider>
          </div>
        </div>
      </section>

      <!-- Rich Content -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Rich Content</h2>
        <div
          class="bg-white rounded-lg border border-gray-200 p-6 flex flex-wrap gap-6 justify-center"
        >
          <!-- With icon -->
          <TooltipProvider>
            <TooltipRoot>
              <TooltipTrigger as-child>
                <Button>Information</Button>
              </TooltipTrigger>
              <TooltipContent class="max-w-xs">
                <div class="flex flex-col gap-1">
                  <div class="flex items-center gap-2 font-semibold">
                    <Icon icon="lucide:info" />
                    <span>Pro Tip</span>
                  </div>
                  <p class="text-sm text-gray-600">Tooltips can contain multiple lines of text.</p>
                </div>
                <TooltipArrow />
              </TooltipContent>
            </TooltipRoot>
          </TooltipProvider>

          <!-- With badge -->
          <TooltipProvider>
            <TooltipRoot>
              <TooltipTrigger as-child>
                <Button variant="soft" class="rounded-full">Status</Button>
              </TooltipTrigger>
              <TooltipContent>
                <div class="flex items-center gap-2">
                  <Badge color="success" size="sm">Active</Badge>
                  <span class="text-sm">System operational</span>
                </div>
                <TooltipArrow />
              </TooltipContent>
            </TooltipRoot>
          </TooltipProvider>
        </div>
      </section>

      <!-- Icon Actions -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Icon Actions</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div class="flex items-center gap-4">
            <p class="text-sm font-medium w-32">Basic Actions:</p>
            <TooltipProvider>
              <div class="flex gap-2">
                <TooltipRoot>
                  <TooltipTrigger as-child>
                    <Button variant="soft">
                      <Icon icon="lucide:pencil" class="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent
                    ><p>Edit</p>
                    <TooltipArrow
                  /></TooltipContent>
                </TooltipRoot>

                <TooltipRoot>
                  <TooltipTrigger as-child>
                    <Button variant="soft">
                      <Icon icon="lucide:copy" class="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent
                    ><p>Duplicate</p>
                    <TooltipArrow
                  /></TooltipContent>
                </TooltipRoot>

                <TooltipRoot>
                  <TooltipTrigger as-child>
                    <Button variant="soft">
                      <Icon icon="lucide:share-2" class="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent
                    ><p>Share</p>
                    <TooltipArrow
                  /></TooltipContent>
                </TooltipRoot>

                <TooltipRoot>
                  <TooltipTrigger as-child>
                    <Button variant="soft" class="text-red-600">
                      <Icon icon="lucide:trash-2" class="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent
                    ><p>Delete</p>
                    <TooltipArrow
                  /></TooltipContent>
                </TooltipRoot>
              </div>
            </TooltipProvider>
          </div>

          <div class="flex items-center gap-4">
            <p class="text-sm font-medium w-32">With Shortcuts:</p>
            <TooltipProvider>
              <div class="flex gap-2">
                <TooltipRoot>
                  <TooltipTrigger as-child>
                    <Button variant="soft">
                      <Icon icon="lucide:save" class="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div class="flex items-center gap-2">
                      <span>Save</span>
                      <kbd class="px-1.5 py-0.5 text-xs bg-gray-200 rounded">⌘S</kbd>
                    </div>
                    <TooltipArrow />
                  </TooltipContent>
                </TooltipRoot>

                <TooltipRoot>
                  <TooltipTrigger as-child>
                    <Button variant="soft">
                      <Icon icon="lucide:search" class="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div class="flex items-center gap-2">
                      <span>Search</span>
                      <kbd class="px-1.5 py-0.5 text-xs bg-gray-200 rounded">⌘K</kbd>
                    </div>
                    <TooltipArrow />
                  </TooltipContent>
                </TooltipRoot>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </section>

      <!-- Avatar with Tooltip -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Avatar Interactions</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <TooltipProvider>
            <TooltipRoot>
              <TooltipTrigger as-child>
                <div class="cursor-pointer inline-block">
                  <AvatarRoot size="md" variant="ringed" ring-color="brand">
                    <AvatarImage src="https://github.com/favorodera.png" />
                    <AvatarFallback>FE</AvatarFallback>
                  </AvatarRoot>
                </div>
              </TooltipTrigger>
              <TooltipContent side="right" class="max-w-xs">
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-2">
                    <AvatarRoot size="sm">
                      <AvatarImage src="https://github.com/favorodera.png" />
                      <AvatarFallback>FE</AvatarFallback>
                    </AvatarRoot>
                    <div>
                      <p class="font-semibold text-sm">Favour Emeka</p>
                      <p class="text-xs text-gray-600">@favorodera</p>
                    </div>
                  </div>
                  <p class="text-xs text-gray-600">Software Engineer</p>
                  <div class="flex gap-3 text-xs pt-1">
                    <span><strong>1.2k</strong> followers</span>
                    <span><strong>324</strong> following</span>
                  </div>
                </div>
                <TooltipArrow />
              </TooltipContent>
            </TooltipRoot>
          </TooltipProvider>
        </div>
      </section>
    </div>
  </div>
</template>
