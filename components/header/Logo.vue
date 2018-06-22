<template>
  <nuxt-link to="/">
    <div class="logo">
      N
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
    font-size: 32px;
    font-weight: 700;
    position: absolute;
    left: 50%;
    top: 35px;
    transform: translateX(-50%);
    color: #fff;

    span {
      font-weight: 100;
    }
  }
</style>
