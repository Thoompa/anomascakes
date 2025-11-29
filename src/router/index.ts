import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cakes',
      name: 'cakes',
      component: () => import('../views/CakesView.vue')
    },
    {
      path: '/shorteats',
      name: 'shorteats',
      component: () => import('../views/ShortEatsView.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderView.vue')
    },
    {
      path: '/success',
      name: 'orderSuccess',
      component: () => import('../views/OrderSuccessView.vue')
    }
  ]
})

export default router
