import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jquery from 'jquery'
import axios from 'axios'
import slick from 'slick-carousel'
import '../node_modules/slick-carousel/slick/slick.css';
import waterfall from "vue-waterfall2";


import apiConfig from './api.config'
Vue.config.productionTip = false

// axios.defaults.baseURL = apiConfig.baseUrl;
Vue.use(waterfall);
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  jquery,
  slick,
  render: h => h(App)
}).$mount('#app')
