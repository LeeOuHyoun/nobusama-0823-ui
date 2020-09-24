<template lang="pug">
  v-container#skillProduct(fluid)
    v-row
      v-col(cols="12" md="5" order="1" order-md="1")
        v-carousel(
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover)
            v-carousel-item(v-for="(slide, i) in slides" :key="i")
              v-sheet(:color="colors[i]" height="100%")
                v-row(class="fill-height" align="center" justify="center")
                  .display-3 {{ slide }} Slide
      v-col(cols="12" md="5" order="3" order-md="2")
        v-card(outlined)
          v-card-title Djangoの神様
          v-card-subtitle
            v-icon(color="#ffd700" dark dense) mdi-star
            v-icon(color="#ffd700" dark dense) mdi-star
            v-icon(color="#ffd700" dark dense) mdi-star
            v-icon(color="#ffd700" dark dense) mdi-star
            v-icon(color="#ffd700" dark dense) mdi-star-half
          v-card-text ちょっと足りない、神様でした。惜しい。
          v-card-text
            v-row
              v-col.font-weight-bold(cols="3") title
              v-col(cols="9")
                | Iphone 11 pro max,iPhone 11 Pro,iPhone 11,iPhone XR,
                | iPhone XS,iPhone XMax,iPhone X,iPhone8/Pus,Galaxy Note 8,Galaxy S9/S9+,iPhone8
                | ,iPhone7, iPhone6, iPhone5s, iPhone5, iPhone5c, iPhone6s,Galaxy, Xepria,
                | Nexus, androidスマホ, iPad, iPod（Switch/ iOS /Android各種対応）
      v-col(cols="12" md="2" order="2" order-md="3")
        v-card(outlined)
          v-card-title 8,000円
          v-card-subtitle 買ってくださいもの
          v-card-actions
            v-btn.mx-auto(color="primary")
              v-icon(dense) mdi-cart-outline
              | カートに入れる
        v-card(outlined)
          v-card-actions
            v-btn.mx-auto(color="secondary") 関心リストに追加
          v-card-actions
            v-btn.mx-auto(color="success") 関心リストに追加
          v-card-actions
            v-btn.mx-auto(color="info") 関心リストに追加
          v-card-actions
            v-btn.mx-auto(color="warning") 関心リストに追加
</template>
<script>
export default {
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
    }
  },
  created() {},
}
</script>
<style lang="scss" scoped></style>
