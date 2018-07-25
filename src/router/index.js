import Vue from 'vue'

import Homepage from '@/components/pages/HomePage'
import Trip from '@/components/Trip'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Blog from '@/components/Blog'
import AddBlog from '@/components/AddBlog'



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
      path: '/blog/detail/:id',
      name: 'Blog',
      component: Blog
    },
    {
      path:'/blog/add',
      name:'AddBlog',
      component:AddBlog
    }
  ]
})
