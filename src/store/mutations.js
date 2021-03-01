import {INCREMENT} from "@/store/mutations-types";

// mutation唯一的目的就是修改state中的状态
// mutation中的每个方法尽可能完成发事件比较单一一点
export default {
  addCounter(state, payload) {
    payload.count++
  },
  addToCart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
}
