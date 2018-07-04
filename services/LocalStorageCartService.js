class LocalStorageCartService {

  getCartObject () {
    const jsonObject = localStorage.getItem('cartObject')
    return JSON.parse(jsonObject)
  }

  setCartObject (object) {
    const jsonObject = JSON.stringify(object)
    return localStorage.setItem('cartObject', jsonObject)
  }

  clearCartObject () {
    return localStorage.removeItem('cartObject')
  }

  updateCartObject (object) {
    this.clearCartObject()
    let today = new Date()
    let expirationDate = new Date(today.getDate()-30)

    if (object.lines.length > 0 && (object.timeStamp > expirationDate)) {
      this.setCartObject(object)
    }
  }
}

export default new LocalStorageCartService
