<template>
  <div class='shopcart'>
      <div class="shopHeader">
          <span style='font-size:36px'>购物车</span>
          <span style='font-size:28px;color:red'>领券</span>
      </div>
      <div class="shopNav">
          <div class="shopNavItem">
            <span clas='iconfont icon-yuandianzhong' ></span>
            <span>30天无忧退货</span>
          </div>
          <div class="shopNavItem">
            <span clas='iconfont icon-yuandianzhong' ></span>
            <span>48小时快速退款</span>
          </div>
          <div class="shopNavItem">
            <span clas='iconfont icon-yuandianzhong' ></span>
            <span>满99元免邮费</span>
          </div>
      </div>
      <div class="shopContent">
          <div class="unLogin">
              <img src="../../static/image/211.png" alt="">
              <div class="button">
                  登录
              </div>
          </div>
      </div>
  </div>
</template>

<script >
import Vue from 'vue'
import Meta from 'vue-meta'
Vue.use(Meta)
  export default {
    metaInfo: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=0.5,minimum-scale=0.5,maximum-scale=0.5,user-scalable=no' }
      ]
    },
    data () {
      return {

      }
    },
    components: {

    }
  }
</script>

<style lang='stylus'>
.shopcart
  position relative
  width 100%
  height 100%
  background #f4f4f4
  .shopHeader
    width 690px
    height 87.984px
    padding 0 30px
    background white
    display flex
    justify-content space-between
    align-items center
  .shopNav
    position absolute
    left 0
    top 87.97px
    width 690px
    height 69.984px
    padding 0 30px
    background #eee
    display flex
    justify-content space-around
    align-items center
    .shopNavItem
      &>span:first-of-type 
        width 9.984px
        height 9.984px
        display inline-block
        background red
        margin-right 10px
        border-radius 50%
  .shopContent
    width 100%
    height calc(100vh - 185.97px)
    overflow hidden
    .unLogin
      width 750px
      height 300px
      margin 498px 0
      display flex 
      justify-content center
      flex-direction column
      align-items center
      &>img 
        width 248px
        height 248px
        margin-bottom 8px
      .button
        width 480px
        height 92px
        margin 0 135px
        background red
        line-height 92px
        text-align center
        color white
</style>