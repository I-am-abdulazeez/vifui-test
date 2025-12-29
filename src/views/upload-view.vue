<script setup lang="ts">
import { ref } from 'vue'
import { UploadRoot } from '@vifui/core'
import type { UploadFile } from '@vifui/core'

const variants = ['grid', 'list', 'single'] as const
const sizes = ['sm', 'md', 'lg'] as const

// Basic upload
const basicFiles = ref<UploadFile[]>([])

// Controlled upload
const controlledFiles = ref<UploadFile[]>([])

// With validation
const validatedFiles = ref<UploadFile[]>([])
const handleBeforeUpload = (files: File[]) => {
  const maxSize = 2 * 1024 * 1024 // 2MB
  const oversized = files.filter((f) => f.size > maxSize)

  if (oversized.length > 0) {
    alert(`Files too large: ${oversized.map((f) => f.name).join(', ')}`)
    return false
  }
  return true
}

// Custom upload handler
const customUploadFiles = ref<UploadFile[]>([])
const handleCustomUpload = async (file: UploadFile) => {
  // Simulate API call
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      // Randomly succeed or fail for demo
      if (Math.random() > 0.3) {
        // Return a mock backend URL
        resolve(`https://example.com/uploads/${file.id}.jpg`)
      } else {
        reject(new Error('Upload failed - server error'))
      }
    }, 2000)
  })
}

// Backend URL example
const backendFiles = ref<UploadFile[]>([])
const handleBackendUpload = async (file: UploadFile): Promise<string> => {
  // Simulate uploading to S3/backend
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Return the uploaded URL
  return `https://cdn.example.com/images/${file.name}`
}

// Pre-populated files from backend
const existingFiles = ref<UploadFile[]>([
  {
    id: 'existing-1',
    name: 'profile-photo.jpg',
    size: 245760,
    type: 'image/jpeg',
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    preview: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    status: 'success',
    progress: 100,
  },
  {
    id: 'existing-2',
    name: 'cover-image.jpg',
    size: 512000,
    type: 'image/jpeg',
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    preview: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    status: 'success',
    progress: 100,
  },
])

// Avatar upload
const avatarFile = ref<UploadFile[]>([])

// Event handlers
const handleChange = (files: UploadFile[]) => {
  console.log('Files changed:', files)
}

