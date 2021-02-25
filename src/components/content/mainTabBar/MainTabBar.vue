<template>
  <tab-bar class="tab-bar">
    <tab-bar-item link="/home" active-color="deepPink">
      <span class="iconfont icon-shouye" slot="item-icon"></span>
      <span class="iconfont icon-shouyefill" slot="item-icon-active"></span>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category" active-color="deepPink">
      <span class="iconfont icon-caidan" slot="item-icon"></span>
      <span class="iconfont icon-caidan-copy" slot="item-icon-active"></span>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart" active-color="deepPink">
      <span class="iconfont icon-gouwuche" slot="item-icon"></span>
      <span class="iconfont icon-gouwuchefill" slot="item-icon-active"></span>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile" active-color="deepPink">
      <span class="iconfont icon-wode" slot="item-icon"></span>
      <span class="iconfont icon-wodefill" slot="item-icon-active"></span>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
</style>
