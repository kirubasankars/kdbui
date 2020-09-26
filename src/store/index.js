import Vue from 'vue'
import Vuex from 'vuex'
import views_config from './view_config'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        views_config: views_config,
        
        loading: false,    
        breadcrumb: [],
        toolbox: {
            left : []
        },
        list: {
            config: {},
            data: []
        },

        edit: {
            config: {},
            data: {}
        }
    },
    mutations: {
        UPDATE_BREADCRUMB(state, params) {
            let breadcrumb = state[params.view].config.breadcrumb            
            if (typeof(breadcrumb) === 'function') {
                state.breadcrumb = breadcrumb(params)
            } else {
                state.breadcrumb = breadcrumb
            }            
            if (params.id != undefined) {
                const lastItem = state.breadcrumb.slice(state.breadcrumb.length - 1, state.breadcrumb.length)                   
                if (lastItem) {
                    lastItem[0].title = params.id
                }
            }
        },
        LOADING (state, show) {
            state.loading = show;
        },
        UPDATE_VIEW_CONFIG(state, params) {
            state[params.view].config = state.views_config[params.model].views[params.view]
            state.toolbox.left = state[params.view].config.toolbox.left
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
            commit('LOADING', true)                        
            const config = state.views_config[params.model].views[params.view]
            
            commit('UPDATE_VIEW_CONFIG', params)
            commit('UPDATE_BREADCRUMB', params)                        
            
            config.load_data(params).then((data) => {
                commit('LOAD_DATA', { params, data })
                commit('LOADING', false)
            });
        }
    }
})
