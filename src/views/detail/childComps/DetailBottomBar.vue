<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <span class="iconfont icon-wang_light"></span>
        <div class="text">客服</div>
      </div>
      <div>
        <span class="iconfont icon-shop"></span>
        <div class="text">店铺</div>
      </div>
      <div>
        <span class="iconfont icon-favor"></span>
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    height: 58px;
    background-color: #fff;
    display: flex;
    text-align: center;
  }

  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-item>div {
    flex: 1;
  }

  .bar-left {
    padding-top: 10px;
    height: 58px;
  }
  .bar-left span{
    font-size: 22px;
  }

  .bar-left .text {
    font-size: 13px;
  }

  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }

  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }

  .bar-right .buy {
    background-color: #f69;
  }

</style>