const handleRemove = (file: UploadFile) => {
  console.log('File removed:', file.name)
}
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <div class="max-w-6xl mx-auto space-y-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Upload Component</h1>
        <p class="text-gray-600">
          Comprehensive testing of upload variants, sizes, validations, and backend integration
        </p>
      </div>

      <!-- Basic Usage -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Basic Usage</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <UploadRoot
            v-model="basicFiles"
            accept="image/*"
            :max-files="5"
            @change="handleChange"
            @remove="handleRemove"
          />
          <div v-if="basicFiles.length > 0" class="mt-4">
            <p class="text-sm font-medium text-gray-900">Files uploaded: {{ basicFiles.length }}</p>
          </div>
        </div>
      </section>

      <!-- Variants -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Variants</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6 space-y-8">
          <div v-for="variant in variants" :key="variant">
            <p class="mb-4 text-sm font-semibold capitalize text-gray-700">{{ variant }} Layout</p>
            <UploadRoot
              :variant="variant"
              accept="image/*"
              :multiple="variant !== 'single'"
              :text="variant === 'single' ? 'Upload Avatar' : undefined"
            />
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Sizes</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid gap-8 md:grid-cols-3">
            <div v-for="size in sizes" :key="size">
              <p class="mb-4 text-sm font-semibold uppercase text-gray-700">{{ size }} Size</p>
              <UploadRoot :size="size" accept="image/*" />
            </div>
          </div>
        </div>
      </section>

      <!-- Controlled Mode -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Controlled Mode</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="mb-4 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">
              Uploaded: {{ controlledFiles.length }} files
            </p>
            <button
              v-if="controlledFiles.length > 0"
              @click="controlledFiles = []"
              class="rounded px-3 py-1.5 text-xs bg-red-600 text-white hover:bg-red-700"
            >
              Clear All
            </button>
          </div>
          <UploadRoot v-model="controlledFiles" accept="image/*" />
        </div>
      </section>

      <!-- With Validation -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">With Validation</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="mb-4 rounded-lg bg-gray-50 p-4">
            <p class="text-sm font-medium text-gray-900 mb-2">Validation Rules:</p>
            <ul class="text-xs text-gray-600 space-y-1">
              <li>• Only images allowed</li>
              <li>• Maximum file size: 2MB</li>
              <li>• Maximum 3 files</li>
            </ul>
          </div>
          <UploadRoot
            v-model="validatedFiles"
            accept="image/*"
            :max-size="2 * 1024 * 1024"
            :max-files="3"
            :before-upload="handleBeforeUpload"
            hint="Max 2MB per file"
          />
        </div>
      </section>

      <!-- Custom Upload Handler -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Custom Upload Handler with Backend URL</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="mb-4 rounded-lg border border-gray-200 p-4">
            <p class="text-xs text-gray-600 mb-2">
              This example shows uploading to a backend that returns a URL. The component will
              display the backend URL after successful upload.
            </p>
            <p class="text-xs text-gray-600">
              Files are "uploaded" with a custom handler. Some may randomly fail to demonstrate
              error handling.
            </p>
          </div>
          <UploadRoot
            v-model="customUploadFiles"
            accept="image/*"
            :on-upload="handleCustomUpload"
            text="Upload with custom handler"
          />
        </div>
      </section>

      <!-- Backend Integration Example -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Backend Integration (Returns URL)</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="mb-4 rounded-lg bg-blue-50 p-4">
            <p class="text-sm font-medium text-gray-900 mb-2">Real-World Backend Integration</p>
            <p class="text-xs text-gray-600">
              This demonstrates uploading to a backend (S3, CDN, etc.) that returns a URL. The
              component automatically switches from local preview to the backend URL.
            </p>
          </div>
          <UploadRoot v-model="backendFiles" accept="image/*" :on-upload="handleBackendUpload" />
          <div v-if="backendFiles.length > 0" class="mt-4 space-y-2">
            <p class="text-sm font-semibold text-gray-900">Uploaded URLs:</p>
            <div
              v-for="file in backendFiles.filter((f) => f.url)"
              :key="file.id"
              class="rounded bg-gray-50 p-2 text-xs font-mono text-gray-600 truncate"
            >
              {{ file.url }}
            </div>
          </div>
        </div>
      </section>

      <!-- Pre-populated Files (Edit Form) -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Pre-populated Files (Edit Form)</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="mb-4 rounded-lg border border-gray-200 p-4">
            <p class="text-sm font-medium text-gray-900 mb-2">Edit Form with Existing Files</p>
            <p class="text-xs text-gray-600">
              When editing existing records, you can pre-populate the upload component with files
              that are already on your backend using the
              <code class="px-1 py-0.5 rounded bg-gray-100">defaultFiles</code> prop.
            </p>
          </div>
          <UploadRoot v-model="existingFiles" accept="image/*" text="Add more images" />
        </div>
      </section>

      <!-- Without Preview -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Without Preview (Document Upload)</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="mb-4 rounded-lg bg-gray-50 p-4">
            <p class="text-xs text-gray-600">
              For large files or when preview isn't needed, disable it with
              <code class="px-1 py-0.5 rounded bg-gray-200">showPreview: false</code>. This skips
              FileReader processing for better performance.
            </p>
          </div>
          <UploadRoot
            accept=".pdf,.doc,.docx,.zip"
            :show-preview="false"
            text="Upload Documents (No Preview)"
            hint="PDF, DOC, DOCX, ZIP"
          />
        </div>
      </section>

      <!-- Avatar Upload (Single) -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Avatar Upload</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="flex flex-col items-center gap-4 max-w-md mx-auto">
            <h3 class="text-base font-semibold text-gray-900">Profile Picture</h3>
            <UploadRoot
              v-model="avatarFile"
              variant="single"
              accept="image/*"
              text="Upload"
              hint="JPG, PNG, or GIF"
            />
            <p class="text-xs text-gray-600 text-center">
              Click the circle to upload your profile picture
            </p>
          </div>
        </div>
      </section>

      <!-- File Types -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Different File Types</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="grid gap-8 md:grid-cols-2">
            <!-- Images only -->
            <div>
              <p class="mb-4 text-sm font-semibold text-gray-700">Images Only</p>
              <UploadRoot accept="image/*" text="Upload Images" hint="JPG, PNG, GIF" />
            </div>

            <!-- Documents -->
            <div>
              <p class="mb-4 text-sm font-semibold text-gray-700">Documents</p>
              <UploadRoot accept=".pdf,.doc,.docx" text="Upload Documents" hint="PDF, DOC, DOCX" />
            </div>

            <!-- Any file -->
            <div>
              <p class="mb-4 text-sm font-semibold text-gray-700">Any File Type</p>
              <UploadRoot text="Upload Any File" hint="No restrictions" />
            </div>

            <!-- Multiple types -->
            <div>
              <p class="mb-4 text-sm font-semibold text-gray-700">Mixed Types</p>
              <UploadRoot
                accept="image/*,.pdf,.doc,.docx,.zip"
                text="Upload Files"
                hint="Images, Documents, Archives"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- List Variant with Documents -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">List Variant (Documents)</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <UploadRoot
            variant="list"
            accept=".pdf,.doc,.docx,.txt"
            text="Upload Documents"
            hint="List view is great for non-image files"
          />
        </div>
      </section>

      <!-- Disabled State -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Disabled State</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="max-w-md mx-auto">
            <UploadRoot disabled text="Upload Disabled" hint="Cannot upload files" />
          </div>
        </div>
      </section>

      <!-- Custom Slots -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Custom Upload Icon</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="max-w-md mx-auto">
            <UploadRoot accept="image/*" text="Custom Icon" hint="Using custom SVG icon">
              <template #icon>
                <svg
                  class="w-12 h-12 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </template>
            </UploadRoot>
          </div>
        </div>
      </section>

      <!-- Real World Example -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Real World: Image Gallery Upload</h2>
        <div class="bg-white rounded-lg border border-gray-200 p-6">
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Upload Gallery Images</h3>
            <p class="text-sm text-gray-600">
              Upload images for your product gallery. You can upload up to 10 images.
            </p>
          </div>

          <UploadRoot
            variant="grid"
            accept="image/jpeg,image/png,image/webp"
            :max-size="5 * 1024 * 1024"
            :max-files="10"
            text="Add Images"
            hint="JPG, PNG, or WebP (max 5MB each)"
          />

          <div class="mt-4 rounded-lg bg-gray-50 p-4">
            <p class="text-xs text-gray-600">
              💡 Tip: You can drag and drop images directly onto the upload zone
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
