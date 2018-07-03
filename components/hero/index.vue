<template>
  <div class="hero"></div>
</template>

<script>
import backgroundImage from '~/assets/images/background-dummy.jpg'
export default {
  name: 'Hero',
  data () {
    return {
      backgroundImage: backgroundImage
    }
  }
}
</script>

<style lang="scss" scoped>
  .hero {
    width: 100%;
    height: 70vh;
    min-height: 660px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('~/assets/images/background-dummy.jpg');
  }
</style>


