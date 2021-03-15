<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><template #center ><div>购物街</div></template></nav-bar>
    <tab-control :titles="['流行','新款','精选']" @changeTab="changeTab"
                 ref="tabControl1" class="tab-control" v-show="isTabFixed"></tab-control>
    <scroll class="content" ref="scroll"
            :probe-type="3" @contentScroll="contentScroll"
            :pull-up-load="true" @pullUpLoad="pullUpLoad">
      <home-swiper :banners="banners" @swiperImageLoad.once="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" @changeTab="changeTab" ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="show"></back-top>
  </div>
</template>

<script>
  import {itemListenerMixin} from "../../common/mixins";

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "../../components/common/navbar/NavBar";
  import Scroll from "../../components/common/scroll/Scroll";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import BackTop from "../../components/content/backTop/BackTop";

  import {getHomeMulidata,getHomeGoods} from "../../network/home";


  export default {
    name: "Home",
    data(){
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 1, list: []},
          'new': {page: 1, list: []},
          'sell': {page: 1, list: []}
          },
        goodsType: 'pop',
        show: true,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    mixins: [itemListenerMixin],
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      Scroll,
      TabControl,
      GoodsList,
      BackTop
    },
    created() {
      //获得数据及加载第一页
      this.getHomeMulidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    activated() {
      //回到离开时的y坐标
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      //获得离开时的y坐标
      this.saveY = this.$refs.scroll.getScrollY()
    },
    methods: {
      /**
       * 事情监听相关方法
       */
      //防抖动
      debounce(func,delay){
        let timer = null
        return function (...args) {
          if(timer) clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this,args)
          },delay)
        }
      },
      //改变商品展示种类
      changeTab(index){
        switch (index) {
          case 0:
            this.goodsType = 'pop'
            break
          case 1:
            this.goodsType = 'new'
            break
          case 2:
            this.goodsType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      //回到顶部
      backTop(){
        this.$refs.scroll.scrollTo(0,0)
      },
      //吸顶效果
      contentScroll(position){
        //  判断BackTop是否显示
        this.show = (-position.y) > 1000
        //  决定tabControl是否吸顶
        this.isTabFixed = (-position.y) > this.tabOffsetTop

      },
      //上拉加载更多
      pullUpLoad(){
        this.getHomeGoods(this.goodsType)
      },
      //获得tab-control高度
      swiperImageLoad(){
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },



      /**
       * 网络请求相关方法
       */
      getHomeMulidata(){
        getHomeMulidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        getHomeGoods(type,this.goods[type].page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
        })
      }
    },
    computed: {
      showGoods(){
        return this.goods[this.goodsType].list
      }
    }
  }

</script>

<style scoped>
  #home {
    height: 100vh;  /*窗体高度*/
    /*padding-top: 44px;*/
    /*position: relative;*/
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }

  /*设定betterScroll使用范围*/
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .tab-control{
    position: relative;
    z-index: 9;
  }
</style>
