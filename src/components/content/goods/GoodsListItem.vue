<template>
  <div class="goods" @click="goToDetail">
    <img :src="getImg" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
<!--      将父组件传来的数据中的具体数值展示-->
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImagesLoad')

    //  通过发出不同的事件来解决
    //   if (this.$route.path.indexOf('/home')) {
    //     this.$bus.$emit('homeItemImagesLoad')
    //   }else if (this.$route.path.indexOf('/detail')) {
    //     this.$bus.$emit('detailItemImagesLoad')
    //   }
    },
    goToDetail() {
      // 因为有些图片是没有连接的所以给它加个判断
      if (this.goodsItem.iid) {
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    }
  },
  computed: {
    getImg() {
      return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
    }
  }
}
</script>

<style scoped>
.goods {
  padding-bottom: 40px;
  position: relative;
  /*盒子宽度设置为百分比，在各种设备中都能正常显示*/
  width: 48%;
}
.goods img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  /*让文字在一行内显示，如有多则省略成点*/
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  /*用伪元素将收藏的按钮展示*/
  content: '';
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
