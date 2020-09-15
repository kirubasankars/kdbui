import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {   
    path: '/', 
    redirect: '/list/databases'
  },
  {
    path: '/list/:model',
    name: 'List1',
    component: () => import(/* webpackChunkName: "views" */ '../views/ListView.vue')
  },
  {
    path: '/list/:model/:id',
    name: 'List2',
    component: () => import(/* webpackChunkName: "views" */ '../views/ListView.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "views" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
