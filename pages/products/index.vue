<template>
  <div class="container">
    <h1 class="heading-primary">Overview</h1>
    <ProductsGrid :products="products"/>
  </div>
</template>

<script>
import ProductsGrid from '~/components/products/productsGrid'
import products from '~/pages/product.json'

export default {
  name: 'overview',
  data () {
    return {
      products
    }
  },
  components: {
    ProductsGrid
  }
}
</script>

<style>
@import '~/assets/global.scss';
.container {
  height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px 15px;
}
</style>
