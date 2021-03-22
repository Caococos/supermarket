<template>
  <div id="detail">
    <detail-navbar @titleClick="titleClick" ref="nav"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3" @scroll="contentScroll">
<!--      属性：topImages 传入值：top-images -->
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo" ref="paramInfo"/>
      <detail-comment-info :comment-info="commentInfo" ref="commentInfo"/>
      <goods-list :goods="goodsList" ref="recommendInfo"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <detail-bottom-bar @addToCart="addToCart"/>
  </div>

</template>

<script>
import DetailNavbar from "@/views/detail/childComps/DetailNavbar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

import Scroll from "@/components/common/scroll/Scroll";
import GoodsList from "@/components/content/goods/GoodsList";

import {debounce} from "@/common/utils";
import {mapActions} from "vuex"

import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "@/network/detail";
import {backTopMixin, itemListenerMixin} from "@/common/mixins";
import {BACK_TOP_DISTANCE} from "@/common/const";

export default {
  name: "Detail",
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      goodsList: [],
      themeTops: [0],
      currentIndex: 0,
      getThemeTopY: null,
      show: false,
      message: ''
    }
  },
  created() {
  //1.保存传入的iid
    this.iid = this.$route.params.iid

  //  2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      const data = res.result
    //  1.获取顶部的图片轮播数据
      this.topImages = data.itemInfo.topImages
    //  2.获取商品数据
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
    //  3.获取商家数据
      this.shop = new Shop(data.shopInfo)
    //  4.保存商品的详情数据
      this.detailInfo = data.detailInfo
    //  5.获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
    //  6.获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
        // 第一次获取，值不对：this.$refs.paramInfo.$el没有渲染
        // 第二次获取，值不对：图片没有计算在内
        // 根据最新的数据，对应的DOM已经被渲染出来了
        // 但是图片依然没有加载完
        //offsetTop值不对的时候，主要是因为图片的问题
        // this.$nextTick(() => {
        //   this.themeTops.push(this.$refs.paramInfo.$el.offsetTop)
        //   this.themeTops.push(this.$refs.commentInfo.$el.offsetTop)
        //   this.themeTops.push(this.$refs.recommendInfo.$el.offsetTop)
        //   console.log(this.themeTops);
        // })
      }
    })
  // 3.请求推荐数据
    getRecommend().then(res => {
      this.goodsList = res.data.list
    })
  //  4.给getThemeTopY赋值
    this.getThemeTopY = debounce(() => {
      this.themeTops.push(this.$refs.paramInfo.$el.offsetTop)
      //这里考虑了一下没有评论的情况
      if (this.$refs.commentInfo.$el.offsetTop) {
        this.themeTops.push(this.$refs.commentInfo.$el.offsetTop)
      }else this.themeTops.push(this.$refs.recommendInfo.$el.offsetTop)
      this.themeTops.push(this.$refs.recommendInfo.$el.offsetTop)
      this.themeTops.push(Number.MAX_VALUE)
    },100)

  },
  mixins: [itemListenerMixin, backTopMixin],
  destroyed() {
    this.$bus.$off('itemImagesLoad', this.itemListener)
  },
  methods: {
    ...mapActions(['addCart']),
    imageLoad() {
      this.$refs.scroll.refresh()
      //每次刷新图片都会调用防抖函数，每次的函数都会被刷新。 可以将防抖函数定义到data中
      // const refresh = debounce(this.$refs.scroll.refresh, 300)
      // refresh()
      // 这里不需要防抖函数也OK，因为这个函数只会调用一次
      this.getThemeTopY()
    },
    titleClick(index) {
      //这里赋值 图片还未加载完，要等到refresh被调用才是正确的值
      // this.themeTops[1] = this.$refs.paramInfo.$el.offsetTop
      // this.themeTops[2] = this.$refs.commentInfo.$el.offsetTop
      // this.themeTops[3] = this.$refs.recommendInfo.$el.offsetTop
      // console.log(this.themeTops);
      this.$refs.scroll.scrollTo(0, -this.themeTops[index], 100)
    },
    // 监听滚动事件
    contentScroll(position) {
      // 1.获取Y值
      const positionY = -position.y
      //2.positionY与标题中的值进行对比
      // for (let i of this.themeTops)
      // 这里的i是个字符串
      let length = this.themeTops.length
      for (let i =0; i < length-1; i++) {
        // if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTops[i] && positionY < this.themeTops[i+1]) ||
        //   (i === length - 1 && positionY >= this.themeTops[i]))) {
        //   this.currentIndex = i;
        //   this.$refs.nav.currentIndex = i;
        // }
        // 优化版本
        if (this.currentIndex !== i && (positionY >= this.themeTops[i] && positionY < this.themeTops[i+1])) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = i;
        }
      }
      this.isShowBackTop = (positionY) > BACK_TOP_DISTANCE
    },
    addToCart() {
    //  1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
    //  2.将商品添加到购物车
    //     this.$store.cartList.push(product)
    //   this.$store.commit('addCart', product)
    //   this.$store.dispatch('addCart', product).then(res => {
    //     console.log(res);
    //   })
    //  将actions中的函数映射到detail
      this.addCart(product).then(res => {
        // this.show = true
        // this.message = res
        //
        // setTimeout(() => {
        //   this.show = false
        //   this.message = ''
        // }, 1500)
        this.$toast.show(res)
      })
    }
  }
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .content {
    position: relative;
    height: calc(100% - 102px);
    overflow: hidden;
  }
</style>
