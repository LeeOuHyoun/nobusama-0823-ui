import Vue from 'vue'
// XXX
// const cookieparser = process.server ? require('cookie-parser') : undefined

export const state = () => ({
  token: null,
})

export const getters = {
  token: (state) => state.token,
}

export const actions = {
  setToken({ commit }, payload) {
    commit('setToken', payload)
  },
}

export const mutations = {
  setToken: (state, payload) => {
    Vue.set(state, 'token', payload)
  },
}
