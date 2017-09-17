import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '../assets/config/env'

/*引入页面*/
import Vcollection from '@/views/collection/Vcollection'
import Vcollectionlist from '@/views/collection/VcollectionList'
import Vcolumn from '@/views/column/Vcolumn'
import Vcolumnlist from '@/views/column/VcolumnList'
import Vhome from '@/views/home/Vhome.vue'
import Vunlog from '@/views/home/Vunlog.vue'
import Vunloghome from '@/views/home/Vunloghome.vue'
import Vlogin from '@/views/login/Vlogin.vue'
import Vmycollection from '@/views/personalcenter/Vmycollection'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vunloghome',
      component: Vunloghome
    },
    {
      path: '/home',
      name: 'Vhome',
      component: Vhome,
      children:[
        {path:':id',component:Vcolumnlist}
      ],
      redirect:'/home/all'
    },
    {
      path: '/column',
      name: 'Vcolumn',
      component: Vcolumn,
      children:[
        {path:':id',component:Vcolumnlist}
      ],
      redirect:'/column/all'
    },
    {
      path: '/collection',
      name: 'Vcollection',
      component: Vcollection,
      children:[
        {path:':id',component:Vcollectionlist}
      ],
      redirect:'/collection/recommend'
    },
    {
      path: '/mycollection',
      name: 'Vmycollection',
      component: Vmycollection,
      
    },
    {
      path: '/login',
      name: 'Vlogin',
      component: Vlogin
    },
    {
      path: '/unlog',
      name: 'Vunlog',
      component: Vunlog
    },
    
  //   {
  //     path: '/login/',
  //     component: require('./pages/login.vue')
  // }
  ],
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
        return { x: 0, y: to.meta.savedPosition ||0}
    }
  }
})
