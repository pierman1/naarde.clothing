<template>
  <header>
    <div class="flex-container">
      <Logo/>
      <NavToggle/>
      <Cart/>
    </div>
  </header>
</template>

<script>
import Logo from './Logo'
import Cart from './CartButton'
import NavToggle from './NavToggle'

export default {
  name: 'Header',
  components: {
    Logo,
    Cart,
    NavToggle
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/global.scss';
  header {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100px;
    z-index: 999;
    background-color: $lightblue;
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

