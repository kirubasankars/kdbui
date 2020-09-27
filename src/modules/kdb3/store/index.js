import axios from 'axios'

export default {    
    namespaced: true,
    state: {
        databases: [],
        documents: [],
        currentdocument: {}
    },
    mutations: {
        updateDatabases (state, list) {
          state.databases = list
        },
        updateDocuments (state, list) {
            state.documents = list
        },
        loadDocument (state, doc) {
            state.currentdocument = doc
        }
    },
    actions: {        
        loadDatabases({ commit }) {
            commit('loading', true, { root: true})
            return axios.get('/api/_all_dbs').then(response => {
                const data = []
                response.data.forEach(element => {
                    data.push({ id: element, items: [element] })
                });                
                commit('updateDatabases', data)                
                commit('loading', false, { root: true})                
            })
        },
        loadDocuments({ commit }, db) {
            commit('loading', true, { root: true})
            return axios.get(`/api/${db}/_all_docs`).then(response => {
                const data = []
                response.data.rows.forEach(element => {
                    data.push({ id: element['id'], items: [element["key"], element["value"], element["id"]] })
                });
                commit('updateDocuments', data)        
                commit('loading', false, { root: true})
            })
        },
        loadDocument( { commit }, params) {
            commit('loading', true, { root: true})
            return axios.get(`/api/${params.database}/${params.id}`).then(response => {                
                commit('loadDocument', response.data)                     
                commit('loading', false, { root: true})
            })
        },
        updateDocument( { commit, dispatch }, params) {
            commit('loading', true, { root: true})
            return axios.put(`/api/${params.database}/${params.id}`, params.doc).then(() => {                
                dispatch('loadDocument', params)
                commit('loading', false, { root: true})
            })
        },
        updateBreadcrumb({ commit }, data) {
            commit('updateBreadcrumb', data, { root: true})
        },
        updateToolbox({ commit }, data) {
            commit('updateToolbox', data, { root: true})
        }
    }
}