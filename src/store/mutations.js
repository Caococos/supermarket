import {INCREMENT} from "@/store/mutations-types";
import Vue from "vue";

export default {
    //  方法
    //  官方建议使用mutation方法对共享变量进行修改
    [INCREMENT](state) {
    state.counter++
  },
    decrement(state) {
    state.counter--
  },
    incrementCounter(state, payload) {
    state.counter += payload.counter
  },
    addStudent(state, stu) {
    state.students.push(stu)
  },
    updateInfo(state) {
    //通过这种方法给state增加新属性
    // Vue.set(state.info, 'address', '洛杉矶')

    //  该方式做不到响应式
    //   delete state.info.age
    Vue.delete(state.info, 'age')
  }
}