<template lang="pug">
  v-list.w-min-200-px(nav dense)
    v-subheader 信太郎
    v-list-item-group(color="primary")
      v-list-item(link)
        v-list-item-icon
          v-icon mdi-heart-broken
        v-list-item-content(@click="goToExhibit")
          v-list-item-title 出品する
      v-list-item(link)
        v-list-item-icon
          v-icon mdi-logout
        v-list-item-content(@click="setToken(null)")
          v-list-item-title ログアウト
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions('auth', ['setToken']),
    goToExhibit() {
      console.log('hello exhibit')
    },
  },
}
</script>
<style lang="scss" scoped></style>
