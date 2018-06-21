<template>
  <div class="products-grid">
    <h3 class="title-secondary">Products</h3>
    <div class="grid">
      <productCell v-for="(product, index) in products.data" :product="product" :key="index"/>
    </div>
  </div>
</template>

<script>
import productCell from './productCell'
export default {
  name: 'productsGrid',
  props: ['products'],
  components: {
    productCell
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/global.scss';
  .products-grid {
    width: 100%;
    margin-top: 10px;

    .grid {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-top: 10px;
    }
  }
</style>
