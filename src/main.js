import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
import toast from "@/components/common/toast"
import FastClick from 'fastclick'
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false     //打包编译时是否显示进度

//安装toast插件
Vue.use(toast)

//在原型中添加$bus，并将vue实例作为事件总线
Vue.prototype.$bus = new Vue()

//解决移动端300ms延迟
FastClick.attach(document.body)

//使用懒加载插件
//这个东西会影响ScrollerHeight
// Vue.use(VueLazyLoad, {
//   preLoad: 30,
//   loading: require('./assets/img/common/placeholder.jpg')
// })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
