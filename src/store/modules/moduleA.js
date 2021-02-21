
const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', 'laowu')
      }, 1000)
    }
  },
  getters: {
    fullName(state) {
      return state.name + '111'
    },
    fullName1(state, getters, rootState) {
      return state.name +getters.fullName + rootState.counter
    }
  }
}

export default {
  moduleA
}
