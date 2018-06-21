<template>
  <button class="cart-button" @click="openCart">Cart</button>
</template>

<script>
export default {
  name: 'CartButton',
  methods: {
    openCart () {
      console.log('open carttt');
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

