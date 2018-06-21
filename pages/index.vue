<template>
  <div class="flex-container">
    <h1 class="heading-primary">Home</h1>
  </div>
</template>

<script>
import Header from '~/components/header'
import Footer from '~/components/footer'

export default {
  components: {
    Header,
    Footer
  },
  head () {
    return {
      title: 'Home',
      meta: [
        { hid: 'description', name: 'description', content: 'Naar.de clothing' }
      ],
      bodyAttrs: {
        class: 'front'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/global.scss';
.flex-container {
  display: flex;
  flex-direction: row;
  height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px 15px;
}
</style>
