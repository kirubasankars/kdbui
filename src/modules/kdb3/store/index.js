import axios from 'axios'

let prefix = process.env.NODE_ENV === 'production' ? '' : '/api';

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
            return axios.get(`${prefix}/_all_dbs`).then(response => {
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
            return axios.get(`${prefix}/${db}/_all_docs`).then(response => {
                const data = []
                response.data.rows.forEach(element => {
                    data.push({ id: element['id'], items: [element["key"], element["value"], element["id"]] })
                });
                commit('updateDocuments', data)        
                commit('loading', false, { root: true})
            })
        },
        loadDocument( { commit }, params) {
            if (params.id) {
                commit('loading', true, { root: true})
                return axios.get(`${prefix}/${params.database}/${params.id}`).then(response => {                
                    commit('loadDocument', response.data)                     
                    commit('loading', false, { root: true})
                })
            }
        },
        createDocument( { commit, dispatch }, params) {            
            commit('loading', true, { root: true})
            return axios.post(`${prefix}/${params.database}`, params.doc).then((r) => {                
                params.id = r.data._id
                dispatch('loadDocument', params)
                commit('loading', false, { root: true})
            })
        },
        updateDocument( { commit, dispatch }, params) {
            commit('loading', true, { root: true})
            return axios.put(`${prefix}/${params.database}/${params.id}`, params.doc).then(() => {                
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