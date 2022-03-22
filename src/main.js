import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '/' : '/'

Vue.prototype.$http = axios

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
