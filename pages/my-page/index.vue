<template lang="pug">
  v-container
    v-row
      v-col.text-center(cols="3")
        v-avatar(size="100")
          v-icon(size="100") mdi-account-circle
      v-col(cols="9")
        v-row
          v-col 信長
        v-row
          v-col 敵はあそこです。
      v-row()
        v-col
          v-tabs(fixed-tabs)
            v-tab a
            v-tab b
            v-tab c
            v-tab-item(v-for="n in 3" :key="n") {{ n }}
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      items: ['Appetizers', 'Entrees', 'Deserts', 'Cocktails'],
    }
  },
}
</script>
<style lang="scss" scoped></style>
