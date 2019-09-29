import Vue from 'vue'
import Router from 'vue-router'
import Databases from './views/Databases.vue'
import VerifyInstall from './views/VerifyInstall.vue'
import TopBar from './components/TopBar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/verify',
      name: 'verifyinstall',
      components: {
        default: VerifyInstall,
        topBar: TopBar
      }
    }
  ]
})
