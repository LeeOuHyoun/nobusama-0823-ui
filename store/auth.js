import Vue from 'vue'
export const state = () => ({
  token: null,
})

export const getters = {
  token: (store) => store.token,
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
