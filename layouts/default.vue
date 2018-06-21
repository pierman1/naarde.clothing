<template>
  <div>
    <Header/>
    <main class="main">
      <nuxt/>
    </main>
    <Cart/>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import Cart from '@/components/cart'

export default {
  components: {
    Header,
    Footer,
    Cart
  }
}
</script>

<style>
@import '~/assets/global.scss';
.main {
  margin-top: 51px;
}

</style>
