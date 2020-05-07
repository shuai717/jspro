import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import http from './http/index.js'
import 'lib-flexible/flexible'
import 'amfe-flexible'
import store from './store/index'
import 'vant/lib/index.css'
Vue.config.productionTip = false
Vue.prototype.$http=http;
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
