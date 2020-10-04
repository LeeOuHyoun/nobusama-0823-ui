<template lang="pug">
  v-list.w-min-200-px(nav dense)
    v-subheader 信太郎
      span.ml-2 殿
    v-list-item-group(color="primary")
      v-list-item(link @click="$router.push('/skill-exhibit')")
        v-list-item-icon
          v-icon mdi-package-up
        v-list-item-content
          v-list-item-title 出品する
      v-list-item(link @click="logout")
        v-list-item-icon
          v-icon mdi-logout
        v-list-item-content
          v-list-item-title ログアウト
</template>
<script>
export default {
  methods: {
    logout() {
      this.$cookies.removeAll()
      this.$router.go({ path: this.$router.currentRoute.path, force: true })
    },
  },
}
</script>
<style lang="scss" scoped></style>
