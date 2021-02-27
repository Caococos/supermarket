<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">浩旭的衣柜</div></nav-bar>
    <tab-control :titles="['流行', '新款', '精选']"
                 @tabClick="tabClick"
                 class="tab-control"
                 v-show="isTabFixed"
                 ref="tabControl1"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true" @pullingUp="loadMore">
<!--         能请求到数据才用到这个事件   @pullingUp="loadMore"-->

      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view></feature-view>
      <tab-control :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick"
                   ref="tabControl2"/>
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

//常量、方法导入
import {getHomeMultidata, getHomeData, BANNER, RECOMMEND} from "@/network/home";
import {POP, NEW, SELL, BACK_TOP_DISTANCE} from "@/common/const";
import {backTopMixin, itemListenerMixin} from "@/common/mixins";
import {debounce} from "@/common/utils";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goodsList: {
        'pop': {page: 1, list: []},
        'new': {page: 1, list: []},
        'sell': {page: 1, list: []},
      },
      currentType: POP,
      tabOffControl: 0,
      isTabFixed: false,
      saveY: 0,
    }
  },
  //函数调用 -> 压入函数栈（保存函数调用过程中所有变量）
  //函数调用结束 -> 弹出函数栈（释放函数所有的变量）
  created() {
    //请求多个数据
      this.getMultiData()
  //  请求商品数据
    this.getHomeProducts(POP)
    this.getHomeProducts(NEW)
    this.getHomeProducts(SELL)
  },
  mixins: [itemListenerMixin, backTopMixin],
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
    this.$bus.$off('itemImagesLoad', this.itemListener)
  },
  updated() {
    //zhihaot1：当back-top组件出现时，调用updated，刷新scrollerHeight
    //当有数据接口时，还是使用mounted里面的方法
    // this.$refs.scroll.refresh()
    // console.log('updated');
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
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    contentScroll(position) {
      //判断backTop是否显示
      this.isShowBackTop = (-position.y) > BACK_TOP_DISTANCE
    //  决定tabControl是否吸顶（position: fixed）
      this.isTabFixed = (-position.y) > this.tabOffControl
    },
    loadMore() {
      this.getHomeProducts(this.currentType)
    },
    swiperImageLoad() {
      //  所有的组件都有一个属性$el：用于获取组件中的元素
      this.tabOffControl = this.$refs.tabControl2.$el.offsetTop
    },

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
    //商品数据请求
    getHomeProducts(type) {
      getHomeData(type, this.goodsList[type].page).then(res => {
        const goodsList = res.data.list;
                   // push(...数组名)是将数组中的元素依次解析并push到list里去。
        this.goodsList[type].list.push(...goodsList)
        this.goodsList[type].page += 1
         // 完成下拉加载更多 再次请求数据调用
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
#home {
  /* 这里也可以加相对定位，给下面的scroll（.content）做锚点 */
  /*position: relative;*/
  /*padding-top: 44px;*/
  /* 100%视口的高度  两种方案都需要父盒子的高度 */
  height: 100vh;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.content {
  /*margin-top: 44px;*/
  /*height: calc(100% - 96px);*/
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 52px;
  left: 0;
  right: 0;
}

.tab-control {
  position: relative;
  z-index: 9;
}
</style>
