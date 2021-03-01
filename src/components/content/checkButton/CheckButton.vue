<template>
  <div class="check-button" :class="{check: isCheck}">
    <span class="iconfont icon-check"></span>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  data() {
    return {

    }
  },
  props: {
    isCheck: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>
  .check-button {
    height: 16px;
    color: #fff;
    border-radius: 50%;
    border: 1px solid #aaa;
  }

  .check-button span {
    font-size: 14px;
  }

  .check {
    background-color: red;
    border-color: red;
  }

</style>
