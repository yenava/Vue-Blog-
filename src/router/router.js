import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/bloglist'
    },
    {
      path:'/bloglist',
      name:'Bloglist',
      component:() => import('@/views/Article/BlogList.vue')
    },
    {
      path: '/addblog',
      name: 'Addblog',
      component: () => import('@/views/Article/AddBlog.vue')
    },
    {
      path:'/singleblog/:id',
      name:'Singleblog',
      component:() => import('@/views/Article/SingleBlog.vue')
    },
    {
      path:'/editblog/:id',
      name:'Editblog',
      component:() =>import('@/views/Article/EditBlog.vue')
    },
    {
      path:'/works',
      name:'Works',
      component:()=>import('@/views/Works.vue')
    },
    {
      path:'/login',
      name:'Login',
      component:()=>import('@/views/user/Login.vue')
    },
    {
      path:'/logined',
      name:'Logined',
      component:()=>import('@/views/user/Logined.vue')
    },
    {
      path:'/register',
      name:'Register',
      component:()=>import('@/views/user/Register.vue')
    },
  ]
})
