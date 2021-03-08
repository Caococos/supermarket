<template>
  <div id="login-info">
    <div class="login" v-if="isShow">
      <p class="user-name">
        <input type="text" placeholder="用户名/邮箱/手机号">
      </p>
      <p class="user-name">
        <input type="password" placeholder="请输入密码" autocomplete="new-password ">
      </p>
    </div>
    <div class="login" v-else>
      <p class="user-login user-name">
        <label for="username" class="area-box"><span>+86</span></label>
        <input class="user-input" type="text" placeholder="请输入手机号" id="username">
      </p>
      <p class="user-login user-psw">
        <input class="user-input" type="password" placeholder="请输入收到的验证码" autocomplete="new-password ">
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: "LoginInfo",
  data() {
    return {
      isShow: false
    }
  }
}
</script>

<style scoped>
  #login-info {}

  .login {
    position: relative;
    width: 100%;
    text-align: center;
  }

  .user-login{
    border-bottom: 1px solid silver;
    margin-left: 33px;
    height: 50px;
    width: 270px;
  }

  .user-input{
    margin: 20px 0;
    text-align: center;
    border: none;
    outline: none;
  }

  .area-box {
    position: absolute;
    top: 16px;
    left: 0;
    right: 244px;
  }

</style>
