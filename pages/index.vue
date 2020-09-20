<template lang="pug">
  v-layout
    .d-flex.flex-wrap
      nuxt-link.categories.mx-1.my-1(
        to="/pugTest" tag="div"
        v-for="(category, index) in categories" :key="index"
      ) web
</template>
<script>
export default {
  data() {
    return {
      categories: [],
    }
  },
  created() {
    this.categories = new Array(30)
  },
}
</script>
<style lang="scss">
.categories {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 110px;
  border-radius: 7px;
  background-color: #e9f6fc;
  cursor: pointer;
}
</style>
