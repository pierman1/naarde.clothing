<template>
  <div class="container">
    <h1 class="heading-primary">Overview</h1>
    <ProductsGrid/>
  </div>
</template>

<script>
import ProductsGrid from '~/components/products/productsGrid'
import products from '~/pages/product.json'
import axios from 'axios'
import {getAPIurl} from '~/http/urlHelper'
export default {
  name: 'overview',
  components: {
    ProductsGrid
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/global.scss';
.container {
  min-height: 100vh;
  margin: 0 auto;
}
</style>
