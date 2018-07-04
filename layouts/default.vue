<template>
  <div id="app">
    <Header/>
    <main class="main">
      <nuxt/>
    </main>
    <Cart/>
    <Menu/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import Cart from '@/components/cart'
import Menu from '@/components/menu'

export default {
  components: {
    Header,
    Footer,
    Cart,
    Menu
  }
}
</script>

<style lang="scss">
@import '~/assets/global.scss';

#app {
  max-width: 100vw;
  overflow-x: hidden;
}

.main {
  transition: .2s;
  width: calc(100% - 100px);  
  margin-left: 100px;
  float: left;
}
</style>
