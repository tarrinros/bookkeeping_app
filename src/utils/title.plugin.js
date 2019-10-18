import localizeFilter from '@/filters/localize.filter'

export default {
  install (Vue) {
    Vue.prototype.$title = function (title) {
      const appTitle = process.env.VUE_APP_TITLE
      return `${localizeFilter(title)} | ${appTitle}`
    }
  }
}
