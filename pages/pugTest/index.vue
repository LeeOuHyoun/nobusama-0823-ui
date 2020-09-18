<template lang="pug">
  #pugTest
    .helloTest {{ name }}
</template>
<script>
export default {
  data() {
    return {
      name: 'hello pug',
    }
  },
}
</script>
<style lang="scss">
#pugTest {
  .helloTest {
    background-color: red;
  }
}
</style>
