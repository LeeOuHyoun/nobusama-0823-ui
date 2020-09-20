<template lang="pug">
  v-app()
    v-app-bar.d-flex.justify-end(fixed app)
      v-btn.mx-1(small color="primary" outlined) ログイン
      v-btn.mx-1(small color="primary") 会員登録
    v-main
      v-container
        nuxt
    v-footer(:absolute="true" app)
      span &copy; {{ $moment().format('YYYY') }}
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
