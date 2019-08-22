export default{
    path:'/Article',
    component:()=>import(),
    children:[
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
}