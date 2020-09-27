import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {        
        loading: false,    
        breadcrumb: [],
        toolbox: {
            left : []
        }
    },
    mutations: {
        updateToolbox (state, data) {
            state.toolbox = data
        },
        updateBreadcrumb(state, data) {
            state.breadcrumb = data
        },
        loading (state, show) {
            if (!show) {
                setTimeout(() =>{
                    state.loading = show;
                }, 100)
            } else {
                state.loading = show;
            }
            
        }   
    },
    actions: {
        updateBreadcrumb ({ commit }, data) {
            commit('updateBreadcrumb', data)
        }
    }
})
