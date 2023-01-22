import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import('../views/Home.vue')
    },
  

]
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;