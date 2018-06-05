import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Trip from '@/components/Trip'
import Login from '@/components/Login'
import VueResource from 'vue-resource'
import Blog from '@/components/Blog'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/trip',
      name: 'Trip',
      component: Trip
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/blog/:id',
      name: 'Blog',
      component: Blog
    }
  ]
})
