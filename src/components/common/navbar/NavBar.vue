<template>
  <div class="nav-bar">
    <div class="nav-left"><slot name="left"></slot></div>
    <div class="nav-center"><slot name="center"></slot></div>
    <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>
.nav-bar {
  /* 在使用浏览器原生滚动时，为了让导航不跟随一起滚动 */
  /*position: fixed;*/
  /*left: 0;*/
  /*right: 0;*/
  /*top: 0;*/
  /*z-index: 10;*/
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  /*border-bottom: 1px solid #eee;*/
  /*box-shadow: 0 1px 1px rgba(100,100,100,.08);*/
}

.nav-left {
  width: 60px;
}

.nav-center {
  flex: 1;
}

.nav-right {
  width: 60px;
}
</style>
