import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        views_config: {
            'databases': {
                model: 'databases',
                views: {
                    list: {
                        selectable: false,
                        columns: [
                            { name: 'Name' }
                        ],
                        itemClicked: function (row) {                            
                            this.$router.push({ name: 'List2', params: { model: 'database', id: row.id } })
                        },
                        breadcrumb: [{ title: "Databases", name: 'List1', params: { model: 'databases' } }],
                        load_data: function() {
                            return axios.get('/api/_all_dbs').then(response => {
                                const data = []
                                response.data.forEach(element => {
                                    data.push({ id: element, items: [element] })
                                });
                                return data
                            })
                        }
                    }
                }
            },
            'database': {                                         
                model : 'database',
                views : {
                    list : {
                        selectable: true,
                        columns: [
                            { name: 'Key', width: '40%'},
                            { name: 'Value', width: '20%'},
                            { name: 'Id', width: '40%'}
                        ],                        
                        breadcrumb : [{title: "Databases", name: 'List1', params: { model: 'databases'}}, {title: 'id'}],
                        load_data: function(params) {
                            return axios.get(`/api/${params.id}/_all_docs`).then(response => {
                                const data = []
                                response.data.rows.forEach(element => {
                                    data.push({ id: element['id'], items: [element["key"], element["value"], element["id"]] })
                                });
                                return data
                            })
                        }
                    }
                }
            }
        },
        breadcrumb: [],
        list: {
            config: {},
            data: []
        }
    },
    mutations: {
        UPDATE_BREADCRUMB(state, params) {
            state.breadcrumb = state[params.view].config.breadcrumb
            if (params.id != undefined) {
                const lastItem = state.breadcrumb.slice(state.breadcrumb.length - 1, state.breadcrumb.length)                   
                if (lastItem) {
                    lastItem[0].title = params.id
                }
            }
        },
        UPDATE_VIEW_CONFIG(state, params) {
            state[params.view].config = state.views_config[params.model].views[params.view]
        },
        LOAD_DATA(state, mu) {
            state[mu.params.view].data = mu.data
        }
    },
    actions: {
        UPDATE_VIEWS_CONFIG({ commit }, config) {
            commit('UPDATE_VIEWS_CONFIG', config)
        },
        LOAD_DATA({ commit, state }, params) {  
            // params : {model, view}
            const config = state.views_config[params.model].views[params.view]
            
            commit('UPDATE_VIEW_CONFIG', params)            
            commit('UPDATE_BREADCRUMB', params)            
            
            config.load_data(params).then((data) => {
                commit('LOAD_DATA', { params, data })
            })            
        }
    }
})
