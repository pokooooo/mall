<template>
        <scroll class="cart-content" ref="scroll">
            <cart-list-item v-for="(item,index) in $store.getters.getListItem" :key="index"
            :product="item"></cart-list-item>
        </scroll>
</template>

<script>
    import Scroll from "../../../components/common/scroll/Scroll";

    import CartListItem from "./CartListItem";

    export default {
        name: "CartList",
        components: {
            CartListItem,
            Scroll
        },
        activated() {
            this.$refs.scroll.refresh()
        }
    }
</script>

<style scoped>


    .cart-content {
        height: calc(100% - 44px - 49px - 40px);
        overflow: hidden;
    }
</style>