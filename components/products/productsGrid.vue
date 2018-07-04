<template>
  <div class="products-grid">
    <h3 class="title-big">SHOP<br>NOW</h3>
    <div class="grid">
      <productCell v-for="(product, index) in products.data" :product="product" :key="index"/>
    </div>
  </div>
</template>

<script>
import productCell from './productCell'
import axios from 'axios'
import {getAPIurl} from '~/http/urlHelper'

export default {
  name: 'productsGrid',
  components: {
    productCell
  },
  data () {
    return {
      products: ''
    }
  },
  methods: {
    getProducts () {
      axios.get(getAPIurl() + '/products')
        .then(response => {
          this.products = response.data
        })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/global.scss';
  .products-grid {
    width: 100%;
    margin-top: 100px;
    padding: 0 80px;
    position: relative;
    margin-bottom: 40px;
    min-heigth: 100vh;

    .grid {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 10px;
    }
  }

  .title-big {
    font-size: 2.85em;
    font-weight: 600;
    position: absolute;
    left: 40px;
    top: -55px;
    z-index: 9;
    color: $pink;
  }
</style>
