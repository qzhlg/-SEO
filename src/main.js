// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'
import store from './store'
import 'swiper/dist/css/swiper.css'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios=axios
window.$axios=axios
Vue.use(iview)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
