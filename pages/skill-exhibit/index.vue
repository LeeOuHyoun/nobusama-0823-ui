<template lang="pug">
  v-container
    v-card.mx-auto(max-width="800")
      v-card-title サービスの出品・編集
      v-card-subtitle 項目不明、※性別と年齢は必要？
      v-card-text
        v-row(dense)
          v-col(cols="4")
            v-subheader.justify-end.font-weight-black サービスタイトル
          v-col(cols="8")
            v-text-field(label="サービスタイトル" v-model="formData.input_1" outlined dense hide-details)
        v-row(dense)
          v-col(cols="4")
            v-subheader.justify-end.flex-column.font-weight-black
              .w-100.text-right タイトル補足説明
              .w-100.text-right (キャッチコピー)
          v-col(cols="8")
            v-text-field(label="タイトル補足説明" v-model="formData.input_2" outlined dense hide-details)
        v-row(dense)
          v-col(cols="4")
            v-subheader.justify-end.font-weight-black サービス内容
          v-col(cols="8")
            v-textarea(label="サービス内容" v-model="formData.input_3" outlined dense hide-details)
        v-row(dense)
          v-col(cols="4")
            v-subheader.justify-end.font-weight-black カテゴリ
          v-col(cols="4")
            v-select(:items="categoryOptions" v-model="formData.input_4" dense outlined)
          v-col(cols="4")
            v-select(:items="[{ text: '選択してください。', value: '' }]" v-model="formData.input_5" dense outlined)
        v-row(dense)
          v-col(cols="4")
            v-subheader.justify-end.font-weight-black サービス価格
          v-col(cols="8")
            v-select.w-50(:items="[{ text: '選択してください。', value: '' }]" v-model="formData.input_6" dense outlined)
        v-row(dense)
          v-col(cols="4")
            v-subheader.justify-end.font-weight-black 提供形式
          v-col(cols="8")
            v-radio-group.mt-1(v-model="formData.input_7" dense hide-details)
              v-radio(v-for="n in 3" :key="n" :label="`提供形式_${n}`" :value="n")
        v-row(dense)
          v-col(cols="4")
            v-subheader.justify-end.font-weight-black 一度に受注可能な件数
          v-col(cols="2")
            v-text-field(v-model="formData.input_8" suffix="日" outlined dense hide-details)
          v-col(cols="6")
            v-checkbox.mt-1(v-model="formData.input_9" label="要相談と表示する" hide-details)
        v-row(dense)
          v-col(cols="4")
            v-subheader.justify-end.font-weight-black 購入にあたってのお願い
          v-col(cols="8")
            v-textarea(label="購入にあたってのお願い" v-model="formData.input_10" outlined dense hide-details)
        v-row(dense)
          v-col(cols="4")
            v-subheader.justify-end.font-weight-black 一度に受注可能な件数
          v-col(cols="8")
            v-text-field.w-25(v-model="formData.input_11" suffix="件" outlined dense hide-details)
        v-row(dense)
          v-col(cols="4")
            v-subheader.justify-end.font-weight-black 画像
          v-col(cols="8")
            v-row(dense)
              v-col.d-flex.justify-space-between(cols="12")
                div.d-flex.align-center(v-for="n in 5" :key="n" style="background-color: #ddd; width: 90px; height: 90px; border-radius: 5px;")
                  v-file-input.justify-center(hide-input multiple dense hide-details)
              v-col.d-flex.justify-space-between(cols="12")
                div.d-flex.align-center(v-for="n in 5" :key="n" style="background-color: #ddd; width: 90px; height: 90px; border-radius: 5px;")
                  v-file-input.justify-center(hide-input multiple dense hide-details)
          v-row(dense)
            v-col(cols="4")
            v-col(cols="8")
              v-btn.mr-2(color="secondary")
                v-icon(left) mdi-content-save
                | 下書きを保存する
              v-btn.ml-2(color="error" @click="deleteSaveData")
                v-icon(left) mdi-delete-sweep
                | 下書きを削除する
        v-card-actions.justify-center
          .w-50
            v-btn(color="primary" @click="releaseMyData" large block) 公開する
</template>
<script>
export default {
  middleware: ['authenticate'],
  data() {
    return {
      categoryOptions: [
        { text: '選択してください。', value: '' },
        { text: 'デザイン', value: '1' },
        { text: 'Webサイト制作', value: '2' },
      ],
      formData: {
        input_1: '',
        input_2: '',
        input_3: '',
        input_4: '',
        input_5: '',
        input_6: '',
        input_7: '',
        input_8: '',
        input_9: '',
        input_10: '',
        input_11: '',
      },
    }
  },
  methods: {
    async deleteSaveData() {
      const res = await this.$dialog.confirm({
        text: '削除してもよろしいですか？',
        title: 'Warning',
      })
      if (res) {
        await this.$dialog.info({
          text: '削除しました',
          title: 'Info',
        })
      }
    },
    async releaseMyData() {
      const res = await this.$dialog.info({
        text: '公開しました',
        title: 'Info',
      })
      if (res) {
        this.$router.push('/')
      }
    },
  },
}
</script>
<style lang="scss"></style>
