<template>
  <nuxt-link to="/">
    <div class="logo">
      naarde.<span>clothing</span>  
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss" scoped>
  .logo {
    font-size: 18px;
    font-weight: 700;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    span {
      font-weight: 100;
    }
  }
</style>
