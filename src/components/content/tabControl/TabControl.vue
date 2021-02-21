<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles"
         :class="{active: index === currentIndex}"
         @click="clickItem(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    clickItem(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
}

.tab-control div {
  flex: 1;
}

.tab-control span {
  padding: 5px;
}

.active span {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-high-text);
}

</style>
