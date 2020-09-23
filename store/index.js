import Vue from 'vue'

/**
 * M(utation)T(ype)s
 */
const MTs = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_COUNT: 'SET_COUNT',
  REQUEST_URL: 'REQUEST_URL',
  SET_HIDE_LOADING: 'SET_HIDE_LOADING',
}

export const namespaced = false

export const state = () => ({
  loading: false,
  hideLoading: false,
  counter: 0,
  error: null,
  requestUrl: null,
})

export const getters = {
  isLoading: (state) => state.loading,
  hideLoading: (state) => state.hideLoading,
  counter: (state) => state.counter,
  error: (state) => state.error,
  requestUrl: (state) => state.requestUrl,
}

export const actions = {
  setLoading({ state, commit }, isLoading) {
    let count = state.counter
    commit(MTs.SET_COUNT, isLoading ? ++count : --count)
    if (state.hideLoading) return
    if (isLoading || (!isLoading && count === 0)) {
      commit(MTs.SET_LOADING, isLoading)
    }
  },
  setError({ commit }, error) {
    commit(MTs.SET_ERROR, error)
  },
  setRequestUrl({ commit }, url) {
    commit(MTs.REQUEST_URL, url)
  },
}

export const mutations = {
  [MTs.SET_LOADING]: (state, isLoading) => {
    Vue.set(state, 'loading', isLoading)
  },
  [MTs.SET_HIDE_LOADING]: (state, hideLoading) => {
    Vue.set(state, 'hideLoading', hideLoading)
  },
  [MTs.SET_ERROR]: (state, error) => {
    Vue.set(state, 'error', error)
  },
  [MTs.SET_COUNT]: (state, count) => {
    Vue.set(state, 'counter', count)
  },
  [MTs.REQUEST_URL]: (state, url) => {
    Vue.set(state, 'requestUrl', url)
  },
}
