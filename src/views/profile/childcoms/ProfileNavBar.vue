<template>
    <nav-bar class="profile-nav-bar">
        <template #center>
            <span>个人中心</span>
        </template>
    </nav-bar>
</template>

<script>
    import NavBar from "../../../components/common/navbar/NavBar";
    export default {
        name: "ProfileNavBar",
        components: {
            NavBar
        }
    }
</script>

<style scoped>
.profile-nav-bar{
    background-color: var(--color-high-text);
    color: #fff;
}
</style>