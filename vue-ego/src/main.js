import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/reset.css'
import './assets/css/iconfont.css'
import api from './api/index'
Vue.prototype.$api = api;
import i18n from './lang/index'
import './router/permission'
import './utils/localStorage'
//echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts;
import VueTour from 'vue-tour'

require('vue-tour/dist/vue-tour.css')

Vue.use(VueTour)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
