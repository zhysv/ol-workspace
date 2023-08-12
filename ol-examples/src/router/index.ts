import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home-page/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomeView
    },
    {
      path: '/init-map',
      name: 'init-map',
      component: () => import('../views/init-map/index.vue')
    }
  ]
})

export default router
