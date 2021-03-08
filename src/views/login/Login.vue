<template>
  <div id="login">
    <nav-bar>
      <div slot="left" class="back" @click="backClick"><span class="iconfont icon-arrowLeft"></span></div>
      <div slot="center">登录注册</div>
    </nav-bar>
    <login-info></login-info>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import LoginInfo from "@/views/login/childComps/LoginInfo";
export default {
  name: "Login",
  components: {
    NavBar,
    LoginInfo
  },
  methods: {
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.back span {
  font-size: 30px;
}

</style>
