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
    border-bottom: 1px solid #cceecc;
  }
  .flex-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    position: relative;
  }
</style>

