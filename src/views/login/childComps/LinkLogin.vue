<template>
  <div class="link-login">
    <h4>其他登录方式</h4>
    <div class="login-way">
      <span class="iconfont icon-qq"></span>
      <span class="iconfont icon-weixin"></span>
    </div>
  </div>
</template>

<script>
export default {
name: "LinkLogin"
}
</script>

<style scoped>
  .link-login {
    margin-top: 30px;
    text-align: center;
    border-top: 1px solid rgba(0,0,0,.1);
  }

  .link-login h4 {
    font-size: 12px;
    margin: -7px auto 0;
    background-color: #fff;
    width: 140px;
  }

  .login-way {
    margin: 25px 0 0;
  }

  .link-login .iconfont {
    font-size: 40px;
    padding: 0 15px 0;
  }

</style>
