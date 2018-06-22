export const state = () => ({
  showMenu: false
})

export const mutations = {
  TOGGLE_MENU (state) {
    state.showMenu = !state.showMenu
    document.querySelector('body').classList.toggle('menu-open')
    document.querySelector('html').classList.toggle('menu-open')
  },
  CLOSE_MENU (state) {
    state.showMenu = false
    document.querySelector('body').classList.remove('menu-open')
    document.querySelector('html').classList.remove('menu-open')
  }
}

export const actions = {
  toggleMenu ({ commit, dispatch }) {
    commit('TOGGLE_MENU')
  }
}