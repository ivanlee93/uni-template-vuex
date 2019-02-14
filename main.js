import Vue from 'vue'
import App from './App'
import IboxPlugin from '@/plugins/ibox'
import store from '@/store'

Vue.use(IboxPlugin)
Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()