<template>
  <div id="btn-login">
    <a @click="clickLogin" class="login" :style="{backgroundColor: bgColor, color: color, border: border}">{{this.text}}</a>
  </div>
</template>

<script>
export default {
  name: "BtnLogin",
  props: {
    text: {
      type: String,
      default: '登录'
    },
    bgColor: {
      type: String,
      default: '#fff'
    },
    color: {
      type: String,
      default: '#f574ba'
    },
    border: {
      type: String,
      default: '1px solid #f574ba'
    }
  },
  methods: {
    clickLogin() {

    }
  }
}
</script>

<style scoped>
  #btn-login {
    font-weight: 600;
  }

  .login {
    display: block;
    margin-top: 10px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 50px;

  }

</style>
