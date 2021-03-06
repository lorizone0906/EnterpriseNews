// 
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
//
import './assets/config/rem'
import FastClick from 'fastclick'
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css'

// 
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      // 
      FastClick.attach(document.body);
    }, false);
}

Vue.config.productionTip = false

var eventHub = new Vue();

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
