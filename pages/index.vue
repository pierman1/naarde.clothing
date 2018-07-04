<template>
  <div class="flex-container">
    <Hero/>
    <ProductsGrid :products="products"/>
  </div>
</template>

<script>
import Header from '~/components/header'
import Footer from '~/components/footer'
import Hero from '~/components/hero'
import ProductsGrid from '~/components/products/productsGrid'

export default {
  components: {
    Header,
    Footer,
    Hero,
    ProductsGrid
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
  flex-direction: column;
  margin: 0 auto;
  justify-content: flex-start;
}
</style>
