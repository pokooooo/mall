<template>
  <div class="cart">
    <nav-bar class="cart-nav-bar">
      <template #center>
        购物车({{$store.getters.getListLength}})
      </template>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import Scroll from "../../components/common/scroll/Scroll";

  import NavBar from "../../components/common/navbar/NavBar";
  import CartList from "./childComs/CartList";
  import CartBottomBar from "./childComs/CartBottomBar";

  export default {
    name: "Cart",
    components: {
      Scroll,
      NavBar,
      CartList,
      CartBottomBar
    }
  }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }

.cart-nav-bar{
  background-color: var(--color-high-text);
  color: #fff;
}



</style>
