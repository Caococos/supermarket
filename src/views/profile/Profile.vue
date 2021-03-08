<template>
  <div id="profile">
    <nav-bar class="nav-bar"><div slot="center">我的</div></nav-bar>
    <user-info/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import UserInfo from "@/views/profile/childComps/UserInfo";


export default {
  name: "Profile",
  components: {
    NavBar,
    UserInfo
  }
}
</script>

<style scoped>
#profile {
  background-color: var(--color-tint);
  color: #fff;
}

</style>
