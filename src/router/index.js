import Vue from 'vue'
import Router from 'vue-router'


//一级路由
import Home from '@/components/Home'
import Login from '@/components/Login'
import Menu from '@/components/Menu'
import Register from '@/components/Register'
import Admin from '@/components/Admin'
import About from '@/components/About'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components:{
        default: Home,
      //  'history':History,
      //  'delivery':Delivery
      }
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/menu',
      name:'Menu',
      component:Menu
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/admin',
      name:'Admin',
      component:Admin
    },
    {
      path:'/about',
      name:'About',
      component:About
    },
  ],
  mode:'history',
})
