<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"/></div>
    <div v-else :style="activeStyle"><slot name="item-icon-active"/></div>
    <div :style="activeStyle"><slot name="item-text"/></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1
    //  tabBar-TabBarItem的颜色动态控制
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link)
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  margin-top: 3px;
}
.tab-bar-item div {
  font-size: 14px;
}
.tab-bar-item span {
  font-size: 22px;
}
</style>
