<template>
  <div class="cart">

    <transition name="fade">
      <div class="background" v-if="showCart" @click="closeCart"></div>
    </transition>
   
    <transition name="fade">
      <div class="content" v-if="showCart" @click="closeCart">

      </div>
    </transition>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { createNamespacedHelpers } from 'vuex'
const { mapMutations } = createNamespacedHelpers('cart')

export default {
  name: 'Cart',
  computed: mapState({
    showCart: state => state.cart.showCart
  }),
  methods: {
    ...mapMutations({
      toggleCart: 'TOGGLE_CART',
      closeCart: 'CLOSE_CART'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/global.scss';
  .cart {
    .background {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 9998;
      background: rgba(70,75,79, 0.8);
    }
    .content {
      position: fixed;
      top: 0px;
      right: 0;
      bottom: 0;
      z-index: 9999;
      width: 350px;
      max-width: 100%;
      background: #fff;
      display: flex;
      flex-direction: column;
    }
  }
</style>

