<template>
  <div id="user-info">
    <div class="user-icon">
      <span class="iconfont icon-profile_light"/>
      <span class="text">当前为未登录状态</span>
      <span class="login right" @click="goToLogin">登录/注册</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserInfo",
    methods: {
      goToLogin() {
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
  #user-info {
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: -5px;
  }

  .user-icon .text{
    vertical-align: middle;
  }

  .user-icon .iconfont {
    vertical-align: middle;
    font-size: 50px;
  }

  .login {
    font-size: 18px ;
  }
</style>
