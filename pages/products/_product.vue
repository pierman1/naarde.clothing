<template>
  <div class="product-single">
    <div class="container">
      <img v-if="product.image_url" :src="require('~/assets/images/' + product.image_url )"/>
      <h1 class="product-name">{{product.name}}</h1>
      <h2 class="product-price">€ {{product.price}}</h2>
      <p class="sub-title">{{product.subTitle}}</p>

      <select class="select-button" v-model="size">
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
      
      <button class="btn btn--add-to-cart" @click="addToCart">
        <span v-if="!inCart">Add to cart</span>
        <span v-else>Added to cart</span>
      </button>

      <div class="error-message" v-if="errorMessage">{{errorMessage}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {getAPIurl} from '~/http/urlHelper'
import {mapMutations} from 'vuex'

var image = require.context('~/assets/images/', false, /\.jpg$/)

export default {
  name: 'productSingle',
  data () {
    return {
      product: '',
      inCart: false,
      size: '',
      errorMessage: ''
    }
  },
  methods: {
    ...mapMutations({
      toggleCart: 'cart/TOGGLE_CART'
    }),
    getProduct () {
      axios.get(getAPIurl() + '/products/' + this.$route.params.product)
        .then(response => {
          this.product = response.data[0]
        })
    },
    addToCart () {
      console.log(this.size);
      if (this.size) {
        this.$store.dispatch('cart/addToCart', {product: this.product, size: this.size})
        this.inCart = true
        setTimeout(() => {
          this.toggleCart()
        }, 500)
      } else {
        this.errorMessage = 'Please select a size'
      }
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
  margin-bottom: 10px;
}

.sub-title {
  margin-bottom: 10px;
}

.select-button {
  border: 1px solid black;
  background-color: transparent;
  border-radius: 0;
  height: 20px;
  margin-bottom: 10px;
  display: block;
}

.error-message {
  color: red;
}
</style>
