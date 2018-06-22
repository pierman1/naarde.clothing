<template>
  <div class="container">
    <h1 class="heading-primary">Overview</h1>
    <ProductsGrid :products="products"/>
  </div>
</template>

<script>
import ProductsGrid from '~/components/products/productsGrid'
import products from '~/pages/product.json'
import axios from 'axios'
import {getAPIurl} from '~/http/urlHelper'
export default {
  name: 'overview',
  data () {
    return {
      products: ''
    }
  },
  components: {
    ProductsGrid
  },
  methods: {
    getProducts () {
      console.log(getAPIurl())
      axios.get(getAPIurl() + '/products')
        .then(response => {
          console.log(response.data)
          console.log('this', this)
          this.products = response.data
        })
    }
  },
  created () {
    this.getProducts()
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
