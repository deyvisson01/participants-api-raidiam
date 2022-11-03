import VueRouter from 'vue-router'

import Login from '../pages/Login/Login.vue'
import HelloWorld from '../pages/Home/HelloWorld.vue'
import Charts from '../pages/Charts/Charts.vue'

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
        {
            path: '/Charts',
            component: Charts
        },
    ]
})
  
export default router