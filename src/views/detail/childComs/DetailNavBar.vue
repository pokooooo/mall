<template>
    <nav-bar>
        <template #left>
            <img src="~assets/img/common/back.svg" alt="" @click="back" class="detail-back">
        </template>
        <template #center>
            <div class="detail-title">
                <div v-for="(item,index) in titles" class="detail-title-item"
                     @click="changeIndex(index)" :class="{active: index === currentIndex}">
                    {{item}}
                </div>
            </div>
        </template>
    </nav-bar>
</template>

<script>
    import NavBar from "../../../components/common/navbar/NavBar";
    export default {
        name: "DetailNavBar",
        data(){
            return {
                titles: ['商品','参数','评论','推荐'],
                currentIndex: 0
            }
        },
        components: {
            NavBar
        },
        methods: {
            back(){
                this.$router.back()
            },
            changeIndex(index){
                this.currentIndex = index
                this.$emit('titleClick',index)
            }
        }
    }
</script>

<style scoped>
    .detail-title{
        display: flex;
    }

    .detail-back{
        padding-top: 10px;
    }

    .detail-title-item{
        flex: 1;
    }

    .active{
        color: var(--color-high-text);
    }


</style>