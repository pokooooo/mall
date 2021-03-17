<template>
    <div class="profile-form">
        <div >
            <strong>我的订单</strong>
            <span>查看全部 <img src="~assets/img/profile/jiantou.png" alt=""></span>
        </div>
        <div class="order">
            <div v-for="(item,index) in order" :key="index">
                <img :src="item.image" alt="">
                <div>{{item.text}}</div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileForm",
        data(){
            return {
                order:[
                    {text: '待付款',image: require('../../../assets/img/profile/fukuan.png')},
                    {text: '待分享',image: require('../../../assets/img/profile/fenxiang.png')},
                    {text: '待发货',image: require('../../../assets/img/profile/fahuo.png')},
                    {text: '待收获',image: require('../../../assets/img/profile/fukuan.png')},
                    {text: '待评价',image: require('../../../assets/img/profile/pingjia.png')},
                ]
            }
        }
    }
</script>

<style scoped>
    .profile-form{
        padding-top: 10px;
        margin: 10px;
        background-color: #fff;
        border-radius: 10px;
        position: relative;
    }

    .profile-form strong{
        font-size: 15px;
        padding-left: 10px;
    }

    .profile-form span{
        position: absolute;
        right: 0;
        font-size: 14px;
    }

    .profile-form img{
        width: 14px;
        height: 14px;
        padding-top: 3px;
    }

    .order{
        display: flex;
        padding: 10px;
    }

    .order>div{
        flex: 1;
        font-size: 14px;
        text-align: center;
    }

    .order img{
        width: 26px;
        height: 26px;
        margin-bottom: 5px;
    }
</style>