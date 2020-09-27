import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { moduleInitializer } from './module'

Vue.config.productionTip = false

moduleInitializer(router, store)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')