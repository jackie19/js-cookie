import cookie from 'js-cookie'

class JSCookie {
  constructor(separator) {
    this.separator = separator
  }

  static get env() {
    if (process.env) {
      return process.env.VUE_APP_ENV || process.env.ENV
    }
    return ''
  }

  addEnv(key) {
    if (JSCookie.env) {
      return [JSCookie.env, key].join(this.separator)
    }
    return key
  }

  get(key) {
    return cookie.get(this.addEnv(key))
  }

  remove(key, attributes) {
    return cookie.remove(this.addEnv(key), attributes)
  }

  set(key, value, attributes) {
    return cookie.set(this.addEnv(key), value, attributes)
  }

  // eslint-disable-next-line class-methods-use-this
  getJSON(...args) {
    return cookie.getJSON(...args)
  }
}

export default new JSCookie('-')
