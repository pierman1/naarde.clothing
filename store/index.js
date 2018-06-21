import Vuex from 'vuex'

export const state = () => ){

}

export const mutations = {
  SET_CART_STATE (state, cartOpen) {
    if (state.cartOpen === false) {
      state.cartOpen = true
    } else {
      state.cartOpen = false
    }
  }
}