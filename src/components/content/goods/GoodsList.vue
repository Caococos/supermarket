<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick() {
      // this.$router.push('/detail/' + this.goods.iid)
      this.$router.push('/detail/' + 1111)
    }
  }
}
</script>

<style scoped>
.goods {
  /* 水平分布 均等分布 */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.btnDetail {
  border: 2px solid;
  border-radius: 10px;
}

</style>
