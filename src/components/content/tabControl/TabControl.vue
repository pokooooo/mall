<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles"
             class="tab-control-item" @click="changeIndex(index)" :class="{active: index === currentIndex }">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props: {
            titles: {
                type: Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                currentIndex: 0
            }
        },
        methods: {
            changeIndex(index){
                this.currentIndex = index
                this.$emit('changeTab',index)
            },
        }
    }
</script>

<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
    }

    .tab-control-item{
        flex: 1;
        height: 40px;
        line-height: 40px;
    }

    .active span{
        color: var(--color-high-text);
        padding-bottom: 5px;
        border-bottom: 3px solid var(--color-high-text);
    }
</style>