import Vue from 'vue'
import Router from 'vue-router'

import Databases from './views/Databases.vue'
import VerifyInstall from './views/VerifyInstall.vue'
import DatabaseView from './views/DatabaseView.vue'
import Document from './views/Document.vue'
import DDocument from './views/DDocument.vue'
import NewDatabase from './views/NewDatabase.vue'

import TopBar from './components/TopBar.vue'
import DatabaseTopBar from './components/DatabaseTopBar.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'databases',
      components: {
        default: Databases,
        topBar: TopBar
      }
    },
    {
      path: '/newdatabase',
      name: 'newdatabase',
      components: {
        default: NewDatabase,
        topBar: TopBar
      }
    },
    {
      path: '/database/:db/_all_docs',
      name: 'all_docs',
      components: {
        default: DatabaseView,
        topBar: DatabaseTopBar
      }
    },
    {
      path: '/database/:db/_design/:ddoc_id',
      name: 'ddocument',
      components: {
        default: DDocument,
        topBar: DatabaseTopBar
      }
    },
    {
      path: '/database/:db/:doc_id',
      name: 'document',
      components: {
        default: Document,
        topBar: DatabaseTopBar
      }
    },
    {
      path: '/verify',
      name: 'verifyinstall',
      components: {
        default: VerifyInstall,
        topBar: TopBar
      }
    }
  ]
})
