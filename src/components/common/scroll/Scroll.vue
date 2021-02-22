<template>
  <div ref="wrapper">
    <div class="content"><slot></slot></div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    const wrapper = this.$refs.wrapper
    // 初始化DOM没有渲染完，滚动滚不到底部，需要加定时器
    // setTimeout(() => {
    //   this.scroll = new BScroll(wrapper, {
    //     click: true,
    //     probeType: this.probeType,
    //     pullUpLoad: this.pullUpLoad
    //   })
    //   this.scroll.on('scroll', position => {
    //     this.$emit('scroll', position)
    //   })
    //   this.scroll.on('pullingUp', () => {
    //     this.$emit('pullingUp')
    //   })
    // },1000)
    this.scroll = new BScroll(wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    this.scroll.on('scroll', position => {
      this.$emit('scroll', position)
    })
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo(x, y, time=500) {
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    }
  }
}
</script>
<!--scoped:作用域，只会在当前组件内起效果-->
<style scoped>
</style>
