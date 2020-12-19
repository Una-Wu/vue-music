import Vue from 'vue'
import App from './App.vue'
import router from './router'

import fastclick from 'fastclick'

import 'assets/stylus/index.styl'

Vue.config.productionTip = false

fastclick.attach(document.body)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
