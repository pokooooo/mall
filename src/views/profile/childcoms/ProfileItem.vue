<template>
    <div class="profile-item">
        <div v-for="(item,index) in items" :key="index" class="profile-items">
            <strong>{{item.name}}</strong>
            <div>{{item.text}}</div>
            <img :src="item.image" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileItem",
        data(){
            return {
                items: [
                    {name: '会员中心',text: '淘气值快速提升',image: require('../../../assets/img/profile/huiyuan.png')},
                    {name: '淘宝省钱卡',text: '1分钱得91元红包',image: require('../../../assets/img/profile/ka.png')},
                    {name: '淘宝人生',text: '稀有装扮免费抽',image: require('../../../assets/img/profile/rensheng.png')},
                    {name: '红包签到',text: '立即获得红包',image: require('../../../assets/img/profile/hongbao.png')}
                ]
            }
        },
    }
</script>

<style scoped>
    .profile-item{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        font-size: 15px;
        margin: 10px;
        background-color: #fff;
        border-radius: 10px;
    }

    .profile-items{
        position: relative;
        width: 45%;
        padding: 10px 5px;
    }

    .profile-items>div{
        font-size: 13px;
        color: red;
        margin-top: 5px;
    }

    .profile-item img{
        width: 35px;
        height: 35px;
        position: absolute;
        right: 0;
        top: 8px;


    }
</style>