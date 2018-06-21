<template>
  <div class="container">
    Home
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

<style>
.front {
}
</style>
