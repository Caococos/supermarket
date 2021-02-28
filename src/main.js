import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";

Vue.config.productionTip = false

//在原型中添加$bus，并将vue实例作为事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
