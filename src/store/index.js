import Vue from 'vue'
import Vuex, { mapState } from 'vuex'
import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

/*
const store = new Vuex.Store({
  state: {
  },
  mutations: {
      incfunc(state) {
          state.count++;
      }
  },
  actions: {
  },
  modules: {
  }
})
*/

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    /*
    mutations: {
      incfunc(state) {
          state.count++;
      }
    }
    */
})

export default store

