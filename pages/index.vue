<template lang="pug">
  v-layout.flex-column.mx-2.my-2
    .d-flex.flex-wrap.justify-center
      nuxt-link.categories.mx-2.my-1(
        to="/skill-product" tag="div"
        v-for="(category, index) in categories" :key="index"
      ) カテゴリ
    v-card.my-2(outlined)
      v-card-title
        span.title.font-weight-light おすすめサービス
      v-card-text.headline.font-weight-bold ホゲハゲ
    v-card.my-2(outlined)
      v-card-title
        span.title.font-weight-light おすすめユーザー
      v-card-text.headline.font-weight-bold ハゲホゲ
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      categories: [],
    }
  },
  created() {
    this.categories = new Array(50)
  },
}
</script>
<style lang="scss" scoped>
.categories {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 110px;
  border-radius: 7px;
  background-color: #e9f6fc;
  cursor: pointer;
  margin: auto;
}
</style>
