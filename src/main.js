import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueClipboards from 'vue-clipboard2';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

axios.interceptors.response.use(response => {
  return response.data;
});

Vue.use(ElementUI);
Vue.use(VueClipboards);

new Vue({
  render: h => h(App),
}).$mount('#app')
