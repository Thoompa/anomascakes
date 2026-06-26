import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { features } from '@/config/features'

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
      component: () => import('../views/Cakes/CakesLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Cakes/CakesIndexView.vue')
        },
        {
          path: 'small-cakes',
          component: () => import('../views/Cakes/SmallCakesView.vue')
        },
        {
          path: 'speciality-cakes',
          component: () => import('../views/Cakes/SpecialityCakesView.vue')
        },
        {
          path: 'cupcakes',
          component: () => import('../views/Cakes/CupcakesView.vue')
        },
        {
          path: 'bento-cake-boxes',
          component: () => import('../views/Cakes/BentoCakeBoxesView.vue')
        },
      ]
    },
    {
      path: '/shorteats',
      name: 'shorteats',
      component: () => import('../views/ShortEatsView.vue'),
      beforeEnter: () => {
        if (!features.shortEatsEnabled) {
          return { name: 'home' }
        }

        return true
      }
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
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
