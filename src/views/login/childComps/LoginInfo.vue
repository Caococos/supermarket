<template>
  <div id="login-info">
    <div class="login" v-if="isShow">
      <p class=" user-login">
        <input class="user-input" type="text" placeholder="用户名/邮箱/手机号">
      </p>
      <p class=" user-login">
        <input class="user-input" type="password" placeholder="请输入密码" autocomplete="new-password ">
      </p>
    </div>
    <div class="login" v-else>
      <p class="user-login user-name">
        <label for="username" class="area-box"><span>+86</span><span class="iconfont icon-unfold"></span></label>
        <input class="user-input" type="text" placeholder="请输入手机号" id="username">
      </p>
      <p class="user-login user-psw">
        <input class="user-input" type="password" placeholder="请输入收到的验证码" autocomplete="new-password ">
        <button class="verifi-code">获取验证码</button>
      </p>
    </div>
    <btn-login :bg-color="'var(--color-tint)'" :color="'#fff'"/>
    <btn-login :text="'一键登录'"/>
    <p class="account">
      <span class="account-login" @click="clickIsShow">账号密码登录</span>
      <span class="account-register" @click="clickNotShow">手机快速注册</span>
    </p>
    <link-login></link-login>
  </div>
</template>

<script>
import BtnLogin from "@/views/login/childComps/BtnLogin";
import LinkLogin from "@/views/login/childComps/LinkLogin";

export default {
  name: "LoginInfo",
  components: {
    BtnLogin,
    LinkLogin
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    clickIsShow() {
      this.isShow = true
    },
    clickNotShow() {
      this.isShow = false
    }
  }
}
</script>

<style scoped>
  #login-info {
    padding: 0 25px;
  }

  .login {
    position: relative;
    width: 100%;
  }

  .user-login{
    margin: 20px 0 0;
    border-bottom: 1px solid silver;
    height: 50px;
    line-height: 50px;
  }

  .area-box .icon-unfold {
    margin-left: 5px  ;
  }

  .user-input{
    border: none;
    outline: none;
    height: 29px;
    font-size: 16px;
  }

  .area-box {
    margin-right: 10px;
    color: #000;
  }

  .verifi-code {
    position: absolute;
    top: 85px;
    right: 17px;
    border: 0;
    border-left: 1px solid #ccc;
    background: #fff;
    padding-left: 15px;
  }

  .account {
    padding-top: 30px;
    font-size: 14px;
    overflow: hidden;
  }

  .account-login {
    float: left;
  }
  .account-register {
    float: right;
  }

</style>
