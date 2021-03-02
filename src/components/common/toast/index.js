import Toast from "@/components/common/toast/Toast";

const obj = {}

//当main.js调用了Vue.use 就用调用这里的install，还会把Vue传过来
obj.install = function (Vue) {
  // Toast还未挂载，未被创建
  // document.body.appendChild(Toast.$el)

  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  //2.new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastConstructor()
  //3.将组件对象，手动的挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  //4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj
