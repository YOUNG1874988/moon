import Vue from 'vue'
import App from './App'
import router from './router'
// 导入mock.js
require('./util/mock.js')
Vue.config.productionTip = false
    //实例化标题切换参数
Vue.use(require('vue-wechat-title'))
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})