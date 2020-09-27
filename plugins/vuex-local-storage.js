import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'nobusama0823',
      paths: ['auth.token'],
    })(store)
  })
}
