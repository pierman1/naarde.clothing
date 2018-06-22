import Vuex from 'vuex'

export const state = () => ({
  showNav: true,
  showMenu: true
})

export const mutations = {
  SET_CART_STATE (state, cartOpen) {
    if (state.cartOpen === false) {
      state.cartOpen = true
    } else {
      state.cartOpen = false
    }
  },
  SET_MENU_STATE (state, menuOpen) {
    if (state.menuOpen === false) {
      state.menuOpen = true
    } else {
      state.menuOpen = false
    }
  }
}