import {debounce} from "@/common/utils";
import BackTop from "@/components/content/BackTop";

export const itemListenerMixin = {
  data() {
    return {
      itemListener: null
    }
  },
  mounted() {
    // 监听item中图片加载完成 刷新scrollerHeight
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.itemListener = () => {
      refresh()
    }
    // 开启监听事件写在activated
    // this.$bus.$on('itemImagesLoad', this.itemListener)
  },
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    //methods 中只合并大的函数，函数内部的东西无法合并，会覆盖
    //生命周期函数内部可以合并
    backClick() {
      //在Scroll组件中包装好后的方法
      this.$refs.scroll.scrollTo(0, 0)
    }
  }
}
