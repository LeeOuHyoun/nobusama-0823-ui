<template lang="pug">
  v-container
    v-card.mx-auto(max-width="700")
      v-card-title 項目を入力してください
      v-card-subtitle 項目不明、※性別と年齢は必要？
      v-card-text
        v-row(dense)
          v-col(cols="2")
            v-subheader.justify-end.font-weight-black 氏名
          v-col(cols="5")
            v-text-field(label="姓" v-model="formData.lastName" outlined dense hide-details)
          v-col(cols="5")
            v-text-field(label="名" v-model="formData.firstName" outlined dense hide-details)
        v-row(dense)
          v-col(cols="2")
            v-subheader.justify-end.font-weight-black フリガナ
          v-col(cols="5")
            v-text-field(label="フリガナ（姓）" v-model="formData.lastNameFrigana" outlined dense hide-details)
          v-col(cols="5")
            v-text-field(label="フリガナ（名）" v-model="formData.firstNameFrigana" outlined dense hide-details)
        v-row(dense)
          v-col(cols="2")
            v-subheader.justify-end.font-weight-black 住所
          v-col(cols="10")
            v-text-field(label="住所" v-model="formData.address" outlined dense hide-details)
        v-card-actions.justify-center
          .w-50
            v-btn(color="primary" @click="" large block) 出品する
</template>
<script>
export default {
  middleware: ['authenticate'],
  data() {
    return {
      formData: {
        lastName: '',
        firstName: '',
        lastNameFrigana: '',
        firstNameFrigana: '',
        address: '',
      },
    }
  },
}
</script>
<style lang="scss"></style>
