import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { filters2qs } from '@data-fair/components-app/filters/filters'

Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    modules: {},
    state: {
      application: window.APPLICATION,
      data: null
    },
    getters: {
      config (state) {
        return state.application && state.application.configuration
      },
      dataset (state, getters) {
        return getters.config &&
          getters.config.datasets &&
          getters.config.datasets[0]
      }
    },
    mutations: {
      setAny (state, params) {
        Object.assign(state, params)
      }
    },
    actions: {
      init ({ dispatch }) {
        dispatch('fetchData')
      },
      async fetchData ({ getters, commit, dispatch }) {
        const params = {
          qs: filters2qs(getters.config.staticFilters || []),
          finalizedAt: getters.dataset.finalizedAt // for better caching
        }

        try {
          const { data } = await axios.get(getters.dataset.href + '/lines', { params })
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
      }
    }
  })
}
