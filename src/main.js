import toast from "@/components/common/toast";
import router from "@/router";
import store from "@/store";
import FastClick from 'fastclick';
import Vue from 'vue';
import App from './App.vue';

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
//   loading: require('./assets/img/common/placeholder.jpg'),
//   listenEvents: ['']   //你想让vue监听的事件
// })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
