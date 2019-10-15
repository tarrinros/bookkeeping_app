import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import App from './App.vue'
import router from './router'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import localizeFilter from './filters/localize.filter'
import tooltipDirective from './directives/tooltip.directive'
import paginationMixin from './mixins/pagination.mixin'
import store from './store'
import messagePlugin from './utils/message.plugin'
import Loader from './components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messagePlugin)

Vue.directive('tooltip', tooltipDirective)

Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)

Vue.mixin('pagination', paginationMixin)

Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: 'AIzaSyBh6KzX9woFFho-LymTgX9mPymz9EKVgyM',
  authDomain: 'tar-vue-crm.firebaseapp.com',
  databaseURL: 'https://tar-vue-crm.firebaseio.com',
  projectId: 'tar-vue-crm',
  storageBucket: '',
  messagingSenderId: '397167703275',
  appId: '1:397167703275:web:3b78d104417a3172b03aae',
  measurementId: 'G-R692VZE6GC'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
