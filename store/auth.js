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
  logout({ commit }) {
    commit('setToken', null)
    this.$router.push('/')
  },
  setToken({ commit }, payload) {
    commit('setToken', payload)
  },
}

export const mutations = {
  setToken: (state, payload) => {
    Vue.set(state, 'token', payload)
  },
}
