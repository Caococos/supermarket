<template>
  <div id="detail">
    <detail-navbar/>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo"/>
      <detail-comment-info :comment-info="commentInfo"/>
      <goods-list :goods="goodsList"></goods-list>
    </scroll>
  </div>

</template>

<script>
import DetailNavbar from "@/views/detail/childComs/DetailNavbar";
import DetailSwiper from "@/views/detail/childComs/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComs/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComs/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childComs/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childComs/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/childComs/DetailCommentInfo";
import GoodsList from "@/components/content/goods/GoodsList";

import Scroll from "@/components/common/scroll/Scroll";

import {debounce} from "@/common/utils";

import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "@/network/detail";
import {itemListenerMixin} from "@/common/mixins";

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
      themeTops: [],
      currentIndex: 0,
    }
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid

  //  2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      const data = res.result
    //  1.获取顶部的图片轮播数据
      console.log(res);
      this.topImages = data.itemInfo.topImages
      //2.获取商品数据
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
      }
    })

    // 3.请求推荐数据
    getRecommend().then(res => {
      this.goodsList = res.data.list
    })

  },
  mixins: [itemListenerMixin],
  destroyed() {
    this.$bus.$off('itemImagesLoad', this.itemListener)
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
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
    height: calc(100% - 44px);
    overflow: hidden;
  }
</style>
