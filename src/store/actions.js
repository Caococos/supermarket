export default {
  //context：上下文
  // aUpdateInfo(context, payload) {
  //   setTimeout(() => {
  //     context.commit('updateInfo')
  //     console.log(payload.message);
  //     payload.success()
  //   }, 1000)

  //这里用更加优雅的方式去实现
  aUpdateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateInfo')
        console.log(payload);
        resolve('11111')
      }, 1000)
    })
  }
}