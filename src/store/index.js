import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import moduleA from "@/store/modules/moduleA";
import getters from "@/store/getters";

Vue.use(Vuex)

const state = {
  counter: 1000,
  students: [
    {id: 0o1, name: 'why', age: 18},
    {id: 0o2, name: 'kobe', age: 14},
    {id: 0o3, name: 'zhihaot1', age: 17},
    {id: 0o4, name: 'yuzhiha', age: 31}
  ],
  info: {
    name: 'kobe',
    age: 40,
    height: 198
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    a: moduleA
  },
  getters
})

//对象的解构
const obj = {
  name: 'zhihaot1',
  age: 18,
  height: 1.88,
  address: '洛杉矶'
}

const {name, height, age} = obj;
