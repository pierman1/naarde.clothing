<template>
  <div class="product-single">
    <div class="container">
      {{$route.params.product}}
      {{product}}
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
          this.product = response.data
        })
    }
  },
  created () {
    this.getProduct()
  }
}
</script>

<style>
@import '~/assets/global.scss'
.container {
  height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px 15px;
}
</style>
