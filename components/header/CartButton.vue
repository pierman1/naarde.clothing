<template>
  <button class="cart-button" @click="openCart">
    <span class="cart-name">Cart</span>
    <span>({{numProductsInCart}})</span>
  </button>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { createNamespacedHelpers } from 'vuex'

const { mapGetters } = createNamespacedHelpers('cart')

export default {
  name: 'CartButton',
  computed: {
    ...mapGetters(['numProductsInCart'])
  },
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
    color: #fff;
    position: absolute;
    bottom: 85px;
    left: 50%;
    transform-origin: center;
    transform: translateX(-50%) rotate(-90deg);
    font-size: 24px;
    font-weight: 700;
  }

  .cart-name {
    margin-right: 10px;
  }
</style>

