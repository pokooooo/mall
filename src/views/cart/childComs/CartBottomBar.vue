<template>
  <div class="bottom-bar">
    <div class="left">
      <check-button class="check-button"  :is-check="isCheckAll" @click.native="checkAll"></check-button>
      <div>全选</div>
    </div>
    <div class="center">合计:{{totalPrice}}</div>
    <div class="right" @click="calcClick">结算:{{checkLength}}</div>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton";


export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    totalPrice(){
      return '￥' + this.$store.getters.getListItem.filter(n => n.checked).reduce((i,n) => (n.price * n.count) + i,0).toFixed(2)
    },
    checkLength(){
      return this.$store.getters.getListItem.filter(n => n.checked).length
    },
    isCheckAll(){
      if(this.$store.getters.getListLength === 0) return false
      for(let item of this.$store.getters.getListItem){
        if(!item.checked)
          return false
      }
      return true
    }
  },
  methods: {
    checkAll(){
      this.$store.commit('checkAll',this.isCheckAll)
    },
    calcClick(){
      if(!this.isCheckAll){
        this.$toast.show('请选择购买的商品',2000)
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    position: relative;
    height: 40px;
    background-color: #eee;
    display: flex;
  }

  .left {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 80px;
  }

  .check-button{
    height: 20px;
    width: 20px;
    margin-right: 5px;
  }

  .center {
    line-height: 40px;
    flex: 1;
  }

  .right {
    width: 90px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background-color: red;
  }



</style>
