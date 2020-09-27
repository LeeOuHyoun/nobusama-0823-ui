<template lang="pug">
  v-layout.flex-column.mx-2.my-2
    v-card.my-2(outlined light)
      v-card-title
        span.title.font-weight-light カテゴリ
      v-card-actions
        v-container(fluid)
          v-row(align-content="center" justify="start" dense)
            v-col(cols="12" sm="4" md="2" v-for="(category, index) in categories" :key="index")
              v-card(width="95%" height="200px" nuxt to="/skill-product" hover light raised)
                v-img(
                  class="white--text align-end"
                  height="100px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                )
                  v-card-title.pb-0 カテゴリ_{{ index }}
                v-card-subtitle.text--primary サーブタイトル_{{ index }}
                v-card-text.py-1 カテゴリ{{ index }}内容
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
<style lang="scss" scoped></style>
