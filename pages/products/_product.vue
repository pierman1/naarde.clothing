<template>
  <div class="product-single">
    <div class="container">
      {{$route.params.product}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'productSingle'
}
</script>

<style>
@import '~/assets/global.scss'
.container {
  height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px 15px;
}
</style>
