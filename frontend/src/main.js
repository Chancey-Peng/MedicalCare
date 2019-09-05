// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import moment from 'moment';

import axios from 'axios'
import "babel-polyfill";
// import 'url-search-params-polyfill';//解决axios使用的URLSearchParms，在ie下未定义的错误
import httpService from './service/http-service';//封装axios接口强求

//配置vuex
import store from './store/store'

import 'element-ui/lib/theme-chalk/index.css'
import './common/stylus/index.styl';



// 本地化，中文时间显示
moment.locale('zh-cn');
Vue.prototype.moment = moment;

Vue.config.productionTip = false
Vue.use(ElementUI)

// Vue.use(VueAxios, axios);
// Vue.prototype.$axios = axios;
Vue.prototype.$axios = httpService;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
