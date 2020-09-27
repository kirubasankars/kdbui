
export default [
  {       
    path: '/kdb3/list/databases',
    name: 'kdb3.ListDatabases',
    component: () => import(/* webpackChunkName: "kdb3" */ '../views/ListDatabases.vue')   
  },
  {       
    path: '/kdb3/list/database/:database',
    name: 'kdb3.ListAllDocuments',
    component: () => import(/* webpackChunkName: "kdb3" */ '../views/ListAllDocuments.vue')   
  },
  {       
    path: '/kdb3/edit/:database/:id',
    name: 'kdb3.EditDocument',
    component: () => import(/* webpackChunkName: "kdb3" */ '../views/EditDocument.vue')   
  },
  {       
    path: '/kdb3/database/:database/newdoc',
    name: 'kdb3.NewDocument',
    component: () => import(/* webpackChunkName: "kdb3" */ '../views/NewDocument.vue')   
  }
]
