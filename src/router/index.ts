import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home-view.vue')
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('@/views/button-view.vue')
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: () => import('@/views/check-box.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('@/views/card-view.vue')
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: () => import('@/views/accordion-view.vue')
    },
    {
      path: '/alert',
      name: 'alert',
      component: () => import('@/views/alert-view.vue')
    },
    {
      path: "/avatar",
      name: "avatar",
      component: () => import("@/views/avatar-view.vue"),
    },
    {
      path: "/badge",
      name: "badge",
      component: () => import("@/views/badge-view.vue"),
    },
    {
      path: "/breadcrumbs",
      name: "breadcrumbs",
      component: () => import("@/views/bread-crumbs.vue"),
    }
  ],
})

export default router
