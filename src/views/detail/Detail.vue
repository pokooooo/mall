<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="nav"></detail-nav-bar>
        <scroll class="detail-content" ref="scroll"
                :probe-type="3" @contentScroll="contentScroll">
            <detail-swiper :topImages="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
            <detail-param-info :param-info="paramInfo" ref="paramInfo"></detail-param-info>
            <detail-comment-info :comment-info="commentInfo" ref="commentInfo"></detail-comment-info>
            <goods-list :goods="recommends" ref="recommendInfo"></goods-list>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"/>
        <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    </div>
</template>

<script>
    import {itemListenerMixin,backTopMixin} from "../../common/mixins";

    import Scroll from "../../components/common/scroll/Scroll";
    import GoodsList from "../../components/content/goods/GoodsList";

    import DetailNavBar from "./childComs/DetailNavBar";
    import DetailSwiper from "./childComs/DetailSwiper";
    import DetailBaseInfo from "./childComs/DetailBaseInfo";
    import DetailShopInfo from "./childComs/DetailShopInfo";
    import DetailGoodsInfo from "./childComs/DetailGoodsInfo";
    import DetailParamInfo from "./childComs/DetailParamInfo";
    import DetailCommentInfo from "./childComs/DetailCommentInfo";
    import DetailBottomBar from "./childComs/DetailBottomBar";


    import {detail,getRecommend,Goods,Shop,GoodsParam} from "../../network/detail";

    export default {
        name: "Detail",
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            DetailGoodsInfo,
            DetailParamInfo,
            DetailCommentInfo,
            DetailBottomBar,
            Scroll,
            GoodsList,
        },
        mixins: [itemListenerMixin, backTopMixin],
        destroyed() {
            this.$bus.$off('itemImagesLoad', this.itemListener)
        },
        data(){
            return {
                iid: null,
                topImages: null,
                goods: {},
                shop: {},
                detailInfo: {},
                paramInfo: {},
                commentInfo: {},
                recommends: [],
                themeTops: [0],
                currentIndex: 0,
            }
        },
        created() {
            //通过iid获得对应数据
            this.iid = this.$route.params.iid
            //请求详细数据
            detail(this.iid).then(res => {
                const data = res.result
                //获取顶部的图片轮播数据
                this.topImages = data.itemInfo.topImages
                //获得商品信息
                this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
                //获取商家数据
                this.shop = new Shop(data.shopInfo)
                //保存商品的详情数据
                this.detailInfo = data.detailInfo
                //获取参数信息
                this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
                //获取评论信息
                if (data.rate.cRate !== 0) {
                    this.commentInfo = data.rate.list[0]
                }
            })
            //请求推荐数据
            getRecommend().then(res => {
                this.recommends = res.data.list
            })
        },
        methods: {
            imageLoad() {
                this.$refs.scroll.refresh()

                this.themeTops.push(this.$refs.paramInfo.$el.offsetTop)
                //可能没有评论，则用推荐的位置补上
                if (this.$refs.commentInfo.$el.offsetTop) {
                    this.themeTops.push(this.$refs.commentInfo.$el.offsetTop)
                }else this.themeTops.push(this.$refs.recommendInfo.$el.offsetTop)
                this.themeTops.push(this.$refs.recommendInfo.$el.offsetTop)
            },
            titleClick(index) {
                this.$refs.scroll.scrollTo(0, -this.themeTops[index], 100)
            },
            contentScroll(position){
                const positionY = -position.y
                let length = this.themeTops.length
                for (let i =0; i < length-1; i++) {
                    if (this.currentIndex !== i && (positionY >= this.themeTops[i] && positionY < this.themeTops[i+1])) {
                        this.currentIndex = i;
                        this.$refs.nav.currentIndex = i;
                    }
                }
                this.isShowBackTop = (positionY) > 500
            },
            addToCart(){
                //获取购物车需要展示的信息
                const product = {}
                product.image = this.topImages[0]
                product.title = this.goods.title
                product.desc = this.goods.desc
                product.price = this.goods.realPrice
                product.iid = this.iid
                //添加到购物车
                this.$store.dispatch('addToCart',product).then(res => this.$toast.show(res))
                //提示添加成功
            }
        }
    }
</script>

<style scoped>
    #detail{
        position: relative;
        z-index: 9;
        background-color: #fff;
        height: 100vh;
    }

    .detail-nav-bar{
        position: relative;
        z-index: 9;
    }

    .detail-content{
        overflow: hidden;
        height: calc(100% - 44px - 58px)
    }
</style>