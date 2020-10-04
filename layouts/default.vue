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
        v-text-field.d-none.d-md-flex(
          prepend-inner-icon="mdi-chevron-down"
          append-icon="mdi-magnify"
          hide-details="auto"
          outlined dense
          v-model="searchWords"
          @click:prepend-inner="showMenu = !showMenu"
          @click:append="doSearch"
        )
        //- 検索の種別メニュー
        v-menu(
          transition="scroll-y-transition"
          :position-x="246"
          :position-y="50"
          v-model="showMenu"
        )
          v-list
            v-list-item
              v-list-item-title web front end
            v-list-item
              v-list-item-title web server end
      v-spacer
      .d-flex(v-if="show")
        template(v-if="$_.isNil(this.token)")
          v-btn.mx-1.d-none.d-md-flex(small outlined nuxt to="/login" color="primary") ログイン
          v-btn.mx-1.d-none.d-md-flex(small color="primary") 会員登録
        template(v-else)
          v-menu( transition="scale-transition" )
            template(v-slot:activator="{ on, attrs }")
              v-btn(v-bind="attrs" v-on="on" icon)
                v-icon(color="primary" size="40") mdi-account-circle
            auth-menu
        //- モバイルメニュー
        v-menu( transition="scale-transition" v-if="$_.isNil(this.token)")
          template(v-slot:activator="{ on, attrs }")
            v-btn.d-md-none(v-bind="attrs" v-on="on" icon)
              v-icon mdi-dots-vertical
          v-list.d-md-none
            v-list-item
              v-btn(small outlined nuxt to="/login" color="primary") ログイン
            v-list-item
              v-btn(small color="primary") 会員登録
    v-main
      nuxt
    v-footer(:absolute="true" app)
      span &copy; 2020 ~ 2020 nobusama Inc.
</template>
<script>
import AuthMenu from '@/components/menu/AuthMenu'
export default {
  name: 'Default',
  components: { AuthMenu },
  data() {
    return {
      show: false,
      drawer: false,
      showMenu: false,
      searchWords: null,
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
  computed: {
    token() {
      return this.$cookies.get('token')
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.show = true
    })
  },
  methods: {
    onScroll() {},
    doSearch() {
      console.log('doSearch ===>>> ', this.searchWords)
    },
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
