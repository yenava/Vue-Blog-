import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/bloglist'
    },
    {
      path:'/bloglist',
      name:'bloglist',
      component:() => import('@/views/BlogList')
    },
    {
      path: '/addblog',
      name: 'addblog',
      component: () => import('@/views/AddBlog.vue')
    },
    {
      path:'/singleblog/:id',
      name:'singleblog',
      component:() => import('@/views/SingleBlog.vue')
    },
    {
      path:'/editblog/:id',
      name:'editblog',
      component:() =>import('@/views/EditBlog.vue')
    },
    {
      path:'/works',
      name:'Works',
      component:()=>import('@/views/Works.vue')
    }
  ]
})
