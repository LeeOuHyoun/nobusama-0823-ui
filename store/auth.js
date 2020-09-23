import Vue from 'vue'
export const state = () => ({ token: 'hello token!!!' })

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
