<template>
  <div class="goods" >
    <img :src="showImage" alt="" @load="imageLoad" @click="toDetail">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>   <!--将父组件传来的数据中的具体数值展示-->
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imageLoad(){
      this.$bus.$emit('imageItemLoad')  //发出图片加载完成的信号
    },
    toDetail(){
      this.$router.push('/detail' + this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>
.goods {
  padding-bottom: 40px;
  position: relative;  /*盒子宽度设置为百分比，在各种设备中都能正常显示*/
  width: 48%;
}
.goods img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;  /*让文字在一行内显示，如有多则省略成点*/
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {  /*用伪元素将收藏的按钮展示*/
  content: '';
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
