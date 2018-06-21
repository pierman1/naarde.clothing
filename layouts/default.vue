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

.main {
  margin-top: 51px;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
