<template>
  <div class="flex-container">
    <div class="col">
      
    </div>
    <div class="col col-pitch">

    </div>
  </div>
</template>

<script>
import Header from '~/components/header'
import Footer from '~/components/footer'

export default {
  components: {
    Header,
    Footer
  },
  head () {
    return {
      title: 'Home',
      meta: [
        { hid: 'description', name: 'description', content: 'Naar.de clothing' }
      ],
      bodyAttrs: {
        class: 'front'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/global.scss';
.front {

}

.flex-container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.col {
  width: 100%;
}

.col-pitch {
  background-color: $pitch;
}
</style>
