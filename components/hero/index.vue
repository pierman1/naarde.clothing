<template>
  <div class="hero">
    <div class="background-container">
      <div class="content">
        <!-- <h2 class="big-title">Got balls?</h2> -->
      </div>
    </div>
  </div>
</template>

<script>
// // import backgroundImage from '~/assets/images/background-dummy.jpg'
export default {
  name: 'Hero',
  data () {
    return {
      // backgroundImage: backgroundImage
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/global.scss';

  .hero {
    border-bottom: 40px solid $pink;
    position: relative;
  }

  .background-container {
    width: 100%;
    height: 60vh;
    min-height: 660px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('~/assets/images/background-yellow.jpg');
    transition: .2s;
    position: relative;

    &:hover {
      filter: grayscale(0)
    }
  }

  .big-title {
    font-size: 260px;
    font-weight: 700;
    letter-spacing: 40px;
    color: #FFF;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    padding: 0 40px;
  }
</style>


