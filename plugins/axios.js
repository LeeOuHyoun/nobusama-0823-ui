import Vue from 'vue'

export default function ({ $axios, store, route }) {
  $axios.onRequest((config) => {
    Vue.$log.debug(`$axios.onRequest`, store)
    store.dispatch('setError', null)
    config.headers.common['Authorization'] = context.store.getters['auth/token']
    return config
  })

  $axios.onError((error) => {
    Vue.$log.debug(`$axios.onError`, error)
    store.dispatch('setError', error.response)
    return Promise.reject(error)
  })

  $axios.interceptors.request.use(
    (config) => {
      store.dispatch('setLoading', true)
      return config
    },
    (error) => {
      // エラー発生時はエラーログを出力し、loaderをオフにする
      Vue.$log.debug(`$axios.interceptors.request error!`, error)
      store.dispatch('setLoading', false)
      return Promise.reject(error)
    }
  )

  $axios.interceptors.response.use(
    (config) => {
      store.dispatch('setLoading', false)
      return config
    },
    (error) => {
      // エラー発生時はエラーログを出力し、loaderをオフにする
      Vue.$log.debug(`$axios.interceptors.response error!`, error)
      store.dispatch('setLoading', false)
      return Promise.reject(error)
    }
  )
}
