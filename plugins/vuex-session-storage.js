import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  console.log(store)
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'nobusama0823',
      paths: ['auth.token'],
      storage: window.sessionStorage,
    })(store)
  })
}
