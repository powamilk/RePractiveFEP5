import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetaiForm from '@/views/DetaiForm.vue'
import AddForm from '@/views/AddForm.vue'
import EditForm from '@/components/EditForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetaiForm
    },
    {
      path: '/create',
      name: 'create',
      component: AddForm
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditForm
    }
  ]
})

export default router
