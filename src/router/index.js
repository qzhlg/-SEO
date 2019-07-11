import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component:()=>import ('../components/home')
    },{
      path:'/shopcar',
      name:"shopcar",
      component:()=>import ('../components/shopcar')
    },{
      path:'/list',
      name:"list",
      component:()=>import ('../components/list')
    },{
      path: '/mine',
      name: 'mine',
      component:()=>import ('../components/mine')
    },{
      path: '/more',
      name: 'more',
      component:()=>import ('../components/more')
    },{
      path:'/login',
      name:'login',
      component:()=>import ('../components/login'),
      beforeEnter:(to,from,next)=>{
        if(sessionStorage.token){
          next()
        }else{
          window.location.href='/mine'
        }
      }
    },
    {
      path:"/home/detail",
      name:'detail',
      component:()=>import ('../components/home/detail')
    }
  ]
})
