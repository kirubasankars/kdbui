import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Api from './store/api'

const api = new Api(router, store)

Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')