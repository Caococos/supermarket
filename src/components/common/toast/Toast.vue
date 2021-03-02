<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
name: "Toast",
// props: {
//   message: {
//     type: String,
//     default: ''
//   },
//   show: {
//     type: Boolean,
//     default: false
//   }
// },
  data() {
    return {
      message: '',
      isShow: false
    }
  },
methods: {
  show(message='Toast', duration=1000) {
    // 以前给参数默认值的方式
    // duration = duration || 2000
    this.isShow = true
    this.message = message
    setTimeout(() => {
      this.isShow = false
      this.message = ''
    }, duration)
  }
}
}
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 99;
    transform: translate(-50%, -50%);
    padding: 8px 10px;
    border-radius: 5px;
    background-color: rgba(0,0,0,.7);
    color: #fff;

  }

</style>
