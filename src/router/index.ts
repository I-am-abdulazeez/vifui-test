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
    }
  ],
})

export default router
