import localStorageCartService from '@/services/LocalStorageCartService'

export const state = () => ({
  showCart: false,
  products: []
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
  },
  ADD_TO_CART (state, { product, size }) {
    const productToAdd = { ...product, size }
    const sameProductInCart = getSameProductInCart(state.products, productToAdd)

    if (!sameProductInCart) {
      productToAdd.quantity = 1
      productToAdd.totalProductPrice =
        parseFloat(productToAdd.price).toFixed(2) * productToAdd.quantity
      state.products.push(productToAdd)
      return localStorageCartService.updateCartObject(
        createLocalStorageCartObject(state)
      )
    } else {
      sameProductInCart.quantity += 1
      sameProductInCart.totalProductPrice =
        parseFloat(sameProductInCart.price).toFixed(2) *
        sameProductInCart.quantity
      return localStorageCartService.updateCartObject(
        createLocalStorageCartObject(state)
      )
    }
  }
}

export const actions = {
  toggleCart ({ commit, dispatch }) {
    commit('TOGGLE_CART')
  },
  addToCart ({ commit, dispatch, state }, payload) {
    commit('ADD_TO_CART', payload)
  }
}

export const getters = {
  numProductsInCart: state => {
    return numProductsInCart(state)
  }
}

const parseProduct = product =>
  Object.assign(
    {},
    {
      productSlug: product.slug,
      size: product.size,
      quantity: product.quantity
    }
  )

const numProductsInCart = state => {
  const numProducts = state.products.reduce(
    (total, item) => total + item.quantity,
    0
  )
  return numProducts
}

const parseProducts = products => products.map(product => parseProduct(product))

const createLocalStorageCartObject = state =>
  Object.assign(
    {},
    {
      lines: parseProducts(state.products),
      timeStamp: new Date()
    }
  )

const getSameProductInCart = (cart, product) => {
  return cart.find(p => p.id === product.id && p.size.id === product.size.id)
}