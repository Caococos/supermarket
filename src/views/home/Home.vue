<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物小镇</div></nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true">
<!--         能请求到数据才用到这个事件   @pullingUp="loadMore"-->

      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <feature-view></feature-view>
      <tab-control :titles="['流行', '新款', '精选']" class="tab-control"
                   @tabClick="tabClick"/>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
//Home组件
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

//其他组件
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/BackTop";

//常量、方法导入
import {getHomeMultidata, BANNER, RECOMMEND} from "@/network/home";
import {POP, NEW, SELL} from "@/common/const";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goodsList: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: POP,
      isShowBackTop: false
    }
  },
  //函数调用 -> 压入函数栈（保存函数调用过程中所有变量）
  //函数调用结束 -> 弹出函数栈（释放函数所有的变量）
  created() {
    //请求多个数据
      this.getMultiData()
  //  请求商品数据
  //   this.getHomeProducts(POP)
  //   this.getHomeProducts(NEW)
  //   this.getHomeProducts(SELL)

  },
  updated() {
    // 页面发生刷新，刷新滚动高度
    this.$refs.scroll.scroll.refresh()
    console.log('页面刷新，我大giao一声');
  },
  //在上面直接调用数据显得太臃肿，所以用计算属性良改
  computed: {
    showGoods() {
      return this.goodsList[this.currentType].list
    }
  },
  methods: {
    /**
     *事件监听相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
    },
    backClick() {
      //在Scroll组件中包装好后的方法
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 500
    },
    // loadMore() {
    //   this.HomeProducts(this.currentType)
    // },
    /**
     * 网络请求相关方法
     */
    getMultiData() {
      getHomeMultidata().then(res => {
        this.banners = res.data[BANNER].list
        this.recommends = res.data[RECOMMEND].list
        // this.$refs.scroll.scroll.refresh()
        // 下次更新DOM时,获取新的tabOffsetTop值(不保险,可以在updated钩子中获取)
        // this.$nextTick(() => {
        //   this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
        // })
      })
    },
    // getHomeProducts(type) {
    //   getHomeData(type, this.goodsList[type].page).then(res => {
    //     const goodsList = res.data.list;
    //                push(...数组名)是将数组中的元素依次解析并push到list里去。
    //     this.goodsList[type].list.push(...goodsList)
    //     this.goodsList[type].page += 1
    //      再次请求数据调用
        // this.$refs.scroll.finishPullUp()
      // })
    // }
  }
}
</script>

<style scoped>
#home {
  /* 这里也可以加相对定位，给下面的scroll（.content）做锚点 */
  /*position: relative;*/
  /*padding-top: 44px;*/
  /* 100%视口的高度 */
  height: 100vh;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.tab-control {
  /* 该属性只有在原生滚动时才起效果，因为在BScroll插件下，浏览器无法侦测到它的位置 */
  /*position: sticky;*/
  /*top: 44px;*/
  z-index: 9;
}

.content {
  margin-top: 44px;
  height: calc(100% - 96px);
  /*overflow: hidden;*/
  /*position: absolute;*/
  /*top: 44px;*/
  /*bottom: 52px;*/
  /*left: 0;*/
  /*right: 0;*/
}
</style>
