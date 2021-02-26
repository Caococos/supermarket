import {debounce} from "@/common/utils";

export const itemListenerMixin = {
  data() {
    return {
      itemListener: null
    }
  },
  mounted() {
    // 监听item中图片加载完成 刷新scrollerHeight
    const refresh = debounce(this.$refs.scroll.refresh, 300)
    this.itemListener = () => {
      refresh()
    }
    this.$bus.$on('itemImagesLoad', this.itemListener)
    console.log('我是mixins');
    //  所有的组件都有一个属性$el：用于获取组件中的元素
  },
}
