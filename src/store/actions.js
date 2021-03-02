export default {
  addCart(context, payload) {
    //payload新添加的商品
    //1.判断商品是否存在
    // let oldProduct = null;
    // for (let item of state.cartList) {
    //   if (item.iid === payload.iid) {
    //     oldProduct = item;
    //   }
    // }
    return new Promise((resolve, reject) => {
      //1.查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      //2.判断oldProduct
      if (oldProduct) {
        context.commit('addCounter', oldProduct)
        resolve('当前商品数量+1')
      }else {
        payload.count = 1
        context.commit('addToCart', payload)
        resolve('添加了新的商品')
      }
    })
  }
}
