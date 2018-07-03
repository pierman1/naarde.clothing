<template>
  <div class="product-single">
    <div class="container">
      {{$route.params.product}}
      <!-- {{product[0]}} -->

      <!-- <img :src="`images/${product.image_url}`"> -->
      <h1 class="product-name">{{product.name}}</h1>
      <h2 class="product-price">€ {{product.price}}</h2>
      
      <button class="btn btn--add-to-cart">Add to cart</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {getAPIurl} from '~/http/urlHelper'

export default {
  name: 'productSingle',
  data () {
    return {
      product: ''
    }
  },
  methods: {
    getProduct () {
      axios.get(getAPIurl() + '/products/' + this.$route.params.product)
        .then(response => {
          this.product = response.data[0]
        })
    }
  },
  created () {
    this.getProduct()
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/global.scss';
.container {
  height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px 15px;
}

.product-name {
  font-size: 2em;
  margin-bottom: 10px;
}

.product-price {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.btn {
  padding: 10px 20px;
  background-color: #fff;
  border: 2px solid #000;
}
</style>
