<template>
  <div class="container">
    <h1 class="heading-primary">Overview</h1>
    <!-- <ProductsGrid/> -->
  </div>
</template>

<script>
import ProductsGrid from '~/components/products/productsGrid'

export default {
  components: {
    ProductsGrid
  }
}
</script>

<style>
@import '~/assets/global.scss';
.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px 15px;
}
</style>
