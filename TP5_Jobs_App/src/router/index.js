import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import jobdetails  from '@/views/jobdetailsView.vue'
import EditJobView from '@/views/EditJobView.vue'
import AddJobView from '@/views/AddJobView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  } ,

  {
    path: '/details/:id',
    name: 'details',
    component: jobdetails
  } ,

  {
    path: '/jobs/:id',
    name: 'edit',
    component: EditJobView
  },
  {
    path: '/add',
    name: 'add',
    component: AddJobView
  } ,

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
