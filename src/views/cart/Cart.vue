<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list/>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "@/views/cart/childComps/CartList";
import CartBottomBar from "@/views/cart/childComps/CartBottomBar";

import {mapGetters} from "vuex"

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    //这样写太麻烦了，用mapGetters吧
    // cartLength() {
    //   return this.$store.getters.cartLength
    // }
  //  两种语法
  //   ...mapGetters(['cartLength', 'cartList'])
    ...mapGetters({
      length: 'cartLength',
    })
  },
}
</script>

<style scoped>
.cart {
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}

</style>
