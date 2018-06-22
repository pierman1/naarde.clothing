<template>
  <div class="nav-toggle" @click="openMenu">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'menuToggle',
  methods: {
    openMenu () {
      this.$store.dispatch('menu/toggleMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-toggle {
    position: absolute;
    width: 20px;
    height: 16px;
    left: 50%;
    top: 145px;
    transform: translateX(-50%);
    cursor: pointer;

    span {
      position: absolute;
      display: block;
      background-color: #fff;
      width: 100%;
      height: 2px;
      transition: .2s all;

      &:nth-child(1) {

      }

      &:nth-child(2) {
        top: 6px;
        width: 16px;
      }

      &:nth-child(3) {
        top: 12px;
      }
    }

    &:hover {
      span {

        &:nth-child(1) {
          width: 16px;
        }

        &:nth-child(2) {
          width: 20px;
        }

        &:nth-child(3) {
          width: 16px;
        }
      }
    }

    &.active {
      span {

        &:nth-child(1) {
          transform: rotate(45deg);
          top: 6px;
        }

        &:nth-child(2) {
          width: 20px;
          opacity: 0;
        }

        &:nth-child(3) {
          transform: rotate(-45deg);
          top: 6px;
        }
      }

      &:hover {
        span {
          width: 100%;
        }
      }
    }
  }
</style>


