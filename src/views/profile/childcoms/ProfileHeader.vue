<template>
    <div class="profile-header">
        <img src="~assets/img/profile/head.jpg" alt="" >
        <div>
            <h2>peko</h2>
            <div class="text">在这里可以添加个性签名 <img src="~assets/img/profile/jiantou.png" alt=""></div>
            <div class="text"><strong> 2 </strong>关注   |<strong> 0 </strong>粉丝</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileHeader"
    }
</script>

<style scoped>
    .profile-header{
        position: relative;
        display: flex;
    }

    .profile-header h2{
        font-size: 20px;
        margin-top: 10px;
        margin-left: 10px;
    }

    .text{
        font-size: 14px;
        margin-top: 5px;
        margin-left: 10px;
    }

    .profile-header img{
        height: 60px;
        width: 60px;
        border-radius: 50px;
        margin: 10px 10px 0 20px;
    }

    .text img{
        width: 16px;
        height: 16px;
        position: absolute;
        top: 30%;
        right: 0;
    }
</style>