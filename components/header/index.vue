<template>
  <header>
    <div class="flex-container">
      <Navigation/>
      <Logo/>
      <Cart/>
    </div>
  </header>
</template>

<script>
import Logo from './Logo'
import Cart from './CartButton'
import Navigation from './Navigation'

export default {
  name: 'Header',
  components: {
    Logo,
    Cart,
    Navigation
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/global.scss';
  .flex-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: $white;
  }
</style>

