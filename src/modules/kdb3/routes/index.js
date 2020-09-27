
export default [
  {       
    path: '/kdb3/list/databases',
    name: 'kdb3.ListDatabases',
    component: () => import(/* webpackChunkName: "views" */ '../views/ListDatabases.vue')   
  },
  {       
    path: '/kdb3/list/database/:database',
    name: 'kdb3.ListAllDocuments',
    component: () => import(/* webpackChunkName: "views" */ '../views/ListAllDocuments.vue')   
  },
  {       
    path: '/kdb3/edit/:database/:id',
    name: 'kdb3.EditDocument',
    component: () => import(/* webpackChunkName: "views" */ '../views/EditDocument.vue')   
  }
]
