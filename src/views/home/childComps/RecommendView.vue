<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  /*  父盒子 水平分布*/
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eeeeee;
}

.recommend-item {
  flex: 1;
/*  子盒子 均等分*/
}

.recommend-item img {
  height: 70px;
  width: 70px;
  margin-bottom: 10px;
}
</style>
