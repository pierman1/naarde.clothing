<template>
  <div id="app">
    <Header/>
    <main class="main">
      <nuxt/>
    </main>
    <Cart/>
    <Menu/>
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
  overflow: hidden;
}

.main {
  margin-top: 51px;
  transition: .2s;
}

// .menu-open {
//   .main {
//     transform: translateX(450px);
//   }
// }
</style>
