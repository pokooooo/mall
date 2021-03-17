<template>
  <div class="profile-content">
      <ProfileNavBar></ProfileNavBar>
      <scroll class="profile-scroll">
          <ProfileHeader></ProfileHeader>
          <profile-item></profile-item>
          <profile-form></profile-form>
          <div class="goods-list">
              <div class="title">精选推荐</div>
              <goods-list :goods="Goods"></goods-list>
          </div>
      </scroll>
  </div>
</template>

<script>
import ProfileNavBar from "./childcoms/ProfileNavBar";
import ProfileHeader from "./childcoms/ProfileHeader";
import ProfileItem from "./childcoms/ProfileItem";
import ProfileForm from "./childcoms/ProfileForm";
import GoodsList from "../../components/content/goods/GoodsList";
import Scroll from "../../components/common/scroll/Scroll";

  export default {
    name: "Profile",
      components:{
        ProfileNavBar,
          ProfileHeader,
          ProfileItem,
          ProfileForm,
          GoodsList,
          Scroll
      },
      data(){
        return {
            Goods: [
                {title: '精选冬装',image: require('../../assets/img/profile/lg_2933860_1586670406_5e92ab46e2d89.jpg'),price: '??',cfav: 999},
                {title: '撩爱计划',image: require('../../assets/img/profile/lg_3002377_1587914817_5ea5a841e16cd.jpg'),price: '??',cfav: 999},
                {title: '潮流男鞋',image: require('../../assets/img/profile/lg_3351346_1600959469_5f6cb3eddc43c.jpg'),price: '??',cfav: 999},
                {title: '智能电器',image: require('../../assets/img/profile/lg_3486531_1605431959_5fb0f2970ed6f.jpg'),price: '??',cfav: 999},
                {title: '温泉度假',image: require('../../assets/img/profile/lg_3610079_1608098370_5fd9a24247fa8.jpg'),price: '??',cfav: 999},
                {title: '补水神器',image: require('../../assets/img/profile/t01e7cbd1b020caa4ca.jpg'),price: '??',cfav: 999}
            ]
        }
      }
  }
</script>

<style scoped>
  .profile-content{
      background-color: rgba(0,0,0,.05);
  }

    .profile-content{
        height: 100vh;
    }

    .profile-scroll{
        overflow: hidden;
        height: calc(100% - 44px - 58px)
    }

    .title{
        color: red;
        background: #fff;
        font-size: 18px;
        text-align: center;
        padding: 10px 0;
    }

    .goods-list{
        margin: 10px;
        background: #fff;
    }
</style>
