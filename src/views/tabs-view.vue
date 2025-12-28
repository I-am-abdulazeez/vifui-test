<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from '@vifui/core'

const colors = ['neutral', 'brand', 'success', 'warning', 'danger'] as const
const variants = ['pill', 'link'] as const
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <div class="max-w-5xl mx-auto space-y-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Tabs Component</h1>
        <p class="text-gray-600">Comprehensive testing of tab variants, colors, and orientations</p>
      </div>

      <!-- Variants -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Tab Variants</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-8">
          <div v-for="variant in variants" :key="variant">
            <p class="mb-4 text-sm font-medium capitalize text-gray-700">{{ variant }} Variant</p>
            <TabsRoot default-value="tab1">
              <TabsList>
                <TabsIndicator />
                <TabsTrigger value="tab1" :variant="variant" color="brand">Tab One</TabsTrigger>
                <TabsTrigger value="tab2" :variant="variant" color="brand">Tab Two</TabsTrigger>
                <TabsTrigger value="tab3" :variant="variant" color="brand">Tab Three</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1"><p class="mt-4">Content for Tab One</p></TabsContent>
              <TabsContent value="tab2"><p class="mt-4">Content for Tab Two</p></TabsContent>
              <TabsContent value="tab3"><p class="mt-4">Content for Tab Three</p></TabsContent>
            </TabsRoot>
          </div>
        </div>
      </section>

      <!-- Colors -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Colors (Pill Variant)</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div v-for="color in colors" :key="color">
            <p class="mb-3 text-sm font-medium capitalize text-gray-700">{{ color }}</p>
            <TabsRoot default-value="tab1">
              <TabsList>
                <TabsIndicator />
                <TabsTrigger value="tab1" :color="color" variant="pill">First</TabsTrigger>
                <TabsTrigger value="tab2" :color="color" variant="pill">Second</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1"><p class="mt-4">First tab content</p></TabsContent>
              <TabsContent value="tab2"><p class="mt-4">Second tab content</p></TabsContent>
            </TabsRoot>
          </div>
        </div>
      </section>

      <!-- With Icons -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">With Icons</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <TabsRoot default-value="account">
            <TabsList>
              <TabsIndicator />
              <TabsTrigger value="account" variant="pill" color="brand">
                <Icon icon="lucide:user" class="h-4 w-4" />
                Account
              </TabsTrigger>
              <TabsTrigger value="security" variant="pill" color="brand">
                <Icon icon="lucide:shield" class="h-4 w-4" />
                Security
              </TabsTrigger>
              <TabsTrigger value="settings" variant="pill" color="brand">
                <Icon icon="lucide:settings" class="h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account"><p class="mt-4">Account settings content</p></TabsContent>
            <TabsContent value="security"
              ><p class="mt-4">Security settings content</p></TabsContent
            >
            <TabsContent value="settings"><p class="mt-4">General settings content</p></TabsContent>
          </TabsRoot>
        </div>
      </section>

      <!-- Vertical Orientation -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Vertical Orientation</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <TabsRoot default-value="general" orientation="vertical" class="flex gap-6">
            <TabsList>
              <TabsIndicator />
              <TabsTrigger value="general" variant="pill" color="brand">General</TabsTrigger>
              <TabsTrigger value="billing" variant="pill" color="brand">Billing</TabsTrigger>
              <TabsTrigger value="team" variant="pill" color="brand">Team</TabsTrigger>
            </TabsList>
            <div class="flex-1">
              <TabsContent value="general"><p>General settings and preferences</p></TabsContent>
              <TabsContent value="billing"><p>Billing and subscription management</p></TabsContent>
              <TabsContent value="team"><p>Team members and permissions</p></TabsContent>
            </div>
          </TabsRoot>
        </div>
      </section>

      <!-- Real-World Examples -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Real-World Examples</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-8">
          <!-- Dashboard -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Project Settings</h3>
            <TabsRoot default-value="general">
              <TabsList class="border-b">
                <TabsIndicator />
                <TabsTrigger value="general" variant="link" color="brand">General</TabsTrigger>
                <TabsTrigger value="members" variant="link" color="brand">Members</TabsTrigger>
                <TabsTrigger value="billing" variant="link" color="brand">Billing</TabsTrigger>
                <TabsTrigger value="advanced" variant="link" color="brand" disabled>
                  <Icon icon="lucide:lock" class="h-3.5 w-3.5" />
                  Advanced (Pro)
                </TabsTrigger>
              </TabsList>
              <TabsContent value="general" class="py-6">
                <p class="text-sm text-gray-600">Manage basic project information here</p>
              </TabsContent>
              <TabsContent value="members" class="py-6">
                <p class="text-sm text-gray-600">Invite and manage team members</p>
              </TabsContent>
              <TabsContent value="billing" class="py-6">
                <p class="text-sm text-gray-600">Review subscription and payments</p>
              </TabsContent>
            </TabsRoot>
          </div>

          <!-- Task Filter -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Task Explorer</h3>
            <TabsRoot default-value="all">
              <TabsList>
                <TabsIndicator />
                <TabsTrigger value="all" variant="pill" color="neutral">All Tasks</TabsTrigger>
                <TabsTrigger value="active" variant="pill" color="brand">In Progress</TabsTrigger>
                <TabsTrigger value="completed" variant="pill" color="success"
                  >Completed</TabsTrigger
                >
                <TabsTrigger value="issues" variant="pill" color="danger">Issues</TabsTrigger>
              </TabsList>
              <TabsContent value="all"
                ><p class="mt-4 text-sm text-gray-600">All tasks</p></TabsContent
              >
              <TabsContent value="active"
                ><p class="mt-4 text-sm text-blue-600">Tasks in progress</p></TabsContent
              >
              <TabsContent value="completed"
                ><p class="mt-4 text-sm text-green-600">Completed tasks</p></TabsContent
              >
              <TabsContent value="issues"
                ><p class="mt-4 text-sm text-red-600">Tasks with issues</p></TabsContent
              >
            </TabsRoot>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
