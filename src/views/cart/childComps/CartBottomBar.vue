<template>
  <div class="bottom-bar">
    <div class="left">
      <check-button/>
      <div class="check-text">全选</div>
    </div>
    <div class="center">合计：{{totalPrice}}</div>
    <div class="right">结算：({{checkLength}})</div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";
import {mapGetters} from 'vuex'

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return '￥' + this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    position: relative;
    height: 40px;
    background-color: #eee;
    display: flex;
    font-size: 13px;
  }

  .left {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 80px;
  }

  .check-text {
    margin-left: 5px;
  }

  .center {
    line-height: 40px;
    flex: 1;
  }

  .right {
    width: 90px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background-color: red;
  }



</style>
