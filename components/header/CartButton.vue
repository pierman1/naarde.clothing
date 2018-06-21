<template>
  <button class="cart-button" @click="openCart">Cart</button>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CartButton',
  methods: {
    openCart () {
      this.$store.dispatch('cart/toggleCart')
    }
  }
}
</script>

<style lang="scss" scoped>
  .cart-button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
</style>

