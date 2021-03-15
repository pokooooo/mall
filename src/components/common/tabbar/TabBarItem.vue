<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1  //当前活跃对象中的path与此处的path相匹配，若匹配成功则返回值不为-1，判断成立返回true
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}  //若为活跃对象，style属性加入color，值为传来的activeColor
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)  //路由切换至path传来的地址
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
