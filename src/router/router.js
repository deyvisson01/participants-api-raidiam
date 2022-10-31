import VueRouter from 'vue-router'

import Login from '../pages/Login/Login.vue'

const router = new VueRouter({
    routes: [
      {
        path: '/login',
        component: Login
      },
      {
        path: '/',
        redirect: '/login'
      }
    ]
})
  
export default router