import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { filters2qs } from '../assets/filters-utils'

Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    modules: {},
    state: {
      application: window.APPLICATION,
      data: null,
    },
    getters: {
      config (state) {
        return state.application && state.application.configuration
      },
    },
    mutations: {
      setAny (state, params) {
        Object.assign(state, params)
      },
    },
    actions: {
      init ({ state, dispatch }) {
        // some initial data fetching maybe ?
      },
      async fetchData ({ state, getters, commit, dispatch }) {
        const params = {
          qs: filters2qs(getters.config.staticFilters || []),
          finalizedAt: getters.config.datasets[0].finalizedAt, // for better caching
        }

        try {
          const { data } = await axios.get(getters.config.datasets[0].href + '/lines', { params })
          commit('setAny', { data })
        } catch (err) {
          dispatch('setError', (err.response && err.response.data) || err.message)
        }
      },
      async setError ({ state }, error) {
        console.error('report error', error)
        try {
          axios.post(state.application.href + '/error', { message: error.message || error })
        } catch (err) {
          console.log('Failed to report error', err)
        }
      },
    },
  })
}
