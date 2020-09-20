<template lang="pug">
  v-app()
    v-app-bar(fixed app)
      nuxt-link.d-flex.link(tag="div" to="/")
        v-img(
          :src="require('@/assets/img/nobu.jpg')"
          max-width="60px"
          max-height="60px"
        )
        v-toolbar-title.px-2.d-flex.flex-column.justify-center
          div.top 10%だけ頂いてやる
          div.bottom nobusama
      v-spacer
      v-btn.mx-1(small color="primary" outlined) ログイン
      v-btn.mx-1(small color="primary") 会員登録
    v-main
      v-container
        nuxt
    v-footer(:absolute="true" app)
      span &copy; 2020 ~ 2020 nobusama Inc.
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.link {
  cursor: pointer;
}
.v-toolbar__title {
  .top {
    color: #333333;
    font-size: 0.7rem;
  }
  .bottom {
    line-height: 1rem;
  }
}
.theme--light.v-footer {
  background-color: #363634;
  color: #fff;
  font-size: 0.9rem;
}
</style>
