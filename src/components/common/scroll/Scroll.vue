<template>
    <div ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "Scroll",
        data(){
            return {
                scroll: null
            }
        },
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper,{
                click: true,
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad
            })
            // 监听滚动事件
            this.scroll.on('scroll',position => {
                this.$emit('contentScroll',position)
            })
            // 监听上拉到顶部事件
            this.scroll.on('pullingUp',() => {
                this.$emit('pullUpLoad')
            })

        },
        methods: {
            scrollTo(x,y,time = 300){
                this.scroll.scrollTo(x,y,time)
            },
            finishPullUp(){
                this.scroll.finishPullUp()
            },
            refresh(){
                this.scroll.refresh()
            },
            getScrollY(){
                return this.scroll.y
            }
        }
    }
</script>

<style scoped>

</style>