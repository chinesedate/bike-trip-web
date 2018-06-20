import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/pages/HomePage'
import Trip from '@/components/Trip'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
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
      name: 'SignIn',
      component: SignIn
    },
    {
      path:'/join',
      name:'SignUp',
      component:SignUp
    },
    {
      path: '/blog/:id',
      name: 'Blog',
      component: Blog
    }
  ]
})
