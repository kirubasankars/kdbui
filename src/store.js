import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dbs_info: [],
    docs_info: []
  },
  mutations: {
    SET_DATABASES_INFO(state, data) {
      state.dbs_info = data
    }
  },
  actions: {
    fetchDatabases(context) {
      context.commit('SET_DATABASES_INFO', [{ name: "testDB", docCount: 2 },{ name: "devDB", docCount: 10 }])
    }
  },
  getters: {
    getDatabases(state) {
      return state.dbs_info
    }
  }
})
