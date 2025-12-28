<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import {
  ListRoot,
  ListHeader,
  ListItem,
  ListIcon,
  ListAvatar,
  ListContent,
  ListTitle,
  ListSubtitle,
  ListSlot,
  AvatarRoot,
  AvatarImage,
  AvatarFallback,
  Badge,
} from '@vifui/core'

const variants = ['default', 'outline', 'shadow', 'flat', 'divided'] as const
const sizes = ['sm', 'md', 'lg'] as const
const colors = ['brand', 'success', 'warning', 'danger', 'neutral'] as const

const selectedItem = ref<string | null>(null)
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <div class="max-w-5xl mx-auto space-y-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">List Component</h1>
        <p class="text-gray-600">
          Comprehensive testing of list variants, sizes, and interactive features
        </p>
      </div>

      <!-- Variants -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">List Variants</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="variant in variants" :key="variant">
              <p class="mb-3 text-sm font-medium capitalize text-gray-700">{{ variant }}</p>
              <ListRoot :variant="variant">
                <ListItem v-for="i in 3" :key="i">
                  <ListIcon><Icon icon="lucide:file" /></ListIcon>
                  <ListContent>
                    <ListTitle>Item {{ i }}</ListTitle>
                    <ListSubtitle>{{ variant }} variant</ListSubtitle>
                  </ListContent>
                </ListItem>
              </ListRoot>
            </div>
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Sizes</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid gap-6 md:grid-cols-3">
            <div v-for="size in sizes" :key="size">
              <p class="mb-3 text-sm font-medium uppercase text-gray-700">{{ size }}</p>
              <ListRoot :size="size" variant="outline">
                <ListItem v-for="i in 3" :key="i">
                  <ListIcon><Icon icon="lucide:circle" /></ListIcon>
                  <ListContent>
                    <ListTitle>{{ size.toUpperCase() }} Item</ListTitle>
                    <ListSubtitle>Size variant</ListSubtitle>
                  </ListContent>
                </ListItem>
              </ListRoot>
            </div>
          </div>
        </div>
      </section>

      <!-- With Headers -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">With Headers</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid gap-6 md:grid-cols-2">
            <div v-for="color in colors" :key="color">
              <ListRoot variant="outline">
                <ListHeader :color="color" class="capitalize">{{ color }} Header</ListHeader>
                <ListItem v-for="i in 3" :key="i">
                  <ListContent>
                    <ListTitle>Item {{ i }}</ListTitle>
                    <ListSubtitle>With {{ color }} header</ListSubtitle>
                  </ListContent>
                </ListItem>
              </ListRoot>
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive List -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Interactive & Hoverable</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="max-w-md">
            <ListRoot variant="shadow" hoverable>
              <ListHeader color="brand">Interactive List</ListHeader>
              <ListItem
                v-for="i in 5"
                :key="i"
                :active="selectedItem === `item-${i}`"
                @click="selectedItem = `item-${i}`"
              >
                <ListIcon>
                  <Icon
                    :icon="selectedItem === `item-${i}` ? 'lucide:check-circle' : 'lucide:circle'"
                  />
                </ListIcon>
                <ListContent>
                  <ListTitle>Interactive Item {{ i }}</ListTitle>
                  <ListSubtitle>Click to select</ListSubtitle>
                </ListContent>
                <ListSlot v-if="selectedItem === `item-${i}`">
                  <Badge color="brand" size="xs">Selected</Badge>
                </ListSlot>
              </ListItem>
            </ListRoot>
            <p class="mt-4 text-sm text-gray-600">
              Selected: <strong>{{ selectedItem || 'None' }}</strong>
            </p>
          </div>
        </div>
      </section>

      <!-- With Avatars -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">With Avatars</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="max-w-md">
            <ListRoot variant="flat">
              <ListHeader color="brand">Team Members</ListHeader>
              <ListItem v-for="i in 4" :key="i" hoverable>
                <ListAvatar>
                  <AvatarRoot size="md">
                    <AvatarImage :src="`https://i.pravatar.cc/150?img=${i}`" />
                    <AvatarFallback>U{{ i }}</AvatarFallback>
                  </AvatarRoot>
                </ListAvatar>
                <ListContent>
                  <ListTitle>User Name {{ i }}</ListTitle>
                  <ListSubtitle>user{{ i }}@example.com</ListSubtitle>
                </ListContent>
                <ListSlot>
                  <Badge :color="i % 2 === 0 ? 'success' : 'neutral'" size="xs">
                    {{ i % 2 === 0 ? 'Online' : 'Offline' }}
                  </Badge>
                </ListSlot>
              </ListItem>
            </ListRoot>
          </div>
        </div>
      </section>

      <!-- Real-World Examples -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Real-World Examples</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid gap-6 md:grid-cols-2">
            <!-- Settings Menu -->
            <ListRoot variant="flat">
              <ListHeader color="neutral">Settings</ListHeader>
              <ListItem hoverable>
                <ListIcon><Icon icon="lucide:user" /></ListIcon>
                <ListContent>
                  <ListTitle>Profile</ListTitle>
                  <ListSubtitle>Manage your profile</ListSubtitle>
                </ListContent>
                <ListSlot>
                  <Icon icon="lucide:chevron-right" class="text-gray-400" />
                </ListSlot>
              </ListItem>
              <ListItem hoverable>
                <ListIcon><Icon icon="lucide:bell" /></ListIcon>
                <ListContent>
                  <ListTitle>Notifications</ListTitle>
                  <ListSubtitle>Configure alerts</ListSubtitle>
                </ListContent>
                <ListSlot>
                  <Icon icon="lucide:chevron-right" class="text-gray-400" />
                </ListSlot>
              </ListItem>
              <ListItem hoverable>
                <ListIcon><Icon icon="lucide:lock" /></ListIcon>
                <ListContent>
                  <ListTitle>Security</ListTitle>
                  <ListSubtitle>Password and 2FA</ListSubtitle>
                </ListContent>
                <ListSlot>
                  <Badge color="warning" size="xs">Action Required</Badge>
                </ListSlot>
              </ListItem>
            </ListRoot>

            <!-- Messages -->
            <ListRoot variant="divided">
              <ListHeader color="brand">Messages</ListHeader>
              <ListItem v-for="i in 4" :key="i" hoverable>
                <ListAvatar>
                  <AvatarRoot size="md">
                    <AvatarImage :src="`https://i.pravatar.cc/150?img=${i + 20}`" />
                    <AvatarFallback>M{{ i }}</AvatarFallback>
                  </AvatarRoot>
                </ListAvatar>
                <ListContent>
                  <ListTitle>User {{ i }}</ListTitle>
                  <ListSubtitle>
                    {{ i === 1 ? 'Hey! How are you?' : 'Message preview...' }}
                  </ListSubtitle>
                </ListContent>
                <ListSlot>
                  <div class="flex flex-col items-end gap-1">
                    <span class="text-xs text-gray-500">{{ i }}m ago</span>
                    <Badge v-if="i <= 2" color="brand" size="xs">{{ i }}</Badge>
                  </div>
                </ListSlot>
              </ListItem>
            </ListRoot>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
