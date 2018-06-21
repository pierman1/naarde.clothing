<template>
  <div class="cart">
    <transition name="fade">
      <div class="background" v-if="showCart" @click="closeCart"></div>
    </transition>
   
    <transition name="slide">
      <div class="content" v-if="showCart" @click="closeCart">
        <div class="cart-header">
          <h3 class="cart-title">Cart</h3>
        </div>
        <div class="cart-body">
          <button id="checkout" @click="checkout">Checkout</button>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { createNamespacedHelpers } from 'vuex'
const { mapMutations } = createNamespacedHelpers('cart')
import axios from 'axios';

export default {
  name: 'Cart',
  computed: mapState({
    showCart: state => state.cart.showCart
  }),
  methods: {
    ...mapMutations({
      toggleCart: 'TOGGLE_CART',
      closeCart: 'CLOSE_CART'
    }),
    checkout () {
      axios.post('http://localhost:9898/api/checkout/payment')
      .then(response => {
        // console.log(typeoff esponse)
        console.log(response)
        window.location.href = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
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
      opacity: 0;
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
      border-left: 1px solid $pitch;
    }
  }

  .cart-header {
    padding: 20px;
  }

  .cart-title {
    font-size: 14px;
    font-weight: 600;
  }
</style>

