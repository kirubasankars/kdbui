import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

var HOST = window.location.origin + (process.env.NODE_ENV === 'production' ? '' : '/api');

export default new Vuex.Store({
  state: {
    dbs_info: [],
    view: [],
    document: {},
    database: ''
  },
  mutations: {
    SET_DATABASES_INFO(state, data) {
      state.dbs_info = data
    },
    SET_VIEW_DATA(state, data) {
      state.view = data
    },
    SET_DOCUMENT(state, data) {
      state.document = data
    },
    SET_DATABASE(state, data) {
      state.database = data
    }
  },
  actions: {
    fetchDatabases(context) {
      axios.get(HOST + "/_all_dbs").then(function(rs) {
        var promises = []  
        for (var x in rs.data) {
          promises.push(axios.get(HOST + "/" + rs.data[x]))
        }
        axios.all(promises).then(function(values) {
          var data = []
          for (var x in values) {
            data.push(values[x].data)
          }
          context.commit('SET_DATABASES_INFO', data)
        })
      });
    },
    fetchView(context, db) {
      context.commit('SET_VIEW_DATA', [])
      axios.get(HOST + "/" + db + "/_all_docs").then(function(rs) {
        context.commit('SET_VIEW_DATA', rs.data.rows)
      })
    },
    fetchDocument(context, params) {
      context.commit('SET_DOCUMENT', {})
      axios.get(HOST + "/" + params.db + "/" + params.doc_id).then(function(rs) {
        context.commit('SET_DOCUMENT', rs.data)
      })
    },
    saveDocument(context, o) {
      axios.post(HOST + "/" + o.db, o.doc).then(function(rs) {
        axios.get(HOST + "/" + o.db + "/" + rs.data._id).then(function(rs) {
          context.commit('SET_DOCUMENT', rs.data)
        })
      })
    },
    createDatabase(context, name) {
      axios.put(HOST + "/" + name).then(function(rs) {
        if (rs.data.ok) {
          context.commit('SET_DATABASE', name)
        }
      })
    },
    deleteDatabase(context, name) {
      axios.delete(HOST + "/" + name).then(function(rs) {
        if (rs.data.ok) {
          context.commit('SET_DATABASE', '')
        }
      })
    },
    setDatabase(context,name) {
      context.commit('SET_DATABASE', name)
    },
    newDocument(context) {
      context.commit('SET_DOCUMENT', {})
    }
  },
  getters: {
    listDatabases(state) {
      return state.dbs_info
    },
    listViewItems(state) {
      return state.view
    },
    getDocument(state) {
      return state.document
    },
    getDatabase(state) {
      return state.database
    }
  }
})
