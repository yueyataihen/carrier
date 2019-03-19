import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'

// 引入样式
import '@/assets/styles/reset.scss'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
