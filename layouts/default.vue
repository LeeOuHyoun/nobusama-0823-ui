<template lang="pug">
  v-app(v-scroll.self="onScroll")
    v-navigation-drawer(v-model="drawer" absolute temporary light)
      v-list(dense nav)
        v-list-group(
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        )
          template(v-slot:activator)
            v-list-item-content
              v-list-item-title(v-text="item.title")
          v-list-item(
            v-for="subItem in item.items"
            :key="subItem.title"
            @click=""
          )
            v-list-item-content
              v-list-item-title(v-text="subItem.title")

      //- v-subheader subHeader
      //- v-list-item-group(v-model="item" color="primary")
      //-   v-list-item(v-for="(item, i) in items" :key="i")
      //-     v-list-item-icon
      //-       v-icon {{ item.icon }}
      //-     v-list-item-content
      //-       v-list-item-title {{ item.title }}

    v-app-bar(fixed app)
      v-icon.menu-icon.mr-2(large @click="drawer = true") mdi-menu
      nuxt-link.d-flex.link(tag="div" to="/")
        v-img(
          :src="require('@/assets/img/nobu.jpg')"
          max-width="60px"
          max-height="60px"
        )
        v-toolbar-title.px-2.d-flex.flex-column.justify-center
          div.top 10%だけ頂いてやる
          div.bottom nobusama
      .w-350-px.ml-2
        v-text-field(prepend-inner-icon="mdi-magnify" hide-details="auto" outlined dense)
      v-spacer
      v-btn.mx-1(small color="primary" outlined) ログイン
      v-btn.mx-1(small color="primary") 会員登録
    v-main
      nuxt
    v-footer(:absolute="true" app)
      span &copy; 2020 ~ 2020 nobusama Inc.
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      item: 0,
      items: [
        {
          action: 'mdi-lumx',
          title: 'Attractions',
          items: [{ title: 'List Item' }],
        },
        {
          action: 'mdi-lumx',
          title: 'Dining',
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' },
          ],
        },
        {
          action: 'mdi-lumx',
          title: 'Education',
          items: [{ title: 'List Item' }],
        },
        {
          action: 'mdi-lumx',
          title: 'Family',
          items: [{ title: 'List Item' }],
        },
        {
          action: 'mdi-lumx',
          title: 'Health',
          items: [{ title: 'List Item' }],
        },
        {
          action: 'mdi-lumx',
          title: 'Office',
          items: [{ title: 'List Item' }],
        },
        {
          action: 'mdi-lumx',
          title: 'Promotions',
          items: [{ title: 'List Item' }],
        },
      ],
    }
  },
  mounted() {
    // XXX TODO scroll event
    // this.$nextTick(() => {
    //   document.addEventListener(
    //     'scroll',
    //     () => {
    //       console.log('hello scroll!!')
    //     },
    //     { passive: true }
    //   )
    // })
  },
  methods: {
    onScroll() {},
  },
}
</script>
<style lang="scss" scoped>
.menu-icon {
  border-radius: 3px;
  border: 1px solid #bebebe;
  &:hover {
    background-color: #fff;
  }
}
.link {
  cursor: pointer;
}
.v-toolbar__title {
  .top {
    color: #333333;
    font-size: 0.7rem;
  }
  .bottom {
    line-height: 1rem;
  }
}
.theme--light.v-footer {
  background-color: #363634;
  color: #fff;
  font-size: 0.9rem;
}
</style>
