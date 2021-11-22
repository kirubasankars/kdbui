import axios from "../axios"

export default {
    state : () => ({
        databases: [],
        all_docs: {},
        document: {},
        loading: false
    }),

    mutations: {
        SET_DATABASES(state, payload) {
            state.databases = payload
        },
        SET_DOCUMENTS (state, payload) {
            state.all_docs = payload
        },
        SET_DOCUMENT (state, payload) {
            state.document = payload
        },
        SET_LOADING_ON (state) {
            state.loading = true
        },
        SET_LOADING_OFF (state) {
            state.loading = false
        }
    },

    actions : {
        loadDatabases ({ commit }) {
            commit('SET_LOADING_ON')
            axios.get("/_cat/dbs").then((r) => {
                commit('SET_DATABASES', r.data)
                commit('SET_LOADING_OFF')
            })
        },
        loadAllDocuments ({ commit }, { db, page }) {
            commit('SET_LOADING_ON')
            axios.get(`/${db}/_all_docs?page=${page}`).then((r) => {
                commit('SET_DOCUMENTS', r.data)
                commit('SET_LOADING_OFF')
            })
        },
        loadDocument({ commit }, { db, doc_id }) {
            commit('SET_LOADING_ON')
            axios.get(`/${db}/${doc_id}`).then((r) => {
                commit('SET_DOCUMENT', r.data)
                commit('SET_LOADING_OFF')
            })
        }
    }
}