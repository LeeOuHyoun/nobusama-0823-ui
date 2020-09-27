<template lang="pug">
  v-container.py-15
    v-card.mx-auto.px-2.py-2(outlined width="500")
      v-card-title ログイン
      v-card-text
        v-row
          v-text-field(label="メールアドレス"
            v-model="email" :rules="[rules.required]" outlined dense)
        v-row
          v-text-field(label="パスワード" type="password"
            v-model="password" :rules="[rules.required]" outlined dense)
        v-row(justify="center")
          v-btn(color="primary" large @click="login" :disabled="$_.some([email, password], $_.isEmpty)")
            v-icon(left) mdi-login
            | ログイン
</template>
<script>
import { mapActions } from 'vuex'
export default {
  layout: 'login',
  data() {
    return {
      email: null,
      password: null,
      rules: {
        required: (v) => !_.isEmpty(v) || '入力必須項目です。',
      },
    }
  },
  methods: {
    ...mapActions('auth', ['setToken', 'setAuth']),
    async login() {
      // FIXME dummy token set
      await this.setToken('aBcDeFgHi123$%^7890!!')
      this.$router.replace('/')
    },
  },
}
</script>
<style lang="scss" scoped></style>
