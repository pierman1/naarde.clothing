<template>
  <div class="menu">
    <transition name="fade">
      <div class="background" v-if="showMenu" @click="closeMenu"></div>
    </transition>
   
    <transition name="slideL">
      <div class="content" v-if="showMenu">
        <!-- <div class="menu-header">
          <h3 class="menu-title">menu</h3>
        </div> -->
        <div class="menu-body">
          <ul>
            <li>
              <nuxt-link to="/">De Bar</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Recepten</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/products">Products</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Contact</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { createNamespacedHelpers } from 'vuex'
const { mapMutations } = createNamespacedHelpers('menu')
import axios from 'axios';

export default {
  name: 'Menu',
  computed: mapState({
    showMenu: state => state.menu.showMenu

  }),
  methods: {
    ...mapMutations({
      toggleMenu: 'TOGGLE_MENU',
      closeMenu: 'CLOSE_MENU'
    })
  },
  watch:{
    $route (to, from){

      console.log(to, from);
      
      this.closeMenu()
    }
  } 
}
</script>

<style lang="scss" scoped>
@import '~/assets/global.scss';
  .menu {
    .background {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 0;
      background: rgba(70,75,79, 0.8);
      opacity: 0;
    }
    .content {
      position: fixed;
      top: 0px;
      left: 100px;
      bottom: 0;
      z-index: 1;
      width: 350px;
      max-width: 100%;
      background: $pink;
      display: flex;
      flex-direction: column;
    }
  }

  .cart-header {
    padding: 20px;
  }

  .cart-title {
    font-size: 14px;
    font-weight: 600;
  }

  ul {
    margin: 140px 60px;
    list-style: none;

    li {
      margin-bottom: 10px;
      transition: .2s;
      
      a {
        font-size: 18px;
        color: #FFFFFF;
        letter-spacing: 2.25px;
        line-height: 25px;
        cursor: pointer;
      }

      &:hover {
        padding-left: 10px;
      }
    }
  }
</style>

