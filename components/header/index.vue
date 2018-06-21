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
  header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    background-color: $white;
    border-bottom: 1px solid rgba(88, 88, 88, 0.933);
  }

  .flex-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    max-width: 1280px;
    margin: 0 auto;
  }
</style>

