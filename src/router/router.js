import VueRouter from 'vue-router'

import Login from '../pages/Login/Login.vue'
import HelloWorld from '../components/HelloWorld.vue'

const router = new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/HelloWorld',
            component: HelloWorld
        },
    ]
})
  
export default router