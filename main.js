import Vue from 'vue'
import App from './App'
import IboxPlugin from '@/plugins/ibox'
import store from '@/store'

Vue.use(IboxPlugin)
Vue.config.productionTip = false
App.store = store
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
