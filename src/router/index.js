import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {       
    path: '/',
    redirect: { name : 'ListDatabases' },
  },
  {       
    path: '/list/databases',
    name: 'ListDatabases',
    props: {
      model: 'database'
    },
    component: () => import(/* webpackChunkName: "views" */ '@/views/ListView.vue')      
  },  
  {       
    path: '/list/database/:database',
    name: 'ListDocuments',
    props: {
      model: 'document'
    },
    component: () => import(/* webpackChunkName: "views" */ '@/views/ListView.vue')      
  },  
  {       
    path: '/edit/:database/:docid',
    name: 'EditDocument',
    props: {
      model: 'document'
    },
    component: () => {      
      return import(/* webpackChunkName: "views" */ '@/views/EditView.vue')    
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
