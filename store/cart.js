export const state = () => ({
  showCart: false
})

export const mutations = {
  TOGGLE_CART (state) {
    state.showCart = !state.showCart
    document.querySelector('body').classList.toggle('cart-open')
    document.querySelector('html').classList.toggle('cart-open')
  },
  CLOSE_CART (state) {
    state.showCart = false
    document.querySelector('body').classList.remove('cart-open')
    document.querySelector('html').classList.remove('cart-open')
  }
}

export const actions = {
  toggleCart ({ commit, dispatch }) {
    commit('TOGGLE_CART')
  }
}