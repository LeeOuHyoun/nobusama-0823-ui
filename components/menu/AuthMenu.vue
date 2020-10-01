<template lang="pug">
  v-list.w-min-200-px(nav dense)
    v-subheader 信太郎
    v-list-item-group(color="primary")
      v-list-item(link)
        v-list-item-icon
          v-icon mdi-package-up
        v-list-item-content(@click="$router.push('/skill-exhibit')")
          v-list-item-title 出品する
      v-list-item(link)
        v-list-item-icon
          v-icon mdi-logout
        //- v-list-item-content(@click="setToken(null)")
        v-list-item-content(@click="logout")
          v-list-item-title ログアウト
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions('auth', ['setToken', 'logout']),
    goToSkillExhibit() {
      console.log('hello exhibit')
    },
  },
}
</script>
<style lang="scss" scoped></style>
