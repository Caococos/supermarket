import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import moduleA from "@/store/modules/moduleA";
import getters from "@/store/getters";

Vue.use(Vuex)

const state = {
  cartList: []
}

const store =  new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    a: moduleA
  },
  getters
})

export default store

